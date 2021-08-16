import { MP4 } from './mp4';
import { AudioTrack, VideoTrack } from './types';

export class MP4Remuxer {
  private initSegmentCreated = false;

  constructor(readonly videoTrack: VideoTrack, readonly audioTrack: AudioTrack) {
    this.videoTrack = videoTrack;
    this.audioTrack = audioTrack;
  }

  remux() {
    const hasVideo = this.videoTrack.samples.length && this.videoTrack.pps.length && this.videoTrack.sps.length;
    const hasAudio = this.audioTrack.samples.length && this.audioTrack.channelCount && this.audioTrack.sampleRate;

    let videoInitSegment: Uint8Array | undefined;
    let audioInitSegment: Uint8Array | undefined;
    if (!this.initSegmentCreated) {
      if (hasVideo) videoInitSegment = MP4.initSegment([this.videoTrack]);
      if (hasAudio) audioInitSegment = MP4.initSegment([this.audioTrack]);
      this.initSegmentCreated = true;
    }

    let videoChunk: Uint8Array | undefined;
    let audioChunk: Uint8Array | undefined;
    if (hasVideo) videoChunk = this.remuxVideo();
    if (hasAudio) audioChunk = this.remuxAudio();

    this.videoTrack.samples = [];
    this.audioTrack.samples = [];

    return {
      videoInitSegment,
      audioInitSegment,
      videoChunk,
      audioChunk,
    };
  }

  remuxVideo() {
    const track = this.videoTrack;
    let mdatSize = 0;
    track.samples.forEach((s) => {
      mdatSize += s.units.reduce((t, c) => (t + c.byteLength), 0);
      mdatSize += (s.units.length * 4);
    });

    const mdatData = new Uint8Array(mdatSize);
    const mdatView = new DataView(mdatData.buffer);

    for (let i = 0, l = track.samples.length, offset = 0, sample; i < l; i++) {
      sample = track.samples[i];

      let sampleSize = 0;
      sample.units.forEach((u) => {
        mdatView.setUint32(offset, u.byteLength);
        offset += 4;
        mdatData.set(u, offset);
        offset += u.byteLength;
        sampleSize += (4 + u.byteLength);
      });
      sample.size = sampleSize;
    }

    const mdat = MP4.mdat(mdatData);
    const moof = MP4.moof(this.videoTrack.sequenceNumber++, [track]);

    const chunk = new Uint8Array(moof.byteLength + mdat.byteLength);
    chunk.set(moof);
    chunk.set(mdat, moof.byteLength);

    return chunk;
  }

  remuxAudio() {
    const track = this.audioTrack;
    const moof = MP4.moof(this.audioTrack.sequenceNumber++, [track]);
    const mdatData = new Uint8Array(track.samples.reduce((t, c) => (t + c.size), 0));
    track.samples.reduce((offset, s) => (mdatData.set(s.data, offset), offset + s.size), 0);
    const mdat = MP4.mdat(mdatData);

    const chunk = new Uint8Array(moof.byteLength + mdat.byteLength);
    chunk.set(moof);
    chunk.set(mdat, moof.byteLength);

    return chunk;
  }
}
