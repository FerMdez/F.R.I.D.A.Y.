/*
    F.R.I.D.A.Y. (Mark 1)
    Author: Fernando Méndez
    Web: https://fermdez.ddns.net/
    Twitter: @HumperCobra
*/
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
//var rec = new SpeechRecognition();
    if (!("webkitSpeechRecognition" in window)) {
        alert("Este navegador no soporta reconocimiento de voz. Por favor, use Chrome. | This browser does not support speech recognition. Please, use Chrome.");
    }
    else {
    	rec = new webkitSpeechRecognition();
    	rec.lang = "es-ES";
    	rec.continuous = true;
        rec.interim = true;
        do{
            rec.addEventListener("result", startVR);
        } while(!"exit");
    }

document.getElementById('speak').addEventListener("click", ()=>{
    say(document.getElementById("out").value);
});


/*FUNCIONES*/
function startVR(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
         document.getElementById('in').innerHTML = event.results[i][0].transcript;
	}
}

function say(txt){
    speechSynthesis.speak(new SpeechSynthesisUtterance(txt))
}

rec.start();