/*
Projet: code Javascript du site du voyage à Pékin
Auteur: Samuel Roland
Date: octobre 2019
*/
prenom.addEventListener("click", prenomclick)
nom.addEventListener("click", prenomclick)
age.addEventListener("click", prenomclick)

//constantes valeurs chars spéciaux:
flhautbas = "&varr;"
flhaut = "&darr;"
flbas = ""

function prenomclick(objecttxt) {

    test = objecttxt.target //prendre l'objet qui a déclenché l'évenement.
    test.innerHTML = test.innerHTML.substring(0, test.innerHTML.indexOf(" ") + 1)
    //Ajouter flèche hautbas, haut, bas.
    if (test.innerHTML.indexOf(flhautbas)) {
        test.innerHTML += flhaut
    }
    if (test.innerHTML.indexOf(flhaut)) {
        test.innerHTML += flbas
    }
    if (test.innerHTML.indexOf(flbas)) {
        test.innerHTML += flhautbas
    }
}

