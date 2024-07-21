function preload() {
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}
function draw() {
   image(video, 0, 0, 600,600);
   
   fill(0, 128, 0);
   stroke(0, 128, 0);
   circle(35, 35, 70);
}