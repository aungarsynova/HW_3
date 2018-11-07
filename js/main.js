(() => {

    var duration = anime({
        targets: '#earth .svg-graphic',
        translateX: {
            value: 750,
            duration: 800
          },
          rotate: {
            value: 360,
            duration: 1800,
            easing: 'easeInOutSine'
          },
          scale: {
            value: 2,
            duration: 1600,
            delay: 800,
            easing: 'easeInOutQuart'
          },
            delay: 250 // All properties except 'scale' inherit 250ms delay

        });

        document.querySelector('#earth .svg-hraphic').onclick = duration.play;

})();