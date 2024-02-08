var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL('birthdayImage.jpg',function(Img)){
blockImageObject = Img;

blockImageObject.scaleToWidth(700);
blockImageObject.scaleToheight(510);
blockImageObject.set({
top:0,
left:0
});
canvas.add(blockImageObject);
});

    }

function playSound(){
	function playSound(){
        x.play();
    }
}
