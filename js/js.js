
// JavaScript Document
window.onload = function() {
//прелоудер 
let prelouder = document.querySelector('.prelouder');
prelouder.style.display = 'none';
//прелоудер



	mainBuyButton = document.getElementById('mainBuyButton');
	console.log(mainBuyButton);
		
	
	document.addEventListener('mousewheel', function(event) {
		// останавливаем поведение по умолчанию, то есть прокрутку
		console.log(event);
		
		
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

		console.log(arrPointsMenu);

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
        threshold: 0.01
    }

    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
	
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {// если элемент является наблюдаемым 
                
				let nextPage = arrScreensPages.findIndex(item => item.id == entry.target.id);
				console.log(nextPage + ' перемотка');
				let scrollPage = entry.target.offsetHeight * nextPage;
				console.log(scrollPage + ' перемотка2');
				if(scrollPageStatus == true){
					window.scrollTo(0, scrollPage);	
				}
				
				
				let visibleScreen = entry.target;
				let targetMenuPointIndex = visibleScreen.dataset.screennamber;

				let detectMenuPoint_active = arrPointsMenu[targetMenuPointIndex].classList.contains('menuPoint_active');  // активен ли пункт меню
				console.log(detectMenuPoint_active);

				arrPointsMenu[targetMenuPointIndex].classList.add('menuPoint_active'); 
				let upLineMenuIndex = Number(targetMenuPointIndex); // переменная для хранения индекса линии выше выбранного пункта меню
				let downLineMenuIndex = Number(targetMenuPointIndex) + 1; // переменная для хранения индекса линии ниже выбранного пункта меню
				arrlineMenu[upLineMenuIndex].classList.add('moveLine'); // добавляем класс наведения на линию
				console.log(downLineMenuIndex);
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

				

				//console.log(visibleScreen.clientHeight);
				console.log('наблюдаем ' + targetMenuPointIndex);
				console.log('наблюдаем ' + visibleScreen.id);
				
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
				console.log('hhhhhh ' + visibleScreen.dataset.screennamber)
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



				console.log('вышел из наблюдения ' + visibleScreen.id);
			}
        })
    }, options)

    // с помощью цикла следим за всеми img на странице
    const screens = document.querySelectorAll('.pageIdentification')
    screens.forEach(i => {
        observer.observe(i)
    })

document.getElementById('iframe').src="https://www.youtube.com/embed/5vkBznnmNwE";
}; // конец window.onload


