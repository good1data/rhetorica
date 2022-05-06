
// JavaScript Document
window.onload = function() {
//прелоудер 
let prelouder = document.querySelector('.prelouder');
prelouder.style.display = 'none';
//прелоудер

/* Определение типа устройства  START*/
let device = navigator.userAgent;
let diviseMobileStatus = false;
if(device.match('iPhone') || device.match('Android') || device.match('iPad')){
	diviseMobileStatus = true;
}
/* Определение типа устройства  END*/

let mobileMenu = document.getElementById('mobileMenu'); // нашли мобильное меню
let mobileMenuBurger = document.querySelector('.headerMenu'); //нашли бургер в мобильном меню
let mobileLogo = document.querySelector('.mobileLogo'); //нашли логотип в мобильном меню
let mobileMenuClose = document.getElementById('mobileMenuClose'); //нашли крестик в мобильном меню
let mobileMenuContent__pointALL = document.querySelectorAll('.mobileMenuContent__point'); // нещли все пункты мобильного меню

function stopPageScroll(){
	scrollPageStatus = true;
}

	mainBuyButton = document.getElementById('mainBuyButton');
	
		
	
	document.addEventListener('mousewheel', function(event) {
		// останавливаем поведение по умолчанию, то есть прокрутку
	
		
		
	  });
	  mainBuyButton.addEventListener("click", function(event){ // событие при клике на пункт меню
		function stopPageScroll(){
			scrollPageStatus = true;
		}

		scrollPageStatus = false;
		setTimeout(stopPageScroll, 1000);

	});






	let screensPages = document.querySelectorAll('.pageIdentification');
	let arrScreensPages = Array.from(screensPages); // сформировали пуктов меню в массив
	let scrollPageStatus = true; // статус постраничного скрола

	// МЕНЮ НАВИГАЦИЯ 
		// переменные
		let pointsMenu = document.querySelectorAll('.menuPoint'); // выбрали все пункты меню
		let arrPointsMenu = Array.from(pointsMenu); // сформировали из пунктов массив
		let lineMenu = document.querySelectorAll('.menuLine'); // выбрали все линии меню
		let arrlineMenu = Array.from(lineMenu); // сформировали из линий массив
		let menuTextAll = document.querySelectorAll('.menuText'); // выбрали все всплывающие подсказку в меню
		let arrmenuTextAll = Array.from(menuTextAll); // сформировали из всплывающих пунктов массив

		

		arrPointsMenu.forEach(function(menuPoint, index) { // каждому пункту меню назначили событие

			menuPoint.addEventListener("click", function(event){ // событие при клике на пункт меню
				function stopPageScroll(){
					scrollPageStatus = true;
				}

				scrollPageStatus = false;
				setTimeout(stopPageScroll, 1000);
	
			});



			menuPoint.addEventListener("mouseover", function(event){ // событие при наведении на пункт меню
				
				let selectPointClass = event.target.classList; // получаем список классов пункта меню
				let arrselectPointClass = Array.from(selectPointClass); // формируем массив из списока классов пункта меню
				let findMenuPointMove = arrselectPointClass.includes('menuPoint_Move'); // записываем в переменную есть ли в массиве классов элемента класс активности
	
				arrmenuTextAll[index].classList.add('menuText_Move'); // показываем подсказку

				if(findMenuPointMove == false){ // если класса активности нет			
					let upLineMenuIndex = index; // переменная для хранения индекса линии выше выбранного пункта меню
					let downLineMenuIndex = index + 1; // переменная для хранения индекса линии ниже выбранного пункта меню
					arrlineMenu[upLineMenuIndex].classList.add('moveLine'); // добавляем класс наведения на линию
					arrlineMenu[downLineMenuIndex].classList.add('moveLine');// добавляем класс наведения на линию
				}
			});

			menuPoint.addEventListener("mouseout", function(event){ // событие при уведения на пункт меню
				let selectPointClass = event.target.classList; // получаем список классов пункта меню
				let arrselectPointClass = Array.from(selectPointClass); // формируем массив из списока классов пункта меню
				let findMenuPointMove = arrselectPointClass.includes('menuPoint_Move'); // записываем в переменную есть ли в массиве классов элемента класс активности
			
				arrmenuTextAll[index].classList.remove('menuText_Move'); // прячем подсказку

				if(findMenuPointMove == false){ // если класса активности нет
					let upLineMenuIndex = index; // переменная для хранения индекса линии выше выбранного пункта меню
					let downLineMenuIndex = index + 1; // переменная для хранения индекса линии ниже выбранного пункта меню
					arrlineMenu[upLineMenuIndex].classList.remove('moveLine'); // добавляем класс наведения на линию
					arrlineMenu[downLineMenuIndex].classList.remove('moveLine');// добавляем класс наведения на линию
				}
			});
		});
	// /МЕНЮ НАВИГАЦИЯ




	const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '0px',
        // процент пересечения - половина изображения
        threshold: 0.001
    }

    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
	
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {// если элемент является наблюдаемым 
                
				let nextPage = arrScreensPages.findIndex(item => item.id == entry.target.id);
			
				//let scrollPage = entry.target.offsetHeight * nextPage;
				let scrollPage = entry.target;
				
				if(scrollPageStatus == true){
					
					nexElemNav = document.getElementById('b' + nextPage);

					let top = nexElemNav.getBoundingClientRect().top + window.pageYOffset;
					if(diviseMobileStatus == false){
						window.scrollTo(0, top);
					}
					
			
				}
				
				
				let visibleScreen = entry.target;
				let targetMenuPointIndex = visibleScreen.dataset.screennamber;

				let detectMenuPoint_active = arrPointsMenu[targetMenuPointIndex].classList.contains('menuPoint_active');  // активен ли пункт меню
				
				arrPointsMenu[targetMenuPointIndex].classList.add('menuPoint_active'); 
				let upLineMenuIndex = Number(targetMenuPointIndex); // переменная для хранения индекса линии выше выбранного пункта меню
				let downLineMenuIndex = Number(targetMenuPointIndex) + 1; // переменная для хранения индекса линии ниже выбранного пункта меню
				arrlineMenu[upLineMenuIndex].classList.add('moveLine'); // добавляем класс наведения на линию
		
				arrlineMenu[downLineMenuIndex].classList.add('moveLine');// добавляем класс наведения на линию 
				arrPointsMenu[targetMenuPointIndex].childNodes[1].classList.add('menuPoint__inside_active'); 
				
				if( visibleScreen.dataset.screennamber != 1 && arrPointsMenu[1].classList.contains('menuPoint_active') == true ){
					arrPointsMenu[1].classList.remove('menuPoint_active');
					arrPointsMenu[1].childNodes[1].classList.remove('menuPoint__inside_active'); 
					arrlineMenu[1].classList.remove('moveLine'); // удаляем  класс наведения на линию
					arrlineMenu[2].classList.remove('moveLine');// удаляем класс наведения на линию 
				}

				if( visibleScreen.dataset.screennamber != 3 && arrPointsMenu[3].classList.contains('menuPoint_active') == true ){
					arrPointsMenu[3].classList.remove('menuPoint_active');
					arrPointsMenu[3].childNodes[1].classList.remove('menuPoint__inside_active'); 
					arrlineMenu[3].classList.remove('moveLine'); // удаляем  класс наведения на линию
					arrlineMenu[4].classList.remove('moveLine');// удаляем класс наведения на линию 
				}
				if( visibleScreen.dataset.screennamber != 7 && arrPointsMenu[7].classList.contains('menuPoint_active') == true ){
					arrPointsMenu[7].classList.remove('menuPoint_active');
					arrPointsMenu[7].childNodes[1].classList.remove('menuPoint__inside_active'); 
					arrlineMenu[7].classList.remove('moveLine'); // удаляем  класс наведения на линию
					arrlineMenu[8].classList.remove('moveLine');// удаляем класс наведения на линию 
				}

				

	
				if(visibleScreen.id == 'b1' || visibleScreen.id == 'b2' || visibleScreen.id == 'b3' || visibleScreen.id == 'b4'){//меняем мобильное менюв зависимости от экранов
					mobileMenuBurger.classList.add('headerMenu_black');
					mobileLogo.classList.add('mobileLogo_black');
					
				} else{
					mobileMenuBurger.classList.remove('headerMenu_black');
					mobileLogo.classList.remove('mobileLogo_black');
				}
				
				//window.scrollTo(0, 0);

				

            } else {// если элемент не является наблюдаемым 
				let adjustmentStatusMenu = true;

				let visibleScreen = entry.target;
				let targetMenuPointIndex = visibleScreen.dataset.screennamber;
				if(visibleScreen.dataset.screennamber == 1 && arrPointsMenu[1].classList.contains('menuPoint_active') == true ){
					
					adjustmentStatusMenu = false;
				}
				if(visibleScreen.dataset.screennamber == 3 && arrPointsMenu[3].classList.contains('menuPoint_active') == true ){
					
					adjustmentStatusMenu = false;
				}
			
				if(visibleScreen.dataset.screennamber == 7 && arrPointsMenu[7].classList.contains('menuPoint_active') == true ){
					
					adjustmentStatusMenu = false;
				}

				if(adjustmentStatusMenu == true){
					arrPointsMenu[targetMenuPointIndex].classList.remove('menuPoint_active'); 
					let upLineMenuIndex = Number(targetMenuPointIndex); // переменная для хранения индекса линии выше выбранного пункта меню
					let downLineMenuIndex = Number(targetMenuPointIndex) + 1; // переменная для хранения индекса линии ниже выбранного пункта меню
					arrlineMenu[upLineMenuIndex].classList.remove('moveLine'); // удаляем  класс наведения на линию
					arrlineMenu[downLineMenuIndex].classList.remove('moveLine');// удаляем класс наведения на линию 
					arrPointsMenu[targetMenuPointIndex].childNodes[1].classList.remove('menuPoint__inside_active'); 
				}



				
			}
        })
    }, options)

    // с помощью цикла следим за всеми img на странице
    const screens = document.querySelectorAll('.pageIdentification')
    screens.forEach(i => {
        observer.observe(i)
    })

