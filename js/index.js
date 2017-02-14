/*
See http://www.greensock.com/splittext/ for details.
This demo uses SplitText which is a membership benefit of Club GreenSock, http://www.greensock.com/club/
*/
var mySplitText = new SplitText("#quote", {type:"chars,words, lines"}),
    tl = new TimelineLite();


TweenLite.set("#quote", {css:{perspective:500, perspectiveOrigin:"50% 50%", transformStyle:"preserve-3d"}});

var numChars = mySplitText.chars.length;

for(var i = 0; i < numChars; i++){
  tl.from(mySplitText.chars[i], 0.8, {css:{y:getRandomInt(-75, 75), x:getRandomInt(-150, 150), rotation:getRandomInt(0, 720), autoAlpha:0}, ease:Back.easeOut}, i * 0.02, "dropIn");
}

tl.staggerTo(mySplitText.chars, 2, {css:{transformOrigin:"20% 20% -40px", rotationY:-180, rotationX:180, rotation:180}, ease:Elastic.easeInOut}, 0.02, "+=1");


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
