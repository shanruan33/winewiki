
//ZIM for turning earth ---- start
// SCALING OPTIONS
// scaling can have values as follows with full being the default
// "fit"		sets canvas and stage to dimensions and scales to fit inside window size
// "outside"	sets canvas and stage to dimensions and scales to fit outside window size
// "full"		sets stage to window size with no scaling
// "tagID"		add canvas to HTML tag of ID - set to dimensions if provided - no scaling

var scaling = "holder"; // use the ID of a tag to place the canvas in the tag
var assets = ["earth2.png", "earthsprite.png"];
var path = "image/";
var frame = new Frame(scaling, null, null, null, null, assets, path); // see docs for more options and info
frame.on("ready", function () {
    zog("ready from ZIM Frame");

    var stage = frame.stage;
    var stageW = frame.width;
    var stageH = frame.height;
    frame.color = white; // ZIM colors now available globally

    // put your code here (you can delete this code)
    zog("hi",stageW, stageH);
    //asset("earth2.png").centerReg().scaleTo(stage,100);
    var earth = new Sprite({
        image: asset("earthsprite.png"),
        cols: 10,
        rows: 10,
        count: 95,
    })
        .centerReg()
        .scaleTo(stage, 100)
        .run({ time: 8500, loop: true });

    earth.on("mouseover", function (e) {
        earth.pauseRun();
    });

    earth.on("mouseout", function (e) {
        earth.pauseRun(false);
    });
    frame.on("resize", function () {
        earth.centerReg()
            .scaleTo(stage, 100);
        zog("yay!");
    });

    stage.update();
}); // end of ready
//ZIM for turning earth ---- start

