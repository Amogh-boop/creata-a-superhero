

var canvas=new fabric.Canvas;

var block_width=30;
var block_height=30;
player_x=10;
player_y=10;
player_object="";
block_object=""; 

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });



}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if (keypressed=='70'){
    new_image('spiderman_face.png');
    console.log("face");
}

if (keypressed=='66'){
    new_image('hulkd_body.png');
    console.log("body");
}

if (keypressed=='82'){
    new_image('thor_right_hand.png');
    console.log("right hand");
}

if (keypressed=='72'){
    new_image('spiderman_left_hand.png');
    console.log("left hand");
}

if (keypressed=='76'){
    new_image('ironman_legs.png');
    console.log("leg");
}
if (keypressed=='80' && e.shiftKey==true){
    console.log("shift + p");
    block_height= block_height + 10;
    block_width= block_width + 10;
    document.getElementById("current_height").innerHTML=block_height;
    document.getElementById("current_width").innerHTML=block_width;
}
if (keypressed=='77' && e.shiftKey==true){
    console.log("shift + m");
    block_height= block_height - 10;
    block_width= block_width - 10;
    document.getElementById("current_height").innerHTML=block_height;
    document.getElementById("current_width").innerHTML=block_width;
}

if (keypressed=='38'){
    
    up()
    console.log("up")
}

if (keypressed=='40'){
    
    down()
    console.log("down")
}

if (keypressed=='39'){
    
    right()
    console.log("right")
}

if (keypressed=='37'){
    
    left()
    console.log("left")
}



function up(){
    if (player_y>'0'){
    player_y = player_y - block_height;
        console.log("block image height" + block_height);
        console.log("when up arrow key pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y<'650'){
    player_y = player_y + block_height;
        console.log("block image height" + block_height);
        console.log("when down arrow key pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x<'1000'){
    player_x = player_x + block_width;
        console.log("block image width" + block_width);
        console.log("when right arrow key pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x>'0'){
    player_x = player_x - block_width;
        console.log("block image width" + block_width);
        console.log("when right arrow key pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
}