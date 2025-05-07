// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // horn
  const horn_select = document.getElementById("horn-select");
  const horn_img = document.querySelector("#expose img");
  const horn_audio = document.querySelector("#expose audio");

  // volume
  const volume_slider = document.getElementById("volume");
  const volume_icon = document.querySelector("#volume-controls img");

  // button
  const play_sound_btn = document.querySelector("button");

  // confetti
  const jsConfetti = new JSConfetti();

  horn_select.addEventListener("change", () => {
    const horn = horn_select.value;
    horn_img.src = `assets/images/${horn}.svg`;
    horn_audio.src = `assets/audio/${horn}.mp3`;
  });

  volume_slider.addEventListener("input", () => {
    const volume = volume_slider.value;
    horn_audio.volume = volume / 100;

    if (volume == 0) {
      volume_icon.src = "assets/icons/volume-level-0.svg";
      volume_icon.alt = "volume level 0";
    } else if (volume < 33) {
      volume_icon.src = "assets/icons/volume-level-1.svg";
      volume_icon.alt = "volume level 1";
    } else if (volume < 67) {
      volume_icon.src = "assets/icons/volume-level-2.svg";
      volume_icon.alt = "volume level 2";
    } else {
      volume_icon.src = "assets/icons/volume-level-3.svg";
      volume_icon.alt = "volume level 3";
    }
  });

  play_sound_btn.addEventListener("click", () => {
    horn_audio.play();
    if (horn_select.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
