var noms = new Array();
    noms[0]="Bonnenfant";
    noms[1]="Uhlrich";
    noms[2]="Geereart";
    noms[3]="Compas";

var salaires = new Array();
    salaires[0]="1500";
    salaires[1]="1450";
    salaires[2]="1600";
    salaires[3]="1700";

var affichageNoms = "";
var affichageSalaires = "0";


window.document.tableau.resultat.value = noms[1];

function Ajouter(){

    affichageNoms = window.document.formulaire.noms.value;
    noms.push(affichageNoms);
    affichageSalaires = window.document.formulaire.salaires.value;
    salaires.push(affichageSalaires);
    alert(salaires[4]);
    window.document.tableau.resultat.value = "Nom : " + noms[4] + ", salaire : " + salaires[4] + " euros";
    
}




