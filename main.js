status="";
video="";
objects=[];
function preload(){
    video = createVideo('video.mp4');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
}
function draw(){
    image(video,0,0,300,300);
    if(status!=""){
        objectdetector.detect(video,gotresults);
for(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="objects detected";
    document.getElementById("number").innerHTML="objects detected:"+objects.length;
    fill("#ff0000");
    noFill();
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
    rect(objects[i].x,objects[i].y,object[i].width,objects[i].height);
}
    }
}
function start(){
    objectdetector=ml5.objectDetector('cocossd',modaloaded);
    document.getElementById("status").innerHTML="Detecting objects";
}
function modaloaded(){
console.log("modalloaded");
status=true;   
video.loop();
video.volume(0);
video.speed(1);
}
function gotresults(error,results){
if (error){
    console.error(error);
}else{
    console.log(results);
    objects=results;
}
}