$('._slick1').on('init', function(event, slick){
   var $items = slick.$dots.find('li');
   $items.addClass('mainslider__dotts');
   $items.find('button').remove();
});

$('._slick1').slick({
	arrows: false,
	dots: true,
})

let mainsliderImages = document.querySelectorAll('.mainslider__image')
let mainsliderDotts = document.querySelectorAll('.mainslider__dotts')
for (let index = 0; index < mainsliderImages.length/2-1; index++) {
	const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
	mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')"
}

$('._slick2').slick({
	arrows: false,
	dots: false,
	infinite: false,
	swipe: false,
	waitForAnimate: false,
})

let pages = document.querySelectorAll('.products-slider__slide')
// $('._slick2').on('swipe', function(event, slick, direction){
// 	let element;
// 	for (let i = 0; i < pages.length; i++) {
// 		if(pages[i].getAttribute('tabidnex')==0){
// 			element = i
// 		}	
// 	}
// 	if(direction=="left"){
// 		let number = $('.this_page').html()
// 		number--
// 		$('.this_page').html(number)
// 		if(number==0){
// 			number = number+1
// 			$('.this_page').html(number)
// 		}
// 	} 
// 	if(direction=="right"){
// 		let number = $('.this_page').html()
// 		number++
// 		$('.this_page').html(number)
// 		if(number==pages.length+1){
// 			number = number-1
// 			$('.this_page').html(number)
// 		}
// 	}
// });
$(window).on('load',function() {
	for (let i = 0; i < pages.length; i++) {
		if(pages[i].getAttribute('tabidnex')==0){
			$('.this_page').html(pages[i].getAttribute('data-slick-index'))
		}	
	}
	$('.all_pages').html(pages.length)
});

$('.products-slider__arrow_prev').click(function(){
	let number = $('.this_page').html()
	number--
	$('.this_page').html(number)
	if(number==0){
		number = number+1
		$('.this_page').html(number)
	}
	$('._slick2').slick('slickPrev')
})

$('.products-slider__arrow_next').click(function(e){
	let number = $('.this_page').html()
	number++
	$('.this_page').html(number)
	if(number==pages.length+1){
		number = number-1
		$('.this_page').html(number)
	}
	$('._slick2').slick('slickNext')
})

$('._slick3').slick({
	slidesToShow: 5,
	arrows: false,
	dots: false,
	infinite: true,
	// waitForAnimate: false,
	responsive:[
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	],
})

$('.brands-slider__arrow_prev').click(function(){
	$('._slick3').slick('slickPrev')
})

$('.brands-slider__arrow_next').click(function(e){
	$('._slick3').slick('slickNext')
})


$('._slick4').slick({
	slidesToShow: 1,
	arrows: false,
	dots: false,
	infinite: false,
	// waitForAnimate: false,
	asNavFor: "._slick5"
})
$('._slick5').slick({
	slidesToShow: 4,
	arrows: false,
	dots: false,
	infinite: false,
	// waitForAnimate: false,
	asNavFor: "._slick4"
})

$(document).on("click",".images-product__subslide",function(){
	var di = $(this).data("slick-index");
	$( '._slick5').slick('slickGoTo', di);
});  