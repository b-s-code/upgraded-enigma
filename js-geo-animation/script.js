const greenDotStyle = document.getElementById("greenDot").style;
const redDotStyle = document.getElementById("redDot").style;
const blueDotStyle = document.getElementById("blueDot").style;

var angle = 0; // radians
var redoffset = Math.PI / 2;
var blueoffset = 3 * Math.PI / 2;
var hOffsetShared = 4;
var vOffsetShared = 3;

id = setInterval(UpdatePositions, 3 /* ms */); // https://www.w3schools.com/js/js_htmldom_animate.asp
function UpdatePositions()
{
    // left means x
    // bottom means y
    greenDotStyle.left = Math.cos(angle) + hOffsetShared + "cm";
    greenDotStyle.bottom = Math.sin(angle) + vOffsetShared + "cm";
    redDotStyle.left = Math.cos(angle + redoffset) + hOffsetShared + "cm";
    redDotStyle.bottom = Math.cos(angle + redoffset) + vOffsetShared + "cm";
    blueDotStyle.left = Math.sin(angle + blueoffset) + hOffsetShared + "cm";
    blueDotStyle.bottom = Math.sin(angle + blueoffset) + vOffsetShared + "cm";
    angle += 0.008; // works nice enough
}