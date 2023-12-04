function setup(){
angleMode(DEGREES);
canvas =createCanvas(400,400);
canvas.parent('sketch');
background (127, 255, 174);
button = createButton("PUSH");
button.mouseClicked(moveButton);
}

function draw(){
background(50,205,50);
strokeWeight(8);
stroke("green"); 
let end =map (mouseX,0,width,0,360);
arc(200,200,100,100,0,end,OPEN);
arc(310,200,100,100,0,end);
push();
strokeWeight(4);
stroke("green");
noFill();
arc(90,200,100,100,0,end);
arc(90,200,80,80,0,end);
arc(90,200,60,60,0,end);
arc(90,200,40,40,0,end);
arc(90,200,20,20,0,end);
pop(); 
}

 function mousePressed() {
   fill(random(255), random(255), random(255), random(255));
}

function moveButton(){
button.position(random(width),random(height));
}


function keyPressed(){
    if (key === 'r'){
    save('image.png');
 }
}
