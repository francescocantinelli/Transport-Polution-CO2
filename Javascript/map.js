function load_map() { 


    map = L.map('mapid').setView([41.9055688, 12.4659426], 13);

    $('.leaflet-top').removeClass('leaflet-top').addClass('leaflet-bottom');
    $('.leaflet-left').removeClass('leaflet-left').addClass('leaflet-right');

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(map);
}