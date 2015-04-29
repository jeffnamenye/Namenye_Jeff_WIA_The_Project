
//test for modernizr
Modernizr.load({
   test: Modernizr.canvas,
    yep: "js/success.js",
    nope: "js/fail.js",
    complete: function(){}
    });




var theCanvas = document.getElementById('JN');
if (theCanvas && theCanvas.getContext) {
    var ctx = theCanvas.getContext("2d");
    if (ctx) {

        var theString = "JN Design";


        ctx.fillText(theString, 0,0);


        ctx.font="10pt Georgia";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "rgba(5, 155, 30, .5)";
        ctx.fillText(theString,  10, 10);
        ctx.strokeText(theString, 10, 10);


    }
}
var theCanvas = document.getElementById('kate');
if (theCanvas && theCanvas.getContext) {
    var ctx = theCanvas.getContext("2d");
    if (ctx) {

        var theString = "Find us on facebook or email me at Digitalmeow7@yahoo.com"


        ctx.fillText(theString, 0,0);


        ctx.font="20pt Georgia";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "rgba(5, 155, 30, .5)";
        ctx.fillText(theString,  30, 20);
        ctx.strokeText(theString, 30, 20);


    }
}
//slider on home page
var currentIndex = 0,
    items = $('.container div'),
    itemAmt = items.length;

function cycleItems() {
    var item = $('.container div').eq(currentIndex);
    items.hide();
    item.css('display','inline-block');

}

var autoSlide = setInterval(function() {
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
        currentIndex = 0;

    }
    $('.container div').fadeIn(2000);

    cycleItems();
},4000);


//video section
var video;

window.onload=function(){

    video= document.getElementById("video");

}

function pauseToggle(){

     if(video.paused){
         video.play();

     }else{

         video.pause();

     }

}

var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var highestYlabel = 0;
var valueMultiplier = 0;

$(document).ready(function(){

    window.chartHeight = Number($('.chart-area').height());
    window.barWidth = $('.chart-area .chart-bar').width();
    window.highestYlabel = Number($('.chart-y-axis p').first().html());
    window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
    window.chartScale = chartHeightArea / window.highestYlabel;
    window.barSpacing = Number($('.chart-area').attr('bar-spacing'));
    positionBars();

});

function positionBars(){
    $('.chart-area .chart-bar').each(function(index){

        var barPosition = (window.barWidth*index)+(index*barSpacing)+barSpacing;
        $(this).css('left',barPosition+'px');
        $(this).html('<p>'+$(this).attr('bar-value')+'</p>');
        $('.chart-x-axis').append('<p style="left:'+(barPosition-(window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');

        var barValue = Number($(this).attr('bar-value'));
        if(barValue > window.maxValue){
            window.maxValue = barValue;
            window.valueMultiplier = window.maxValue / window.highestYlabel;
        }

    });
    animateChart();
}

function animateChart(){

    $('.chart-area .chart-bar').each(function(index){
        var revisedValue = Number($(this).attr('bar-value'))*window.chartScale;
        var newDelay = 125*index;
        $(this).delay(newDelay).animate({height:revisedValue},1000, function(){
            $(this).children('p').delay(500).fadeIn(250);
        });
    });

     $('.valueMultiplier').html('valueMultiplier = '+window.valueMultiplier);
     $('.highestYlabel').html('highestYlabel = '+highestYlabel);
     $('.maxValue').html('maxValue = ' + window.maxValue);
     $('.chartHeight').html('chartHeight = '+window.chartHeight);
     $('.chartHeightArea').html('chartHeightArea = '+window.chartHeightArea);
     $('.chartScale').html('chartScale = '+window.chartScale);

}



