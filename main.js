Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90

});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function cap(){
    Webcam.snap(function(data_uri){
      document.getElementById("img").innerHTML="<img id='imge' src="+data_uri+">";

    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gxUHOfkLf/model.json',modelLoadedFunction);
 function modelLoadedFunction(){
     console.log("Model is loaded");
 }