var map = L.map('map', {
    minZoom: 2,
    maxZoom: 9
}).setView([42.1, 14.1], 6);


// var zoomLevel = map.getZoom();
// console.log(zoomLevel);

var tile = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: 2,
    maxZoom: 9,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9'
}).addTo(map);


// create blank global map from geoJSON with path & style ---- start
// var globalGeoJSONPath = 'globalMediumgeo.json';
// var globalStyle = {
//     stroke: true,
//     weight:1,
//     color:'#C3D2D9',
//     fill: true,
//     fillColor: '#fff',
//     fillOpacity: 1
// };
// var glmap = $.getJSON(globalGeoJSONPath,function(data){   
//     L.geoJson(data, {
//         clickable: false,
//         style: globalStyle
//     }).addTo(map);
// });
// create global map from geoJSON with path & style ---- end

// create Italy regions map ---- start 
// var italyRegionGeoJSONPath = 'italyRegion.geo.json';
// var italyStyle = {
//     stroke: true,
//     weight:1,
//     color:'#C3D2D9',
//     fill: true,
//     fillColor: '#FFFFD9',
//     fillOpacity: 1
// };
// var italy = $.getJSON(italyRegionGeoJSONPath,function(data){
//     //var map = L.map('map').setView([43.9, 11.1], 2);
//     L.geoJson(data, {
//         clickable: true,
//         style: italyStyle
//     }).addTo(map);
// });

// italyStyle.fillOpacity = 0.5;
// create Italy regions map ---- end


// data layer ---- start
// control that shows info on hover
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<b>Italy Wine Production 2018</b><br><b>Region: </b>' + (props ?
        '<b>' + props.reg_name + '</b><br />' + props.reg_production + ' Hectolitres'
        : 'Hover over a region');
   
};

info.addTo(map);


//get color depending on production value
function getColor(p) {
    return p > 8000000 ? '#800026' :
        p > 4000000 ? '#BD0026' :
            p > 2000000 ? '#E31A1C' :
                p > 1000000 ? '#FC4E2A' :
                    p > 500000 ? '#FD8D3C' :
                        p > 0 ? '#FEB24C' :

                            '#FFEDA0'
        ;
}

function style(feature) {
    return {
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5,
        //
        fillColor: getColor(feature.properties.reg_production)
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: '#64ACCC',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

// function zoomToFeature(e) {
//     map.fitBounds(e.target.getBounds());
// }  can use on country level

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        //click: zoomToFeature
    });
}

geojson = L.geoJson(italyRegion, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
// data layer ---- end


//show region featured wine ---- start
var featuredWine = document.getElementById("featured-wine");
showFeaturedWine();

function showFeaturedWine() {
    featuredWine.innerHTML = "Featured wine in this country/region:";

    var result = document.createElement("div");
    result.setAttribute("class", "result");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (e) {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            //console.log(xhr.responseText);
            var responseJSON = JSON.parse(xhr.responseText);
            console.log(responseJSON);
            if (responseJSON.length == 0) {
                result.innerHTML = "You haven't liked any wine. Start exploration on our wine map!";
            } else {
                for (var i = 0; i < responseJSON.length; i++) {
                    var divFront = document.createElement("div");
                    var img = document.createElement("img");
                    var label = document.createElement("label");
                    var likeP = document.createElement("p");
                    var divBack = document.createElement("div");
                    var divCard = document.createElement("div");
                    var divContainer = document.createElement("div");
                    var pCard = document.createElement("p");
                    var numLike = document.createElement("p");

                    var imgFile = responseJSON[i].image;
                    var name = responseJSON[i].name;
                    var year = responseJSON[i].year;
                    var region = responseJSON[i].region;
                    var country = responseJSON[i].country;
                    var grape = responseJSON[i].grape;
                    var description = responseJSON[i].description;
                    var num = responseJSON[i].likes;

                    var imgPath = "uploads/" + imgFile;
                    var labelText = document.createTextNode(name + " " + year + " " + region + " " + country);
                    pCard.innerHTML = "info on the back";
                    likeP.innerHTML = "Like";

                    numLike.innerHTML = num + " likes";


                    label.appendChild(labelText);
                    img.setAttribute("src", imgPath);
                    img.setAttribute("id", "bottleImg");
                    divBack.setAttribute("class", "back");
                    divCard.setAttribute("class", "card");
                    divCard.setAttribute("onclick", "flip(event)");
                    divContainer.setAttribute("class", "container");

                    likeP.setAttribute("id", "likeIcon");
                    likeP.setAttribute("onclick", "like(event)");
                    numLike.setAttribute("id", "numLike");

                    divBack.appendChild(pCard);

                    divFront.appendChild(img);
                    divFront.appendChild(label);
                    divFront.setAttribute("class", "bottle");

                    divCard.appendChild(divFront);
                    divCard.appendChild(divBack);
                    divContainer.appendChild(divCard);
                    divContainer.appendChild(likeP);
                    divContainer.appendChild(numLike);

                    result.appendChild(divContainer);
                    console.log(result);
                };
            };
        };
    };
    featuredWine.appendChild(result);
    xhr.open("GET", "showFeaturedWine.php?country=Italy", true); // not connected to map for value input yet
    xhr.send();

};

// click like/liked
function like(event) {
    console.log("clicked");
    var likeP = event.currentTarget;
    var text = likeP.textContent;
    //console.log(text);
    if (text == "Like") {
        likeP.innerHTML = "Liked";
        likeP.style.backgroundColor = "plum";
    } else if (text == "Liked") {
        likeP.innerHTML = "Like";
        likeP.style.backgroundColor = "powderblue";
    };

};

// flip bottle card
function flip(event) {
    var element = event.currentTarget;
    if (element.className === "card") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        }
        else {
            element.style.transform = "rotateY(180deg)";
        }
    }
};

//show region featured wine ---- end
