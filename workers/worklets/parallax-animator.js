registerAnimator('parallax', class ParallaxAnimator {
    constructor(options) {
      this.rate_ = options.rate;
    }
  
    animate(currentTime, effect) {
      effect.localTime = currentTime * this.rate_;
    }
  });