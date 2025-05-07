// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // voice
  const voice_select = document.getElementById("voice-select");
  const synth = window.speechSynthesis;

  // button
  const push_to_talk_btn = document.querySelector("button");
  const speaking_img = document.querySelector("#explore img");
  const input = document.querySelector("textarea");

  // populate voices
  let voices = [];
  function populateVoicesList() {
    voices = synth.getVoices();

    voices.forEach((voice) => {
      const option = document.createElement("option");

      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-name", voice.name);

      voice_select.appendChild(option);
    });
  }
  populateVoicesList();

  // on button press
  push_to_talk_btn.addEventListener("click", () => {
    const text = input.value;
    const utterance = new SpeechSynthesisUtterance(text);
    const selected_voice =
      voice_select.selectedOptions[0].getAttribute("data-name");

    if (!text || voice_select.selectedOptions[0].disabled) {
      return;
    }

    voices.forEach((voice) => {
      if (voice.name === selected_voice) {
        utterance.voice = voice;
      }
    });

    speaking_img.src = "assets/images/smiling-open.png";

    utterance.onend = () => {
      speaking_img.src = "assets/images/smiling.png";
    };

    synth.speak(utterance);
  });
}
