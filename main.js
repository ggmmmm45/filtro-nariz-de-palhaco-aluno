noseX=0;
noseY=0;

// Primeiro definimos uma função preload() 
function preload()
 {
  clown_nose = loadImage('https://i.postimg.cc/sgdjRD8n/Design-sem-nome.png');
 }


// Vamos criar uma função setup() e dentro dela criamos uma canvas (tela)
function setup() {
  canvas = createCanvas(300, 300);
  // colocaremos canvas no centro da página usando
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

function gotPoses(results)
{
  
  {
    console.log(results);
    faceX = results[0].pose.face.x-15;
    faceY = results[0].pose.face.y-15;
  }
}
// Vamos definir uma função draw() e a deixá-la vazia, nas próximas aulas iremos adicionar o código
// de acesso da webcam, para desenhar a imagem do nariz de palhaço na tela dentro da função
// draw()

function draw() {
 image(video, 0, 0, 300, 300);
  image(clown_nose, faceX, faceY, 200, 200);
}
// Agora vamos definir a função takeSnapshot(), que chamamos ao clicar no botão Tirar Foto
function take_snapshot(){   
  
//  Dentro da função save() temos que escrever o nome no qual queremos salvar o arquivo. 
 save('myFilterImage.png');
}
