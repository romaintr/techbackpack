
$( document ).ready(function() {

alert("1");

function loadVillages() {
alert("2")

    $.ajax({
        url : 'http://spin-ext.alwaysdata.net/clubmed/formation_js/data/village.json',
        type: 'GET',
        success : showVillages
    })
}

function showVillages(data) {
    alert("3");
    console.log(data);
}


//Charge le JSON des villages
loadVillages();

alert("4");

});