document.getElementById('iframe').src="https://www.youtube.com/embed/5vkBznnmNwE";

mobileMenuBurger.addEventListener("click", function(event){ // событие при клике на бургер
			
	mobileMenu.style.display = 'flex';
	body.style.overflow = 'hidden';

});

mobileMenuClose.addEventListener("click", function(event){ // событие при клике на крестик в мобильном меню
	
	mobileMenu.style.display = 'none';
	body.style.overflow = '';


});

mobileMenuContent__pointALL.forEach(function(item){
	item.addEventListener("click", function(event){ // событие при клике на крестик в мобильном меню
		scrollPageStatus = false;
		mobileMenu.style.display = 'none';
		setTimeout(stopPageScroll, 250);
	
	});
});



// предотвращаем прокрутку 2
function playWheel(){
	wheelStatus = true;
	body.style.overflow = '';
}
let body = document.getElementById('body');

let wheelStatus = true;
window.addEventListener('wheel', scrollWheel);
window.addEventListener('touchmove', scrollWheel);
function scrollWheel(){
	
	if(wheelStatus == true){
		if(diviseMobileStatus == false){
			body.style.overflow = 'hidden';
		}
		
		wheelStatus = false;
		setTimeout(playWheel, 250);
	}
}


/* переключение кресла на главной START*/

let chairBrownButton = document.getElementById('chairBrown');
let chairWhiteButton = document.getElementById('chairWhite');
let productChairImg = document.querySelector('.product-chair__img');

chairBrownButton.addEventListener('click', changesColorChair);
chairWhiteButton.addEventListener('click', changesColorChair);

function changesColorChair(){
	
	let idChair = this.id;
	
}

function changesColorChair(){
	
	let idChair = this.id;
	
	if (idChair == 'chairBrown'){
		productChairImg.src = 'img/main/kreslo.png';
	} else if(idChair == 'chairWhite'){
		productChairImg.src = 'img/main/kreslo_bel.png';
	}
}


/* переключение кресла на главной END*/

/* ссылка на форму заказа START*/
let nextButton = document.querySelector('.nextButton');
let formBuy = document.getElementById('formBuy');
let b13 = document.getElementById('b13');
function formBuyVisible(){
	b13.style.display = 'block';
	formBuy.style.display = 'block';
}
nextButton.addEventListener('click', formBuyVisible);
/* ссылка на форму заказа END*/


}; // конец window.onload


