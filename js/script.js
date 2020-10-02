$('.wrapper').addClass('loaded')

// Burger menu animation

$('.icon-menu').click(function(e){
	$(this).toggleClass('_active')
	$('.menu_body').toggleClass('_active')
	if ($(this).hasClass('_active')) {
		$('body').data('scroll',$(window).scrollTop())
	} 
	$('body').toggleClass('lock')
	if (!$(this).hasClass('_active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	} 
})

//2 PARTS IMAGE + TEXT

function ibg(){
	$.each($('._ibg'), function (){
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")')
		}
	})
}
ibg()

var isMobile = {
	Android: function() {
		 return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		 return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		 return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		 return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function() {
		 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

if(isMobile.any()){
	let menuParents = document.querySelectorAll('.menu-page__parent>a')
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("click",function(e){
			menuParent.parentElement.classList.toggle('_active')
			e.preventDefault()
		})
		
	}
} else {
	let menuParents = document.querySelectorAll('.menu-page__parent')
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("mouseenter",function(e){
			menuParent.classList.add('_active')
		})
		menuParent.addEventListener("mouseleave",function(e){
			menuParent.classList.remove('_active')
		})
	}
}
/*==========================================================*/
$('.menu-page__burger').click(function(){
	$(this).toggleClass('_active')
	$('.menu-page__body').slideToggle()
	$('.menu-page__body').toggleClass('_active')
})

$('.search-page__title').click(function(){
	$(this).toggleClass('_active')
	$('.categories-search').slideToggle()
})

/*==========================================================*/
let searchSelect = document.querySelector('.search-page__title')
let checkboxCategories = document.querySelectorAll('.categories-search__checkbox')
for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener("change",function(e){
		checkboxCategory.classList.toggle('_active')

		let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active')

		if(checkboxActiveCategories.length > 0){
			searchSelect.classList.add('_categories')
			let searchQuantity = searchSelect.querySelector('.search-page__quantity')
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length
		} else {
			searchSelect.classList.remove('_categories')
		}
	})
}
/*==========================================================*/
function digi(str){
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|&))/g, "$1 ")
	return r
}
/*==========================================================*/
if(document.querySelector('.price-filter')){
	const priceSlider = document.querySelector('.price-filter__slider');
	noUiSlider.create(priceSlider, {
		 start: [0, 100000],
		 tooltips: [wNumb({decimals:0}),wNumb({decimals:0})],
		 connect: true,
		 range: {
			  'min': [0],
			  'max': [200000]
		 }
	});
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('input',setPriceValues)
	priceEnd.addEventListener('input',setPriceValues)
	
	function setPriceValues(){
		let priceStartValue,priceEndValue;
		if(priceStart.value!='') priceStartValue = priceStart.value
		if(priceEnd.value!='') priceEndValue = priceEnd.value
		priceSlider.noUiSlider.set([priceStartValue,priceEndValue])
	}
}
/*==========================================================*/
$('._spoiler').click(function(){
	$(this).toggleClass('_active')
	$(this).parent().find('.checkbox').parent().slideToggle()
})
$('.checkbox__text').click(function(){
	$(this).closest('label').find('.checkbox__input').attr('checked', function(index, attr){
		return attr == 'checked' ? null : 'checked';
  	});
})

// function setPriceMin(){
// 	var priceStart = $("#price-start").val()
// 	priceSlider.noUiSlider.set(priceStart);
// }
/*==========================================================*/
$('.filter__title').click(function(){
	// if(isMobile.any()){
	// }
	if ($(window).width() <= '992'){
		$(this).next().slideToggle()
		$(this).toggleClass('_active')
  }
})

/*Quantity==========================================================*/
let quantityButtons = document.querySelectorAll('.quantity__button')
if(quantityButtons.length>0){
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click",function(e){
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value)
			if(quantityButton.classList.contains('quantity__button_plus')){
				value++
			} else {
				value--
				if(value<1) value = 1
			}
			quantityButton.closest('.quantity').querySelector('input').value = value
		})
	}
}

/*Tabs==========================================================*/

let Tabs = document.querySelectorAll("._tabs")
if(Tabs.length>0){
	$('._tabs-item').click(function(){
		$('._tabs-item').removeClass('_active')
		$(this).addClass('_active')
		var index= $(this).index()
		$.each($('._tabs-block'), function (){
			if ($(this).index()==index) {
				$('._tabs-block').not($(this)).hide()
				$(this).show()
			}
		})
	})
	$.each($('._tabs-item'), function (){
		if ($(this).hasClass("_active")) {
			var index= $(this).index()
			$.each($('._tabs-block'), function (){
				if ($(this).index()==index) {
					$('._tabs-block').not($(this)).hide()
				}
			})
		}
	})
}
