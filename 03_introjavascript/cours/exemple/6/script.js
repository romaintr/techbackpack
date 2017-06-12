
$( document ).ready(function() {


function loadChallenges() {
  $.ajax(
        {url : 'https://s3.eu-central-1.amazonaws.com/spintransfer/challenge.json',
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
    var challenge=liste[i];
    data+='<li>'+challenge.nom+'</li>';
  }
  $("#listeChallenge").html(data);

}
//Charge le JSON des villages
loadChallenges();


});

