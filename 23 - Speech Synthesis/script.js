const msg = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelector = document.querySelector('#voices');
const options = document.querySelectorAll('[type="range"],[name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
  voices = this.getVoices();
  voiceSelector.innerHTML = voices
    .filter(voice => voice.lang.indexOf('en-')>-1 || voice.lang.indexOf('es-')>-1 )
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function changeVoice(){
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

//toggle(false) will stop it 
function toggle(startOver = true){
  speechSynthesis.cancel();
  if (startOver){
    speechSynthesis.speak(msg);
  }
}

function setOption(){
  msg[this.name]=this.value;
  toggle();
}


speechSynthesis.addEventListener('voiceschanged', populateVoices);
voiceSelector.addEventListener('change', changeVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', () => toggle());
stopButton.addEventListener('click', () => toggle(false));

