/* globals Animations:true */
/* globals VelocityHelpers */

Animations = {
  // These two are just POC
  scaleIn: VelocityHelpers.registerEffect({
    defaultDuration: 1100,
    calls: [
      [{
        translateZ: 0,
        scale: [1, 0],
        opacity: [1, 0]
      }]
    ],
  }),

  scaleOut: VelocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        translateZ: 0,
        scale: [0, 1],
        opacity: [0, 1]
      }]
    ],
  }),

  animateScaleIn: VelocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        opacity: 1,
        scale: 1
      }, 1, {
        easing: [200, 15]
      }]
    ]
  }),

  component: {
    scaleIn: {
      duration: 150,
      easing: 'ease-out',
      animation: {
        opacity: 1,
        scale: [1, 0]
      }
    },
    scaleOut: {
      duration: 125,
      easing: [ 150, 15 ],
      animation: {
        opacity: 0,
        scale: [0, 1]
      }
    }
  }

};

_.each($.Velocity.Redirects, (val, key) => { Animations[key] = key; });
