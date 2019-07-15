function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var mediaToggler = function (containerId) {
  const togglerClass = 'media__toggler'
  const contentClass = 'media__content';
  const togglerItemClass = 'media__toggler-item';
  const togglerVisualClass = 'media__toggler-visual';
  const videoClass = 'media__content-video';
  let isPlaying = false;
  const actClass = function (className) {
    return className + '--active'
  };
  const container = document.getElementById(containerId);
  if (container) {
    const toggler = container.getElementsByClassName(togglerClass);
    const togglerVisual = container.getElementsByClassName(togglerVisualClass);
    const contentList = container.getElementsByClassName(contentClass);
    const togglerItemsList = container.getElementsByClassName(togglerItemClass);
    const video = container.getElementsByClassName(videoClass);
    if (
      (togglerVisual.length === 1) &&
      (toggler.length === 1) &&
      (contentList.length === 2) &&
      (togglerItemsList.length === 2)
    ) {
      toggler[0].addEventListener('click', function (e) {
        togglerVisual[0].classList.toggle(actClass(togglerVisualClass));
        for (const key in contentList) {
          if (contentList[key].nodeType === 1) {
            contentList[key].classList.toggle(actClass(contentClass));
          }
        }
        for (const key in togglerItemsList) {
          if (togglerItemsList[key].nodeType === 1) {
            togglerItemsList[key].classList.toggle(actClass(togglerItemClass));
          }
        }
        if (video.length !== 0) {
          if (
            (video.length === 1) &&
            (isPlaying === false)
          ) {
            video[0].play();
            isPlaying = true;
          } else {
            video[0].pause();
            video[0].currentTime = 0;
            isPlaying = false;
          }
        }
      });
    }
  }
};

ready(function () {
  mediaToggler('photo-video');
  mediaToggler('qr-qr');
})
