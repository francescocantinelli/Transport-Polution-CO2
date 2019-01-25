var arr_dati = [];

var arr_co2 = [];

var inqobject = []

var tasso = []




function init_array_data() {
	$.getJSON( "https://api.myjson.com/bins/b05b0", function( data ) {
		//console.log(data);
		var i = 0;
		for (i=0;i<data.length;i++) {
			//console.log("Data "+i+": "+data[i]["Regione"]);
			arr_dati.push(data[i]);
			arr_co2.push(data[i]["Tonnellate per abitante di CO2 emessa"]);
		}
	});
}

function run_search() {
	$("#result_div").html('<div id="first_result"></div>');
	var stringa_ricerca = $("#inp_regione").val().toLowerCase();
	//console.log("len="+stringa_ricerca.length);
	if (stringa_ricerca.length < 3) {
		return false;
	} else {
		//console.log("Cerco: "+stringa_ricerca);
		var i = 0;
		for (i=0;i<arr_dati.length;i++) {
			regione = arr_dati[i]["Regione"];
			
			if (regione.toLowerCase().indexOf(stringa_ricerca) != -1) {
				//console.log("Trovato ["+stringa_ricerca+"] in "+i);
				$("#first_result").append('<div class="regione-card"><p>Anno: <strong>'+arr_dati[i]["Anno"]+'</strong></p><p>Regione: <strong>'+arr_dati[i]["Regione"]+'</strong></p><p>Tonnellate per abitante di CO2 emessa: <strong>'+arr_dati[i]["Tonnellate per abitante di CO2 emessa"]+'</strong></p></div>');
				$("#scrollbox").css('display','flex');
				$("#aboutsection").css('display','flex');
				$("#mapid").removeClass("mapidhide").addClass("mapidsee");
				$("#myfooter").css('display','flex');
			}
		}
	}
}



//carico la mappa
function load_map (){
	var map = L.map('mapid').setView([41.9055688, 12.4659426], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(map);
	var countriesLayer = L.geoJson(countries).addTo(map);
	L.geoJson(countries, {style: style}).addTo(map);
};


function getCountryColor(inquinamento){
	if(inquinamento < 2){
		return 'red';
	}else if(inquinamento < 1,9){
		return 'blue';
	}else if(inquinamento < 1,4){
		return 'white';
	}else {
		return 'yellowe';
	}
};

function style(features) {
    return {
        fillColor: getCountryColor(features.properties.inquinamento),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '4',
        fillOpacity: 0.7
    }
};

$( document ).ready(function() {
	//console.log("Inizializzo l'array esterno tramite ajax...");
	init_array_data();
	//console.log("Verifico l'array remoto se e' stato correttamente valorizzato localmente...");
	//console.log(arr_dati);
	load_map();
	
	$("#but").on( "click", function() {
		run_search();
	});
	
	 $('#inp_regione').on('keypress', function (e) {
         if(e.which === 13){
			e.preventDefault();
			run_search();

         }
   });
	
});














