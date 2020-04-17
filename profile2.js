// get user liked wineIds from profile.php
var inputs = document.getElementsByTagName("form")[0];
//console.log(inputs);
var wineIds = ["1"];
for (var i = 0; i < inputs.length; i++) {
    var id = inputs[i].name;
    wineIds.push(id);
};
console.log(wineIds);

//create wine list in the pre-defined container
var showWine = document.getElementById("show-wine");
//var result = document.getElementById("show-wine");
showLikedWine();

function showLikedWine() {
    if (wineIds.legnth == 0) {
        showWine.innerHTML = "You haven't liked any wine. Start exploration on our wine map!";
    } else {
        showWine.innerHTML = "Here is the wine you liked:";
        //show wine list
        // add a child of show-wine then add result in it!!!
        var result = document.createElement("div");
        result.setAttribute("id", "result");
        for (var i = 0; i < wineIds.length; i++) {
            var wineId = wineIds[i];
            console.log(wineId);

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (e) {
                console.log(xhr.readyState);
                if (xhr.readyState === 4) {
                    //console.log(xhr.responseText);// modify or populate html elements based on response.
                    var responseJSON = JSON.parse(xhr.responseText);
                    console.log(responseJSON);

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
                        likeP.innerHTML = "Like"; //need to change
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
                }
            };
            
            xhr.open("GET", "showLikedWine.php?wineId=" + wineId + "", true);
            xhr.send();
        };
        showWine.appendChild(result);
    };
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




