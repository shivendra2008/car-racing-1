canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 75;
car1_image = "Car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "Car2.png";
car2_x = 10;
car2_y = 80;

background_image = "track.jpg";

function add() 
{
    background_imgTag = new Image() ;
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image() ;
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image() ;
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() 
{
    ctx.drawImage(background_imgTag,0, 0, canvas.width, canvas.height);
}

function uploadCar1() 
{
    ctx.drawImage(car1_imgTag,car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() 
{
    ctx.drawImage(car2_imgTag,car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", key_Down);
function key_Down() 
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38')
    {
        car1_up();
        console.log("Car1: Up arrow key")
    }
    if (keyPressed == '40')
    {
        car1_down();
        console.log("Car1: Down arrow key")
    }
    if (keyPressed == '37')
    {
        car1_left();
        console.log("Car1: Left arrow key")
    }
    if (keyPressed == '39')
    {
        car1_right();
        console.log("Car1: Right arrow key")
    }
    if (keyPressed == '85')
    {
        car2_up();
        console.log("Car2: U alphabet key")
    }
    if (keyPressed == '68')
    {
        car2_down();
        console.log("Car2: D alphabet key")
    }

    if (keyPressed == '82')
    {
        car2_right();
        console.log("Car2: R alphabet key")
    }
    if (keyPressed == '76')
    {
        car2_left();
        console.log("Car2: L alphabet key")
    }
}
