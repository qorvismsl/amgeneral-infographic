var mobile = false;
var mobileBreak = 768;
if($(window).width() <= mobileBreak){mobile = true;}
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var path;
function freezePage(){$('body').css({'width':'100%','height':'100%','overflow':'hidden'});}
function unfreezePage(){$('body').css({'width':'','height':'','overflow':''});}
// animScroll('#tier-contents',1,0);





//! WINDOW RESIZE

var winW;
var winH;
$(window).resize(function(){
	winW = $(window).width();
	winH = $(window).height();
	//console.log(winW);
})





//! ANIMATIONS

function isScrolledIntoView(elem, dif){
	vT = $(elem).offset().top-dif;
	if(sT >= vT){
		return true;
	}
}

var animTrends = false;
var animAdv = false;

$(window).scroll(function(){
	sT = Number($(document).scrollTop());
	
	if(isScrolledIntoView($('#ig-trends'), 400) && animTrends != true){
		animOnTrends();
		animTrends = true;
	}
	
	if(isScrolledIntoView($('#ig-advantage'), 300) && animAdv != true){
		animOnAdv();
		animAdv = true;
	}
})

var del1 = .3;
var del2 = .2;
var trendDel = 1000;

function animOnTrends(){
	
	TweenMax.to($('.trend-graphic.left').find('.shadow'), .5, {opacity:1})
	TweenMax.to($('.trends-graphics').children('.col.left').find('.text'), 1, {delay:.5, opacity:1})
	
	$('.trend-graphic.left').find('.trend-car').each(function(i){
		if(i<4){
			if(i!=0){
				TweenMax.to($('.trend-graphic.left').find('.trend-car[data-num="'+i+'"]'), .75, {delay:((i-1)*del1), startAt:{y:70}, y:0, opacity:1, ease:Power3.easeOut})
			}
		} else {
			TweenMax.to($('.trend-graphic.left').find('.trend-car[data-num="'+i+'"]'), 1.5, {delay:((i-1)*del2-.5), startAt:{scaleX:.5, scaleY:.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[1,2]})
		}
	})
	
	setTimeout(function(){
		TweenMax.to($('.trend-graphic.right').find('.shadow'), .5, {opacity:1})
		TweenMax.to($('.trends-graphics').children('.col.right').find('.text'), 1, {delay:.5, opacity:1})
		
		$('.trend-graphic.right').find('.trend-car').each(function(i){
			if(i<4){
				if(i!=0){
					TweenMax.to($('.trend-graphic.right').find('.trend-car[data-num="'+i+'"]'), 1.5, {delay:((i-1)*del2), startAt:{scaleX:1.5, scaleY:1.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
				}
			} else {
				TweenMax.to($('.trend-graphic.right').find('.trend-car[data-num="'+i+'"]'), .75, {delay:((i-1)*del1-.8), startAt:{y:-70}, y:0, opacity:1, ease:Power3.easeOut})
			}
		})
	}, trendDel);
}




function animTrendL(){
	$('.trend-graphic.left').find('.trend-car').each(function(i){
		$(this).css('opacity',0);
		
		if(i<4){
			if(i!=0){
				TweenMax.to($('.trend-graphic.left').find('.trend-car[data-num="'+i+'"]'), .75, {delay:((i-1)*del1), startAt:{y:70}, y:0, opacity:1, ease:Power3.easeOut})
			}
		} else {
			TweenMax.to($('.trend-graphic.left').find('.trend-car[data-num="'+i+'"]'), 1.5, {delay:((i-1)*del2-.5), startAt:{scaleX:.5, scaleY:.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[1,2]})
		}
	})
}
$('.learnmore-l').mouseenter(function(){
	animTrendL();
})

function animTrendR(){
	$('.trend-graphic.right').find('.trend-car').each(function(i){
		$(this).css('opacity',0);
		
		if(i<4){
			if(i!=0){
				TweenMax.to($('.trend-graphic.right').find('.trend-car[data-num="'+i+'"]'), 1.5, {delay:((i-1)*del2), startAt:{scaleX:1.5, scaleY:1.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
			}
		} else {
			TweenMax.to($('.trend-graphic.right').find('.trend-car[data-num="'+i+'"]'), .75, {delay:((i-1)*del1-.8), startAt:{y:-70}, y:0, opacity:1, ease:Power3.easeOut})
		}
	})
}
$('.learnmore-r').mouseenter(function(){
	animTrendR();
})


var advDel = 1700;
var del3 = .2;
var flipped = [];

function animOnAdv(){
	TweenMax.to($('.advantage-graphics').find('.carbg'), 1.5, {startAt:{y:600}, y:0, opacity:1, ease:Power3.easeOut});

	TweenMax.to($('.advantage-graphics').find('.arm1'), 1, {delay:1, startAt:{x:-200}, x:0, opacity:1, ease:Elastic.easeOut, easeParams:[3,4]});
	TweenMax.to($('.advantage-graphics').find('.arm4'), 1, {delay:1, startAt:{x:200}, x:0, opacity:1, ease:Elastic.easeOut, easeParams:[3,4]});

	TweenMax.to($('.advantage-graphics').find('.arm2'), 1, {delay:1.25, startAt:{x:-200}, x:0, opacity:1, ease:Elastic.easeOut, easeParams:[3,4]});
	TweenMax.to($('.advantage-graphics').find('.arm5'), 1, {delay:1.25, startAt:{x:200}, x:0, opacity:1, ease:Elastic.easeOut, easeParams:[3,4]});

	TweenMax.to($('.advantage-graphics').find('.arm3'), 1, {delay:1.5, startAt:{y:100}, y:0, opacity:1, ease:Elastic.easeOut, easeParams:[2,4]});
	
	setTimeout(function(){
		$('.adv-cog').each(function(i){
			TweenMax.to($(this), .75, {startAt:{scaleX:.5, scaleY:.5}, delay:(i*del3), scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
		})
	}, advDel)
	
	setTimeout(function(){
		$('.adv-cog').mouseenter(function(){
			TweenMax.to($(this).find('.cog-contents'), .25, {rotationY:90, ease:Power2.easeIn, onCompleteParams:[$(this)], onComplete:function(trg){
				$(trg).find('.front').css({'visibility':'hidden'})
				
				TweenMax.to($(trg).find('.cog-contents'), .5, {rotationY:180, ease:Expo.easeOut})
				$(trg).find('.back').css({'visibility':'visible'})
			}})			
		})
		$('.adv-cog').mouseleave(function(){
			if($(this).find('.front').css('visibility') == 'hidden'){
				TweenMax.to($(this).find('.cog-contents'), .5, {rotationY:90, ease:Power2.easeIn, onCompleteParams:[$(this)], onComplete:function(trg){
					$(trg).find('.back').css({'visibility':'hidden'})
					
					TweenMax.to($(trg).find('.cog-contents'), .5, {rotationY:0, ease:Expo.easeOut})
					$(trg).find('.front').css({'visibility':'visible'})
				}})	
			} else {
				TweenMax.to($(this).find('.cog-contents'), .5, {rotationY:0, ease:Expo.easeOut})
				$(this).find('.back').css({'visibility':'hidden'})
				$(this).find('.front').css({'visibility':'visible'})
				flipped.push($(this));
				setTimeout(function(){				
					$(flipped).each(function(){
						TweenMax.to($(this).find('.cog-contents'), .5, {rotationY:0, ease:Expo.easeOut})
						$(this).find('.back').css({'visibility':'hidden'})
						$(this).find('.front').css({'visibility':'visible'})
					})				
				}, 500)
			}		
		})
	}, 2000)

}





//! ADD THIS 

$(window).on('load', function(){
	$('#ig-share').show();
})







