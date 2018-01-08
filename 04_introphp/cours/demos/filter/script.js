
$( document ).ready(function() {

var listeVillages;

function loadVillages() {

    $.ajax({
        url : 'http://spin-ext.alwaysdata.net/clubmed/formation_js/data/village.json',
        type: 'GET',
        success : saveVillages,
        dataType: 'json',
    })
}

function saveVillages(data){
  listeVillages=data;
  showVillages(listeVillages);
}

function showVillages(liste) {

  var dataHtml="";

  for ( var i=0; i < liste.length; i++) {
    var village=liste[i];
    dataHtml+='<li>'+village.nom+'</li>';
  }
  $("#listeVillages").html(dataHtml);

}

function filtreVillages(liste,lieu) {
  var newListe=[];
  for ( var i=0; i < listeVillages.length; i++) {
    var village=listeVillages[i];
    if (village.lieu===lieu){
      newListe.push(village);
    }
  }
  return newListe;
}

//Charge le JSON des villages
loadVillages();

$('#mer').click(function(){
  var villageMer=filtreVillages(listeVillages,"mer");
    console.log(villageMer);
    showVillages(villageMer);
});


$('#montagne').click(function(){
  var villageMer=filtreVillages(listeVillages,"montagne");
    console.log(villageMer);
    showVillages(villageMer);
});

});

