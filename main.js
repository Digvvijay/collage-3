var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML=null;
    Recognition.start();
}

Recognition.onresult=function(event){
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
if(content=="take my selfie")
{
    console.log("take selfie---");
    speak();
}
}

function speak()
{
    var synth=window.speechSynthesis;
    Webcam.attach(camera);
    
    setTimeout(function()
    {
        img_id="selfie1";
        takesnapshot();
        speakdata="taking your first selfie in 5 seconds";
        var utterthis=new SpeechSynthesisUtterance(speakdata);
        synth.speak(utterthis);
        save();

    },5000);
    setTimeout(function()
    {
        img_id="selfie2";
        takesnapshot();
        speakdata="taking your second selfie in 5 seconds";
        var utterthis=new SpeechSynthesisUtterance(speakdata);
        synth.speak(utterthis);
        save();

    },10000);
    setTimeout(function()
    {
        img_id="selfie3";
        takesnapshot();
        speakdata="taking your third selfie in 5 seconds";
        var utterthis=new SpeechSynthesisUtterance(speakdata);
        synth.speak(utterthis);
        save();

    },15000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90});
    camera=document.getElementById("camera");

    function takesnapshot()
    {
        console.log(img_id);
        Webcam.snap(function(data_uri){
            if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img src="'+data_uri+'" id="selfie1" >';
            }
            if(img_id=="selfie2"){
                document.getElementById("result2").innerHTML='<img src="'+data_uri+'" id="selfie2" >';
            }
            if(img_id=="selfie3"){
                document.getElementById("result3").innerHTML='<img src="'+data_uri+'" id="selfie3" >';
            }

        });
    }

    function save()
    {
        link=document.getElementById("link");
        image=document.getElementById("selfie1").src;
        image=document.getElementById("selfie2").src;
        image=document.getElementById("selfie3").src;
        link.href=image;
        link.click();
    }
     