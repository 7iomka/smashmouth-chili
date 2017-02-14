


var svgMorph = function() {
    TweenLite.to("#circle", 2, {
        morphSVG:"#star",
        scale:1,
        fill: 'red',
        stroke: 'tomato',
        transformOrigin:"center center",
        ease:Power4.easeInOut
    });

    TweenLite.to("#circle",3, {
        morphSVG:"#star1",
        scale:1,
        stroke: 'red',
        fill: 'tomato',
        ease:Power4.easeInOut,
        delay: 1,
        onComplete: svgMorph,
        onCompleteParams: []

    });
}
svgMorph();
