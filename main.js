prediction="";
Webcam.set({
width:350,
height:300,
image_format: "jpeg",
jpeg_quality: 100
});
camera =document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
  Webcam.snap(function (data_uri){
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  });
};
console.log('ml5 version:',ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FwOXlfquK/model.json",ModelLoaded);
function ModelLoaded() {
   console.log("Model Loaded"); 
}