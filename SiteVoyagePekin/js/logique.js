/*
Projet: code Javascript du site du voyage à Pékin
Auteur: Samuel Roland
Date: octobre 2019
*/
prenom.addEventListener("click", prenomclick)
nom.addEventListener("click", prenomclick)
age.addEventListener("click", prenomclick)


document.addEventListener("DOMContentLoaded", init)

function init() {
    //Désactivation des boutons:
    bnDelete.disabled = true
    bnCancel.disabled = true

    //Pour faire des test sur le tableau:
    newrow()
    newrow()
    newrow()
    newrow()
    newrow()
    newrow()
    newrow()
    activeedition()


}

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

function newrow() {
    zonecols = document.getElementsByTagName("tbody")[0]
    row = document.createElement("tr")

    zonecols.appendChild(row)
    for (i = 0; i < tableau.rows[0].cells.length; i++) {
        cell = document.createElement("td")
        cell.id = i + ":" + tableau.rows.length
        row.appendChild(cell)
        cell.innerText = (cell.id)
        cell.style.height = 10

        //si c'est cellule dans la colonne age, on ajoute la classe Age:
        if (i === 3){
            cell.classList.add("age")
        }

        //Ecraser par une checkbox
        if (i == tableau.rows[0].cells.length - 1) {
            cell.innerHTML = ""
            inp = document.createElement("input")
            inp.type = "checkbox"
            cell.appendChild(inp)

        }
    }

}

function checkcontent(event){
    inpsource= event.target
    console.log("texte a changé.")
    //Enlever les espaces au début et à la fin et aussi si il y a un espace seul. sera donc vide.
    inpsource.value = inpsource.value.trim()
    listeclasse = inpsource.parentNode.classList.toString()
    if (listeclasse.indexOf("age")!=-1){
        console.log("contient la classe age")
        if (isNaN(inpsource.value)==false){
            inpsource.classList.add("notaninteger")
        }
    }else {
        //Si c'est vide, on ajoute la classe qui met en jaune emptycell:
        if (inpsource.value==""){
            inpsource.classList.add("emptycell")
        }else{

            inpsource.classList.remove("emptycell")
        }

    }
}

var nbslinetbl
var nbscolstbl

function updateinfostable() {
    nbslinetbl = tableau.rows.length
    nbscolstbl = tableau.rows[0].cells.length
}

console.log(document.getElementsByTagName("input"))

active = false
bnactiveredition.addEventListener("click", activeedition)
intrapathstudent = "https://intranet.cpnv.ch/etudiants/"

function activeedition() {
    bnactiveredition.disabled = true
    bnSave.disabled = false
    bnCancel.disabled = false
    tds = tableau.getElementsByTagName("td")
    tableau.classList.remove("table", "table-hover", "table-bordered", "table-striped")
    bnDelete.disabled = false

    for (nbline = 0; nbline < cortable.children.length; nbline++) {
        row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
        for (nbcol = 0; nbcol < row.children.length; nbcol++) {
            cell = row.children[nbcol]
            //si la colonne est autre Prénom, que Nom ou Age. On ne doit pas pouvoir modifier Acronyme intranet et sélection.
            if (nbcol < tableau.rows[0].cells.length - 3) {
                inp = document.createElement("input")
                inp.type = "text"
                inp.value = cell.innerText
                cell.innerText = ""
                cell.appendChild(inp)

                //Evenement change pour vérifier le contenu des input:
                inp.addEventListener("change", checkcontent)

                //Bordure verte pour dire que c'est modifiable.
                cell.classList.add("changepossible")
            }
        }
    }
}

bnSave.addEventListener("click", save)

function save() {

    bnactiveredition.disabled = false
    bnSave.disabled = true
    bnDelete.disabled = true
    bnCancel.disabled = true
    tableau.classList.add("table", "table-hover", "table-bordered", "table-striped")
    //enlever la bordure verte car on ne modifie plus.
    cell.classList.remove("changepossible")

    for (nbline = 0; nbline < cortable.children.length; nbline++) {
        row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
        for (nbcol = 0; nbcol < row.children.length; nbcol++) {

            if (nbcol < tableau.rows[0].cells.length - 3) {   //seulement si ne fait pas partie des 3 dernières colonnes.
                cell = row.children[nbcol]//cell devient la cellule en cours.
                cell.innerHTML = cell.firstChild.value  //on remplace son contenu par la value de son enfant input
            }

        }
    }
}

chkPrenom.addEventListener("click", chkclick)
chkNom.addEventListener("click", chkclick)
chkAge.addEventListener("click", chkclick)
chkAcro.addEventListener("click", chkclick)
chkIntra.addEventListener("click", chkclick)
chkSelect.addEventListener("click", chkclick)

function chkclick(event) {
    obj = event.target
    colref = obj.name.substr(obj.name.indexOf("chk") + 3).toLowerCase()

    if (obj.checked === false) {
        document.getElementById(colref).hidden = true
    } else {
        document.getElementById(colref).hidden = false
    }

}

bnEmail.addEventListener("click", sendemail)

function sendemail() {
    adresses = tableau.rows[1].cells[0].value + "." + tableau.rows[1].cells[1].value + "@cpnv.ch"
    //si des cases sont cochées dans le tableau
    window.location.href = "mailto:" + adresses + "?subject=Voyage du CPNV à Pékin"
}

bnDelete.addEventListener("click", deleteline)

function deleteline() {
    for (nbline = 0; nbline < cortable.children.length; nbline++) {
        row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
        for (nbcol = 0; nbcol < row.children.length; nbcol++) {
            cell = row.children[nbcol]
            console.log(cell.id)
            inp = cell.firstChild
            if (inp.type == "checkbox") {
                if (inp.checked == true) {
                    //Supprimer la ligne en prenant le arrière grand parent.
                    td = inp.parentNode
                    tr = td.parentNode
                    tbody = tr.parentNode
                    tbody.removeChild(tr)
                }
            }

        }
    }
}