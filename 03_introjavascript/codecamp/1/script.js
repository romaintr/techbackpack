$( document ).ready(function() {

function getUsername() {

    //affiche une boite de dialogue 
    var  user = prompt("Veuillez rentrez votre nom:", "");

    // la fonction se termine en retournant le nom récupéré par la boite de dialogue
    return user
}


function welcome() {
    var name= getUsername();
    $("#welcome").html('<h4>Bienvenue '+name+', <br> soyez pret à renouveler de nouveaux défis ! </h4>');

};
// Appel la fonction
welcome();


function loadChallenges() {
  $.ajax(
        {url : 'https://api.myjson.com/bins/dkim3',
        type: 'GET',
        dataType: 'json'} 
  )
  .done(function(data) {
    showChallenge(data);
  })
  .fail(function() {
    alert( "error" );
  });
}

function showChallenge(liste) {

  var data="";

  for ( var i=0; i < liste.length; i++) {
    data+="<div class='defi'>";
    var challenge=liste[i];

    data+='<h2>'+challenge.nom+'</h2>';
    data+='<p>'+challenge.description+'</p>';
    data+='<iframe width="364" height="204" src="'+challenge.youtube+'" frameborder="0" allowfullscreen></iframe>'
    data+="</div>";
  }
  $("#defis").html(data);

}
//Charge le JSON des challenges
loadChallenges();

});
