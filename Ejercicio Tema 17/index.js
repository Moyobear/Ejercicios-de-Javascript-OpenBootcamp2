let marker, marker2, marker3, map;
function initMap() {
  const posicion = {
    lat: 43.10012,
    lng: -79.06627,
  };

  const posicion2 = {
    lat: 20.8717,
    lng: -156.461,
  };

  const posicion3 = {
    lat: -17.92353,
    lng: 25.84299,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion2,
  });

  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Primer lugar favorito",
  });

  marker2 = new google.maps.Marker({
    position: posicion2,
    map,
    title: "Segundo lugar favorito",
  });

  marker3 = new google.maps.Marker({
    position: posicion3,
    map,
    title: "Tercer lugar favorito",
  });
}
