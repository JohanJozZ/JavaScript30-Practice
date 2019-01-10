const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo(){
  navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(localMediaStream=>{
    video.srcObject = localMediaStream;
    video.play();
  }).catch(err=>{
    console.error(`Access to webcam denied`,err);});
}
getVideo();

function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  
  //Show video in canvas
  return setInterval(()=>{
    ctx.drawImage(video,0,0,width,height); 
    //get pixels
    let pixels = ctx.getImageData(0,0,width,height);
    //take pixels out
    pixels = redEffect(pixels);
    ctx.putImageData(pixels,0,0);
  },25);
}

function takePhoto(){
  snap.currentTime = 0;
  snap.play();
  
  //take data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href=data;
  link.setAttribute('download','sexy');
  link.textContent = 'Download image';
  strip.insertBefore(link,strip.firstChild);
  link.innerHTML = `<img src=${data} alt="photo taken from webcam">`;
  console.log(data);
}

function redEffect(pixels){
  for (let i=0;i<pixels.data.length;i+=4){
    pixels.data[i] = pixels.data[i]+100; //red
    pixels.data[i+1]= pixels.data[i+1]-40 //green
    pixels.data[i+2]= pixels.data[i+2]*0.6 //blue
  }
  return pixels;
}

video.addEventListener('canplay',paintToCanvas);