/**
 * Procedural Web Audio Engine for DestinySphere Tarot Experience.
 * Synthesizes peaceful celestial harp arpeggios, ambient temple chords, and crystal chimes at 100% full device volume.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = false;
  private isMusicPlaying: boolean = false;
  private musicIntervalId: NodeJS.Timeout | null = null;
  private noteIndex: number = 0;

  // Peaceful celestial pentatonic notes (Hz): A3, C4, D4, E4, G4, A4, C5, D5, E5, G5
  private melodyScale: number[] = [
    220.0, 261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99,
  ];

  // Relaxing spiritual arpeggio sequence
  private arpeggioPattern: number[] = [0, 2, 3, 5, 7, 5, 3, 2, 1, 3, 4, 6, 8, 6, 4, 3];

  private getAudioContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => { });
    }
    return this.ctx;
  }

  /**
   * Start peaceful celestial harp music at 100% full volume.
   */
  public startAmbientTone() {
    if (this.isMusicPlaying) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      if (!this.masterGain) {
        this.masterGain = ctx.createGain();
        // 100% device volume (1.0)
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0.0001 : 1.0, ctx.currentTime);
        this.masterGain.connect(ctx.destination);
      } else {
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0.0001 : 1.0, ctx.currentTime);
      }

      this.isMusicPlaying = true;
      this.playHarpNote();

      // Play soothing celestial notes rhythmically every 950ms
      this.musicIntervalId = setInterval(() => {
        if (!this.isMuted && this.isMusicPlaying) {
          this.playHarpNote();
        }
      }, 950);
    } catch (e) {
      console.warn("Music start error:", e);
    }
  }

  /**
   * Synthesize a plucked acoustic celestial harp/bell note with rich harmonic warmth at 100% volume.
   */
  private playHarpNote() {
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;

    try {
      const scaleIdx = this.arpeggioPattern[this.noteIndex % this.arpeggioPattern.length];
      const freq = this.melodyScale[scaleIdx % this.melodyScale.length];
      this.noteIndex++;

      const now = ctx.currentTime;

      // Note gain with gentle pluck envelope (100% volume)
      const noteGain = ctx.createGain();
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.70, now + 0.025);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      // Low pass filter for warm harp acoustic resonance
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1600, now);
      filter.frequency.exponentialRampToValueAtTime(500, now + 1.5);

      // Fundamental tone (warm sine)
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(freq, now);

      // Second harmonic for crystal chime sparkle (triangle)
      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(freq * 2, now);
      const osc2Gain = ctx.createGain();
      osc2Gain.gain.setValueAtTime(0.35, now);

      osc1.connect(filter);
      osc2.connect(osc2Gain);
      osc2Gain.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.9);
      osc2.stop(now + 1.9);
    } catch { }
  }

  /**
   * Stop music smoothly
   */
  public stopAmbientTone() {
    if (this.musicIntervalId) {
      clearInterval(this.musicIntervalId);
      this.musicIntervalId = null;
    }
    this.isMusicPlaying = false;
  }

  /**
   * Toggle mute
   */
  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    const ctx = this.getAudioContext();
    if (this.masterGain && ctx) {
      const targetGain = this.isMuted ? 0.0001 : 1.0;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(targetGain, ctx.currentTime + 0.2);
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Play Card Hover Tick at full volume
   */
  public playCardHover() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(660, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(990, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.30, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch { }
  }

  /**
   * Play Card Draw / Selection Whoosh & Shimmer at 100% volume
   */
  public playCardSelect() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      // 1. Soft whoosh
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(550, now + 0.2);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.40, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);

      // 2. Sparkle chime chord (A major pentatonic)
      const freqs = [440, 554.37, 659.25, 880];
      freqs.forEach((f, i) => {
        const chime = ctx.createOscillator();
        const chimeGain = ctx.createGain();
        chime.type = "sine";
        chime.frequency.setValueAtTime(f, now + i * 0.03);

        chimeGain.gain.setValueAtTime(0.001, now + i * 0.03);
        chimeGain.gain.linearRampToValueAtTime(0.35, now + i * 0.03 + 0.02);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.03 + 0.5);

        chime.connect(chimeGain);
        chimeGain.connect(ctx.destination);
        chime.start(now + i * 0.03);
        chime.stop(now + i * 0.03 + 0.5);
      });
    } catch { }
  }

  /**
   * Play Card Flip & Revelation Celestial Shimmer Bell at 100% volume
   */
  public playCardFlip() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const bellFreqs = [528, 1056, 1584, 2112];
      const decayTimes = [1.6, 1.2, 0.8, 0.5];

      bellFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        const vol = 0.45 / (idx + 1);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + decayTimes[idx]);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + decayTimes[idx]);
      });
    } catch { }
  }

  /**
   * Play Astrologer Message Ding (Crystal Bowl ping) at 100% volume
   */
  public playMessageDing() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(875, now + 0.8);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.45, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.8);
    } catch { }
  }
}

export const audioEngine = new SoundEngine();
