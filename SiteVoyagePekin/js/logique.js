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
flhaut = "&uarr;"
flbas = "&darr;"

function prenomclick(event) {

    obj = event.target //prendre l'objet qui a déclenché l'évenement.
    //obj.innerHTML = obj.innerHTML.substring(0, obj.innerHTML.indexOf(" ") + 1)
    //Ajouter flèche hautbas, haut, bas.

    if (obj.innerHTML.includes(flbas)) {
        obj.innerHTML = obj.innerHTML.substring(0, obj.innerHTML.indexOf(" ") + 1)
        obj.innerHTML += flhautbas

    }
    if (obj.innerHTML.includes(flhaut)) {
        obj.innerHTML = obj.innerHTML.substring(0, obj.innerHTML.indexOf(" ") + 1)
        obj.innerHTML += flbas
    }
    if (obj.innerHTML.includes(flhautbas)) {
        obj.innerHTML = obj.innerHTML.substring(0, obj.innerHTML.indexOf(" ") + 1)
        obj.innerHTML += flhaut
    }

}

bnnewrow.addEventListener("click", newrow)

function newrow(){
    zonecols= document.getElementsByTagName("tbody")[0]
    row= document.createElement("tr")


    zonecols.appendChild(row)
    for (i=0;i<tableau.rows[0].cells.length;i++){
        cell = document.createElement("td")
        txt = document.createElement("input")
        txt.type = "textbox"
        cell.appendChild(txt)
        row.appendChild(cell)
        txt.value = ("cell:" + i + " line:"+ tableau.rows.length)
        cell.style.height = 10
    }

}
var nbslinetbl
var nbscolstbl
function updateinfostable(){
    nbslinetbl= tableau.rows.length
    nbscolstbl = tableau.rows[0].cells.length
}

console.log(document.getElementsByTagName("input"))

function activateedition(){
    //mettre tout les champs input txtbox des colonnes prénom, nom et age en disabled=false
    for (i=0;i<nbscolstbl;i++){
        for (j=0;j<nbslinetbl;j++){

        }
        for (var cool in tableau.rows[i].cells) {
            cool.disabled = true
            console.log(cool.value)
        }
    }
}