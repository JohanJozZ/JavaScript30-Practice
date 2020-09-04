const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsList = document.querySelector('#bands');

function strip(band){
  return band.replace(/^(a|the|an) /i,'')
}

const sortedBands = bands.sort((current, previous) => strip(current) > strip(previous) ? 1:-1); 

bandsList.innerHTML = sortedBands.map(band =>`<li>${band}</li>`).join('');