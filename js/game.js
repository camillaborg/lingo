var ordlista = ["mjauu", "malin", "banan"];
var valtOrd = ordlista[Math.floor(Math.random() * 3)];
console.log(valtOrd);
// Slumpar ett ord från arrayen

var button = document.getElementsByTagName("button")[0]; // Vi vill ha tillbaka den första knappen button[plats0]
button.addEventListener("click", function(){
    var användarOrd = document.getElementsByTagName("input")[0].value; //Hämtar värdet från inputfältet och sparar i var
    if(valtOrd === användarOrd){
        alert("GRATTIS!");
    }
    else{
        alert("Försök igen!");
    }

});
