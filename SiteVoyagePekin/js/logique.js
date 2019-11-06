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

function newrow() {
    zonecols = document.getElementsByTagName("tbody")[0]
    row = document.createElement("tr")


    zonecols.appendChild(row)
    for (i = 0; i < tableau.rows[0].cells.length; i++) {
        cell = document.createElement("td")
        cell.id = i + ":" + tableau.rows.length
        row.appendChild(cell)
        cell.innerText = (cell.id + "")
        cell.style.height = 10
    }

}

var nbslinetbl
var nbscolstbl

function updateinfostable() {
    nbslinetbl = tableau.rows.length
    nbscolstbl = tableau.rows[0].cells.length
}

console.log(document.getElementsByTagName("input"))

function activateedition() {
    //mettre tout les champs input txtbox des colonnes prénom, nom et age en disabled=false
    for (i = 0; i < nbscolstbl; i++) {
        for (j = 0; j < nbslinetbl; j++) {

        }
        for (var cool in tableau.rows[i].cells) {
            cool.disabled = true
            console.log(cool.value)
        }
    }
}


submit.addEventListener("click", gerercolonnes)

function gerercolonnes() {
    submit.style.backgroundColor = red
    tableau.rows[0].cells.delete();
}

active = false
bnactiveredition.addEventListener("click", activeedition)


function activeedition() {
    tds = tableau.getElementsByTagName("td")
    if (active == false) {

        tableau.classList.remove("table", "table-hover", "table-bordered", "table-striped")

        for (nbline = 0; nbline < cortable.children.length; nbline++) {
            row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
            for (nbcol = 0; nbcol < row.children.length; nbcol++) {
                cell = row.children[nbcol]
                inp = document.createElement("input")
                inp.type = "text"
                inp.value = cell.innerText
                cell.innerText = ""
                cell.appendChild(inp)
            }
        }

        active = true
    } else {
        tableau.classList.add("table", "table-hover", "table-bordered", "table-striped")

        for (nbline = 0; nbline < cortable.children.length; nbline++) {
            row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
            for (nbcol = 0; nbcol < row.children.length; nbcol++) {
                cell = row.children[nbcol]
                cell.innerHTML = cell.firstChild.value
            }
        }
        active = false
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
