window.addEventListener('keyup', (e) => {
  if (e.keyCode === 192 && e.ctrlKey) {
    $('html').toggleClass('debug-outlines');
  }
});
