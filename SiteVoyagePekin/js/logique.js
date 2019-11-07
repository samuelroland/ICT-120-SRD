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
        cell.innerText = (cell.id)
        cell.style.height = 10

        //Ecraser par une checkbox
        if (cell.tHead.innerText=="Sélection"){
            cell.innerText = "salut"
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

submit.addEventListener("click", gerercolonnes)

function gerercolonnes() {
    submit.style.backgroundColor = red
    tableau.rows[0].cells.delete();
}

active = false
bnactiveredition.addEventListener("click", activeedition)
intrapathstudent = "https://intranet.cpnv.ch/etudiants/"

function activeedition() {
    bnactiveredition.disabled = true
    bnSave.disabled = false
    tds = tableau.getElementsByTagName("td")
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


}

bnSave.addEventListener("click", save)

function save() {
    bnactiveredition.disabled = false
    bnSave.disabled = true
    tableau.classList.add("table", "table-hover", "table-bordered", "table-striped")

    for (nbline = 0; nbline < cortable.children.length; nbline++) {
        row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
        for (nbcol = 0; nbcol < row.children.length; nbcol++) {
            cell = row.children[nbcol]
            cell.innerHTML = cell.firstChild.value
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