function convertToSpeech(enteredtext) {
  const speechSynth = window.speechSynthesis;
  console.log(enteredtext);
  if (!speechSynth.speaking && !enteredText.trim().length) {
    console.log("No Content provided for operation");
  }

  if (!speechSynth.speaking && enteredtext.trim().length) {
    const newUtter = new SpeechSynthesisUtterance(enteredtext);
    speechSynth.speak(newUtter);
    convertBtn.textContent = "Sound is Playing...";
  }

  setTimeout(() => {
    convertBtn.textContent = "Play Converted Sound";
  }, 5000);
}

convertToSpeech("this is a nice world");
