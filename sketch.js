const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
            background(backgroundImg)


    Engine.update(engine);

    // write code to display time in correct format here
    if(hour === 1){
        var time = 1
    }else if(hour = 2){
        var time = 2
    }else if(hour = 3){
        var time = 3
    }else if(hour = 4){
        var time = 4
    }else if(hour = 5){
        var time = 5
    }else if(hour = 6){
        var time = 6
    }else if(hour = 7){
        var time = 7
    }else if(hour = 8){
        var time = 8
    }else if(hour = 9){
        var time = 9
    }else if(hour = 10){
        var time = 10
    }else if(hour = 11){
        var time = 11
    }else if(hour = 12){
        var time = 12
    }else if(hour = 13){
        var time = 1
    }else if(hour = 14){
        var time = 2
    }else if(hour = 15){
        var time = 3
    }else if(hour = 16){
        var time = 4
    }else if(hour = 17){
        var time = 5
    }else if(hour = 18){
        var time = 6
    }else if(hour = 19){
        var time = 7
    }else if(hour = 20){
        var time = 8
    }else if(hour = 21){
        var time = 9
    }else if(hour = 22){
        var time = 10
    }else if(hour = 23){
        var time = 11
    }else {
        var time = 12 
    }
    
    if(backgroundImg){
     textSize(50);
     text("Time : " + time ,100,100)
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();

    // write code slice the datetime
    var dateT = responseJSON.datetime;

    // add conditions to change the background images from sunrise to sunset
    var hour = dateT.slice(11,13);
    

    //load the image in backgroundImg variable here
    if(hour >= 3 && hour <= 4){
        bg = "sunset11.png"
    } 
    else if(hour >= 5 && hour <= 6){
        bg = "sunrise1.png"
    } 
    else if(hour >= 7 && hour <= 8){
        bg = "sunrise2.png"
    } 
    else if(hour = 9){
        bg = "sunrise3.png"
    } 
    else if(hour >= 10 && hour <= 11){
        bg = "sunrise4.png"
    } 
    else if(hour >= 12 && hour <= 13){
        bg = "sunrise5.png"
    }
    else if(hour >= 14 && hour <= 16){
        bg = "sunrise6.png"
    }
    else if(hour >= 17 && hour <= 18){
        bg = "sunset7.png"
    }
    else if(hour = 19){
        bg = "sunset8.png"
    }
    else if(hour = 20){
        bg = "sunset9.png"
    }
    else if(hour = 21){
        bg = "sunset10.png"
    }
    else if(hour = 22){
        bg = "sunset11.png"
    }
    else{
        bg = "sunset12.png"
    }
    

    backgroundImg = loadImage(bg);

}
