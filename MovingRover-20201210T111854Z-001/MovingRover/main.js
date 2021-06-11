canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

ImgArray = ["Rover.jpg", "Surface.jpg" ,"Surface2.jpg", "Surface3.jpg"];

RandomNum = Math.floor(Math.random() * 4);
console.log(RandomNum);

background_image = ImgArray[RandomNum];
console.log("The background is" + background_image);

RoverImg = "rover.png";
roverWidth = 90;
roverHeight = 75;
RoverX = 15;
RoverY = 15;

function add(){
    console.log("test");
 backgroundImgTag = new Image();
 backgroundImgTag.onload = backgroundUpload();
backgroundImgTag.src = background_image;

RoverImgTag = new Image();
RoverImgTag.onload = roverUpload();
RoverImgTag.src = RoverImg;
}

function backgroundUpload(){
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function roverUpload(){
    ctx.drawImage(RoverImgTag, RoverX, RoverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", myKeydown);

    function myKeydown(e){

        keyPress = e.keyCode;
        console.log(keyPress);
        
        if(keyPress == "38"){
            up();
            console.log("up");
        }
        if(keyPress == "40"){
            down();
            console.log("down");
        }
        if (keyPress == "37"){
            left();
            console.log("left");
        }
        if (keyPress == "39"){
            right();
            console.log ("right");
        }
    }


    function up(){

        if(RoverY >=0){

            RoverY = RoverY - 10;
            console.log(RoverX , RoverY);
            backgroundUpload();
            roverUpload();
        }
    }

    function down(){

        if(RoverY <=625)
        {
            RoverY = RoverY + 10;
            console.log(RoverX , RoverY);
            backgroundUpload();
            roverUpload();
        }

    }

    function left(){

        if(RoverX >= 0)
        {
            RoverX = RoverX + 10;
            console.log(RoverX , RoverY);
            backgroundUpload();
            roverUpload();
        }
    }

    function right(){

        if(RoverX <=700)
        {
            RoverX = RoverX + 10;
            console.log(RoverX , RoverY);
            backgroundUpload();
            roverUpload();
        }
    }




