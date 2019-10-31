/*
Projet: code Javascript du site du voyage à Pékin
Auteur: Samuel Roland
Date: octobre 2019
*/
prenom.addEventListener("click", prenomclick)
nom.addEventListener("click", prenomclick)
age.addEventListener("click", prenomclick)

function prenomclick(objecttxt){

     test= objecttxt.target //prendre l'objet qui a déclenché l'évenement.
    test.innerHTML = "outch"
}