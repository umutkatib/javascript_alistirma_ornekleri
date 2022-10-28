

function writeTicket(speed){
    var tooSlow   = ' - Minimum hız sınırı 15 km/h dir!',
    justRight = ' - Örnek bir insansınız.',
    tooFast   = ' - Hızlı gidiyorsun. Bir ceza alacaksın!';
    noIdea    = ' - Demek ne kadar hızlı gittiğinin farkında bile değilsin! O zaman sana ceza yazacağım. Belki bu farkındalığını arttırır.';
    invalidValue = ' - Hız değeri eksi girilemez...!'

       var comments = speed < 0 ? invalidValue :
                      speed == "" ? noIdea : 
                      speed >= 0 && speed < 15 ? tooSlow :
                      speed >= 15 && speed < 40 ? justRight :
                      tooFast ;

    var response = speed = "" ? noIdea : speed + "km/h " + comments;

    return response;
};

document.getElementById("submit").onclick = function() {    
    var hizDegeri = document.querySelector("#speed").value;
    console.log(writeTicket(hizDegeri))
    document.querySelector("#durum").innerHTML = writeTicket(hizDegeri)
};
