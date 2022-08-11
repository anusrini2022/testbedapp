new WorkletAnimation(
    'passthrough',
    new KeyframeEffect(
      document.querySelector('#a'),
      [
        {
          transform: 'translateX(0)'
        },
        {
          transform: 'translateX(500px)'
        }
      ],
      {
        duration: 2000,
        iterations: Number.POSITIVE_INFINITY
      }
    ),
    document.timeline
  ).play();
registerAnimator(
    'passthrough',
    class {
      animate(currentTime, effect) {
        effect.localTime = currentTime;
      }
    }
  );