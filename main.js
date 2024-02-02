let clownFace;
let faceX = 0;
let faceY = 0;


function preload() {
  clownFace = loadImage('https://i.postimg.cc/hPh18nDh/Design-sem-nome.png');
}


function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();


  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}


function modelLoaded() {
  console.log('PoseNet Is Initialized');
}


function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    faceX = results[0].pose.nose.x - 15;
    faceY = results[0].pose.nose.y - 15;
  }
}


function draw() {
  image(video, 0, 0, 300, 300);


  // Ajuste as coordenadas para centralizar a imagem no rosto
  const imageSize = 250;
  const faceCenterX = faceX - imageSize / 2;
  const faceCenterY = faceY - imageSize / 2;


  image(clownFace, faceCenterX, faceCenterY, imageSize, imageSize);



}


function take_snapshot() {
  save('myFilterImage.png');
}


