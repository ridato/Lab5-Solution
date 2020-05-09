
var fruits = ['Mangue','Raisin','Figue','Kiwi']
window.onload = function() {
    document.getElementById("listFruits").innerHTML = fruits;        
}

function Commander() {
    var fCommander = document.getElementById("fruitSouaiter").value;
    var commande = false;
    for (i = 0 ; i < fruits.length; i++ ){
    
        if (fCommander.toLowerCase() == fruits[i].toLowerCase()){
            fruits.splice(i, 1);
            commande=true;
        }
    }

    if (commande==true){
        alert("Ok!");

    }else {
        alert("Indisponible");
    }

    document.getElementById("listFruits").innerHTML=fruits;
    

}
