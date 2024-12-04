canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.

cube_ancho=120;
cube_alto=120;

background_image = "level.jpg";

cube_image = "main.png";

cube_x = 10;
cube_y = 10;

//Crea la función "add()"
function add(){
background_imgTag = new Image(); //Define la variable con una nueva imagen
background_imgTag.onload = uploadBackground; // Define una función para cargar esta variable
background_imgTag.src =	background_image; // Carga la imagen

cube_imgTag = new Image(); //Define la variable con una nueva imagen
cube_imgTag.onload = uploadcube; // Define una función para cargar esta variable
cube_imgTag.src = cube_image; // Carga la imagen
}
//Crea una función "uploadBackground()".
function uploadBackground(){      
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); //Dibuja la imagen de fondo
}

//Crea una función "uploadrover()".
function uploadcube(){
ctx.drawImage(cube_imgTag, cube_x, cube_y, 100, 90); //Dibuja la imagen del explorador
}

window.addEventListener("keydown", my_keydown  );
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
	window.addEventListener("keydown", my_keydown);
    
    function my_keydown(e)
    {
        keyPressed = e.keycode;
        console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
        }
        if(keyPressed == '40')
        {
            down();
        }
        if(keyPressed == '37')
        {
            left();
        }
        if(keyPressed=='39'){
        right();
        }
    }
    


     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
		




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up()
{
if(cube_y >=0) //limite superrior del canva
{
    cube_y = cube_y - 5; //actualiza coordenada
    uploadBackground(); //actualiza imagen fondo canvas
    uploadcube(); //se actualiza el personaje
}
}
function down()
{
	if(cube_ <=500) //lim inf canva
    {
        cube_y = cube_y + 5;
        uploadBackground();
        uploadcube();
    }
}
//hacer
function right(){
	if(cube_x <=700){
        cube_x = cube_x +5; //actualiza coordenada
        uploadBackground(); //actualiza imagen fondo canvas
        uploadcube(); //se actualiza el personaje
    }
}
function left(){
    if(cube_x >=0){
        cube_x = cube_x - 5; //actualiza coordenada
        uploadBackground(); //actualiza imagen fondo canvas
        uploadcube(); //se actualiza el personaje
    }	
}



