var ordlista = ["mjauu", "malin", "banan"];
var valtOrd = ordlista[Math.floor(Math.random() * 3)];
var counts = 3;
var tries = 0;
console.log(valtOrd);
// Slumpar ett ord från arrayen

var button = document.getElementsByTagName("button")[0]; // Vi vill ha tillbaka den första knappen button[plats0]



    button.addEventListener("click", function () {

        if(tries < counts) {
            tries++
        var användarOrd = document.getElementsByTagName("input")[0].value; //Hämtar värdet från inputfältet och sparar i var

        var rutor = document.getElementsByTagName("td");
        for (var i = 0; i < 5; i++) {
            rutor[i].innerHTML = användarOrd[i];

            if (användarOrd[i] === valtOrd[i]) {
                rutor[i].style.background = "green";
            }
            else {
                rutor[i].style.background = "red";
            }
        }


        if (användarOrd === valtOrd) {
            alert("Grattis!")
        }
        else if (tries < counts) {
            alert("Försök igen");
        }
        else if (tries >= counts) {
            alert("Dina försök är slut");
        }

    }
    });

