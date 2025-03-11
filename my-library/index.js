export function convertToSpeech(enteredtext) {
  const speechSynth = window.speechSynthesis;
  console.log(enteredtext);
  if (!speechSynth.speaking && !enteredtext.trim().length) {
    console.log("No Content provided for operation");
  }

  if (!speechSynth.speaking && enteredtext.trim().length) {
    const newUtter = new SpeechSynthesisUtterance(enteredtext);
    speechSynth.speak(newUtter);
  }
}
