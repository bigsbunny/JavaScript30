
const body = document.querySelector("body");

body.addEventListener("keydown", (e) => {
  const clickedKey = e.keyCode;

  const drumKey = document.querySelector(`div[data-key='${clickedKey}']`);
  const drumSound = document.querySelector(`audio[data-key='${clickedKey}']`);

  drumKey.classList.add("playing")
  drumSound.currentTime = 0;
  drumSound.play();
  setTimeout(() => {
        drumKey.classList.remove("playing")
      }, 100); //remove the playing class' styles after 100ms.
});
