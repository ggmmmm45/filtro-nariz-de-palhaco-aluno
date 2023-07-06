noseX=0;
noseY=0;

// Primeiro definimos uma função preload() 

 


// Vamos criar uma função setup() e dentro dela criamos uma canvas (tela)
function setup() {
  
  // colocaremos canvas no centro da página usando

  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

 
  
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}
// Vamos definir uma função draw() e a deixá-la vazia, nas próximas aulas iremos adicionar o código
// de acesso da webcam, para desenhar a imagem do nariz de palhaço na tela dentro da função
// draw()

function draw() {
  
  image(clown_nose, noseX, noseY, 30, 30);
}
// Agora vamos definir a função takeSnapshot(), que chamamos ao clicar no botão Tirar Foto
function take_snapshot(){   
  
//  Dentro da função save() temos que escrever o nome no qual queremos salvar o arquivo. 
 
}
