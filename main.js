img = "";
status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECTS";
}

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    rect(30, 60, 450, 350);
    text("Dog", 45, 75);

    fill("#62c6dd");
    stroke("#62c6dd");
    noFill();
    rect(300, 90, 270, 320);
    text("Cat", 320, 120);

    fill("#0036FF");
    stroke("#0036FF");
    noFill();
    rect(260, 320, 135, 90);
    text("Bowl", 270, 330);
}

function modelLoaded() {
    console.log("OBJECT DETECTOR NAME : COCOSSD, STATUS : MODEL SUCCESSFULY LOADED");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(results, error) {
    if(error) {
        console.log(error);
    }
    else if(results > 0) {
        console.log(results);
    }
}