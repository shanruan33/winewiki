// fill form options ---- start
// year form
var year = document.getElementById("year");
var start = 1800;
var end = 2019;

for (var i = end; i > start - 1; i--) {
    var option = document.createElement("option");
    var text = i;
    var optionText = document.createTextNode(text);
    option.appendChild(optionText);
    year.appendChild(option);
};

//country list
var country = document.getElementById("country");
// var name = countryAndRegion.list[0].countryName; // test for getting data from json file
// console.log(countryAndRegion.list.length);
for (var i = 0; i < countryAndRegion.list.length; i++) {
    var option = document.createElement("option");
    var text = countryAndRegion.list[i].countryName;
    var optionText = document.createTextNode(text);
    option.appendChild(optionText);
    option.setAttribute("value", text);
    country.appendChild(option);

};


//region list
// var regionName = countryAndRegion.list[0].regions[0].name; // test for getting data from json file
// console.log(regionName);

var region = document.getElementById("region");
var countries = document.getElementById("country");
countries.addEventListener("input", chooseRegionList, false);
function chooseRegionList(e) {
    var value = event.target.value;
    console.log(value);
    for (var i = 0; i < countryAndRegion.list.length; i++) {
        if (value == countryAndRegion.list[i].countryName) {
            console.log("match" + countryAndRegion.list[i].countryName);
            for (var j = 0; j < countryAndRegion.list[i].regions.length; j++) {
                var option = document.createElement("option");
                var text = countryAndRegion.list[i].regions[j].name;
                var optionText = document.createTextNode(text);
                option.appendChild(optionText);
                option.setAttribute("value", text);
                region.appendChild(option);
            };
        };
    };
};

//grape list

var grapes = ["Cabernet Franc", "Cabernet Sauvignon", "Carménère", "Chardonnay", "Gewürztraminer", "Grenache", "Malbec", "Merlot", "Muscat Ottonel", "Nebbiolo", "Pinotage", "Pinot Grigio / Gris", "Pinot Noir", "Riesling", "Sangiovese", "Sémillon", "Shiraz / Syrah", "Tempranillo", "Viognier", "Zinfandel"];

var grape = document.getElementById("grape");
for (var i = 0; i < grapes.length; i++) {
    var option = document.createElement("option");
    var text = grapes[i];
    var optionText = document.createTextNode(text);
    option.appendChild(optionText);
    option.setAttribute("value", text);
    grape.appendChild(option);

};

// fill form options ---- end


// display search result from database ---- start
var searchbtn = document.getElementById("searchbtn");
var result = document.getElementById("searchResult");
searchbtn.addEventListener("click", showResult, false);

function showResult(e) {
    result.innerHTML = '';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (e) {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            //console.log(xhr.responseText);
            var responseJSON = JSON.parse(xhr.responseText);
            //console.log(responseJSON);
            //console.log(responseJSON[0]);

            // add result to the screen
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

            };

        };
    }

    var yearChosen = document.forms[0]["year"];
    var countryChosen = document.forms[0]["country"];
    var regionChosen = document.forms[0]["region"];
    var grapeChosen = document.forms[0]["grape"];
    var classificationChosen = document.forms[0]["classification"];

    console.log(yearChosen.value, countryChosen.value, regionChosen.value, grapeChosen.value, classificationChosen.value);
    xhr.open("GET", "searchResult.php?year=" + yearChosen.value + "&country=" + countryChosen.value + "&region=" + regionChosen.value + "&grape=" + grapeChosen.value + "&classification=" + classificationChosen.value, true);
    xhr.send();


};

// display search result from database ---- end


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
