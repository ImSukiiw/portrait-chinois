// chargement du DOM

document.addEventListener("DOMContentLoaded", function () {

    let liste = document.querySelector("#liste-analogies");
    // lier le fichier data.js
    for (var i = 0; i < data.length; i++) {
        liste.innerHTML +=
            '<section style="flex-direction:' + data[i].align + '"><img class="image" src="' +data[i].img + '"></div></div><div class="centerCarre"><div class="bordureCarre"></div><div class="carre"><div class="legendAnalogies"><h2 class=\"sijetais\">Si j’étais <span class="titre-ana">' + data[i].analogie + "</span>, </h2><h2 class='jeserais'>je serais <span class='valeur-ana'>" + data[i].valeuranalogie + "</span></h2></div><p class=\"text-ana\">" + data[i].text + "</p></div></div></div></section>";
    }


        document.querySelector("#send").addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector('#nouvelleanalogie').innerHTML +=

            '<section style="flex-direction:row"><img class="image" src="' +
            document.querySelector("#img").value +
            '"></div></div><div class="centerCarre"><div class="bordureCarre"></div><div class="carre"><div class="legendAnalogies"><h2>Si j’étais ' +
            document.querySelector("#analogie").value +
            ", </h2><h2 class='centerTexte'>je serais " +
            document.querySelector("#valeuranalogie").value +
            "</h2></div><p>" +
            document.querySelector("#text").value +
            "</p></div></div></div></section>";

        fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=maxime.scholtes&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeuranalogie").value + "Parce que " + document.querySelector("#text").value).then(function (response) {
            response.json().then(function (data) {
                if (data.status == "success") {
                    document.querySelector("#confirmation").innerHTML = "Bien reçu";
                } else {
                    document.querySelector("#confirmation").innerHTML = "Erreur";
                }
            })
        })
    });


    //pop up
    var overlay = document.getElementById("overlay");

    document.querySelector("#show-modal").addEventListener("click", () => {
        overlay.style.display = "block";
    });

    document.querySelector("#close-modal").addEventListener("click", () => {
        overlay.style.display = "none";
    });


})