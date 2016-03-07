function init_map(){
    var myOptions = {zoom:14,center:new google.maps.LatLng(41.65714,-0.9161400000000413),mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(41.65714, -0.9161400000000413)});
    infowindow = new google.maps.InfoWindow({content:"<a href='/slotsshop'><b>Slot Shop</b></a><br/>Avda. Navarra 141<br/> Zaragoza" });
    google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);
