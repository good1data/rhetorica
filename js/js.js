// JavaScript Document
window.onload = function() {
	//МЕНЮ БУСИНЫ
	//window.scrollTo(0, 0);  перематываем сайт на вверх для захвата координат экранов 
	//АВТОМАТИЧЕСКАЯ ПРОКРУТКА ПО ЭКРАНАМ 2
	/*
	--- определить направление скрола --- 
	let nowScreenActiv = 0; запоминаем активный экран
	если активный экран не изменился при пропожения его из области видемости то активный экран = преведущий экран
	
	
	--- скрол вниз ---
	при появлении экрана в зоне видимости сделать соотвеьсьвующий пунк меню активным
	Преаедущий пунк сделать не активным
	
	--- скрол вверх ---
	убрать с пункта меню настоящего экрана активность
	выяеслить преведущий экран 
	сделать его активным
	
	
	
	*/
	let scrollStatus = true;
	let menuStatusDel = false;
	let answerMenuNameForDel;
	
	let nowScreenActiv = 0; // переменная для хранения индекса прошлого активного экрана
	let arrScreen = [];
	arrScreen = ['mainScreen', 'advantagesScreen', 'specificationsScreen', 'photoScreen', 'aboutScreen', 'reviewsScreen', 'deliveryAndPaymentScreen', 'cart']; // массив с названием экранов участвующими в меню
	arrScreenNamberAllName = ['mainScreen', 'advantagesScreen', 'advantagesScreen2', 'advantagesScreen3', 'advantagesScreen4', 'specificationsScreen', 'photoScreen', 'photoScreen2', 'photoScreen3', 'aboutScreen', 'reviewsScreen', 'deliveryAndPaymentScreen', 'cart', 'form']; // массив с названием всех экранов
		
		
	
	const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '0px',
        // процент пересечения
        threshold: 0.001
    }
	
	const roll = (entries, observer) => {
		entries.forEach((entry) => {
			if(entry.isIntersecting) {
				console.log('вижу++++++++++++');
				if(scrollStatus == true){
				   console.log(pageYOffset);
					let seeScreen = entry.target; // получаем объект который видим
					console.log('seeScreen ' + seeScreen); 
					let namerOfScreen = Number(seeScreen.dataset.screennamber);
					window.scrollTo(0, arrScreenNamberAll[namerOfScreen])
					let searchMenuName = arrScreenNamberAllName[namerOfScreen]
					let answerMenuName = arrScreen.indexOf(searchMenuName);
					console.log('Нашел в меню ' + answerMenuName);
					if(answerMenuName >= 0){
					   	console.log('Активировать меню');
						arrMenuPointCollection[answerMenuName].classList.add('menuPoint_active'); // поменяли класс внешнего круга пункта меню
						let arrMenuPointCollectionChild = arrMenuPointCollection[answerMenuName].firstElementChild; // нашли внутренний круг пункта меню
						arrMenuPointCollectionChild.classList.add('menuPoint__inside_active'); // поменяли класс внутреннего круга меню
						menuStatusDel = true;
					   } else {
						   let seeScreenId = seeScreen.id;
						   console.log( '!!!!!!!@@@@  ' + seeScreenId);
						   menuStatusDel = false;
						   if(seeScreenId == 'b4'){
							    console.log( 'qqqq  ');
							  						arrMenuPointCollection[1].classList.add('menuPoint_active'); // поменяли класс внешнего круга пункта меню
							   	let arrMenuPointCollectionChild = arrMenuPointCollection[1].firstElementChild; // нашли внутренний круг пункта меню
							   arrMenuPointCollectionChild.classList.add('menuPoint__inside_active'); // поменяли класс внутреннего круга меню
							   												arrMenuPointCollection[3].classList.remove('menuPoint_active'); // поменяли класс внешнего круга пункта меню
						let arrMenuPointCollectionChildDel = arrMenuPointCollection[3].firstElementChild; // нашли внутренний круг пункта меню
						arrMenuPointCollectionChildDel.classList.remove('menuPoint__inside_active'); // поменяли класс внутреннего круга меню
							
							   
							   
							  }
					   }
					
	
					
				   }
				
			} else {
				console.log('не вижу-----------------');
				console.log(pageYOffset);
				
				if(answerMenuNameForDel == undefined){
				   	console.log('жду для удаления ' + answerMenuNameForDel);
				   } else {console.log('ЖДУУУУУУУУУ для удаления ' + answerMenuNameForDel);}
				
				
				
				let seeScreen = entry.target; // получаем объект который уходит
				
				let seeScreenId = seeScreen.id; // получаем id уходящего объекта
					console.log('ушел экран ' + seeScreenId);
				let namerOfScreen = Number(seeScreen.dataset.screennamber);
					let searchMenuName = arrScreenNamberAllName[namerOfScreen]
					let answerMenuName = arrScreen.indexOf(searchMenuName);
					console.log('Нашел в меню DEL ' + answerMenuName);
				
					if(menuStatusDel == true){
						
					   	if(answerMenuNameForDel != undefined){
												arrMenuPointCollection[answerMenuNameForDel].classList.remove('menuPoint_active'); // поменяли класс внешнего круга пункта меню
						let arrMenuPointCollectionChild = arrMenuPointCollection[answerMenuNameForDel].firstElementChild; // нашли внутренний круг пункта меню
						arrMenuPointCollectionChild.classList.remove('menuPoint__inside_active'); // поменяли класс внутреннего круга меню
							answerMenuNameForDel = undefined;
						}
						   else{
						   												arrMenuPointCollection[answerMenuName].classList.remove('menuPoint_active'); // поменяли класс внешнего круга пункта меню
						let arrMenuPointCollectionChild = arrMenuPointCollection[answerMenuName].firstElementChild; // нашли внутренний круг пункта меню
						arrMenuPointCollectionChild.classList.remove('menuPoint__inside_active'); // поменяли класс внутреннего круга меню	
						   }

					   } else if(answerMenuNameForDel == undefined && menuStatusDel == false) {
						   answerMenuNameForDel = answerMenuName; 
					   }
				
			}
		});
	}
	
	const observer = new IntersectionObserver( roll, options );
	
	// с помощью цикла следим за всеми section на странице
    const arr = document.querySelectorAll('.pageIdentification')
    arr.forEach(i => {
        observer.observe(i)
    })
	
	/*
	
	
	
	 // устанавливаем настройки
	const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '0px',
        // процент пересечения
        threshold: 0.001
    }
	
	const roll = (entries, observer) => {
  
    // анимируем, если элемент целиком попадает в отслеживаемую область
    if(entry.isIntersecting) {
      console.log('вижу');
    } else {
       console.log('не вижу');
    }
  });
}
	
	const observer = new IntersectionObserver( roll, options );
	
	// с помощью цикла следим за всеми img на странице
    const arr = document.querySelectorAll('.section')
    arr.forEach(i => {
        observer.observe(i)
    })
	
	
	//АВТОМАТИЧЕСКАЯ ПРОКРУТКА ПО ЭКРАНАМ 2
	
	
	//АВТОМАТИЧЕСКАЯ ПРОКРУТКА ПО ЭКРАНАМ 1
	let nowScreenActiv = 0; // переменная для хранения индекса прошлого активного экрана

	let arrScreen = [];
	arrScreen = ['mainScreen', 'advantagesScreen', 'specificationsScreen', 'photoScreen', 'aboutScreen', 'reviewsScreen', 'deliveryAndPaymentScreen', 'cart']; // массив с названием экранов участвующими в меню
	 // устанавливаем настройки
	const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '0px',
        // процент пересечения
        threshold: 0.001
    }
	
	    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
             console.log(entry.isIntersecting);
			console.log('сработка');
			
			if (entry.isIntersecting) { // если элемент является наблюдаемым
				console.log('вижу!!!!');
				
				
				let seeScreen = entry.target; // получаем объект который видим
				
				let seeScreenId = seeScreen.id; // получаем id видемого объекта
				console.log('seeScreenId ' + seeScreenId);
				let seeScreenIndex = arrScreen.indexOf(seeScreenId); // находим индекс видемого экрана в массиве экранов меню
				if(seeScreenIndex >= 0){
			
					// меняем пункт меню под новый экран
					arrMenuPointCollection[seeScreenIndex].classList.add('menuPoint_active'); // поменяли класс внешнего круга пункта меню
					let arrMenuPointCollectionChild = arrMenuPointCollection[seeScreenIndex].firstElementChild; // нашли внутренний круг пункта меню
					console.log('66 ' + arrMenuPointCollectionChild);
					arrMenuPointCollectionChild.classList.add('menuPoint__inside_active'); // поменяли класс внутреннего круга меню
					// убираем стили активности со старого экрана
					if(nowScreenActiv != seeScreenIndex){ // 
					
						arrMenuPointCollection[nowScreenActiv].classList.remove('menuPoint_active'); // убираем класс активности для внешнего круга меню 
						arrMenuPointCollectionChild = arrMenuPointCollection[nowScreenActiv].firstElementChild;
						arrMenuPointCollectionChild.classList.remove('menuPoint__inside_active');
						nowScreenActiv = seeScreenIndex; //запоминаем новый индекс старого экрана
					
					}
				   }
				
			} else{
				let seeScreen = entry.target; // получаем объект который видим
				
				let seeScreenId = seeScreen.id; // получаем id видемого объекта
				console.log('не вижу');
				console.log('seeScreenId ' + seeScreenId);
				let seeScreenIndex = arrScreen.indexOf(seeScreenId); // находим индекс видемого экрана в массиве экранов меню
				console.log('seeScreenIndex ' + seeScreenIndex);
				console.log('nowScreenActiv ' + nowScreenActiv);
				if(seeScreenIndex == nowScreenActiv){
				   console.log('!!!!');
					let arrMenuPointCollectionChild
						arrMenuPointCollection[nowScreenActiv].classList.remove('menuPoint_active'); // убираем класс активности для внешнего круга меню 
						arrMenuPointCollectionChild = arrMenuPointCollection[nowScreenActiv].firstElementChild;
						arrMenuPointCollectionChild.classList.remove('menuPoint__inside_active');
					
					let newSeeScreenIndex = seeScreenIndex - 1;
					console.log('22222 ' + newSeeScreenIndex);
					arrMenuPointCollection[newSeeScreenIndex].classList.add('menuPoint_active'); // поменяли класс внешнего круга пункта меню
					arrMenuPointCollectionChild = arrMenuPointCollection[newSeeScreenIndex].firstElementChild;
					console.log('555 ' + arrMenuPointCollectionChild);
					arrMenuPointCollectionChild.classList.remove('menuPoint__inside_active');
					
				   }
				
			}
			
			//АВТОМАТИЧЕСКАЯ ПРОКРУТКА ПО ЭКРАНАМ 1
			
            /*if (entry.isIntersecting) {
				
                const seeScreen = entry.target;
				let seeScreenId = seeScreen.id;
				console.log('вижу!');
				
                // выводим информацию в консоль - проверка работоспособности наблюдателя
                console.log(seeScreenId);
				 console.log(arrScreen.indexOf(seeScreenId));

				
               
				console.log(arrMenuPointCollection[arrScreen.indexOf(seeScreenId)]);
				let activMenuPoint = arrMenuPointCollection[arrScreen.indexOf(seeScreenId)];
				let activMenuPointChild = activMenuPoint.firstElementChild;
				  console.log(activMenuPointChild);
				activMenuPoint.classList.add('menuPoint_active');
				activMenuPointChild.classList.add('menuPoint__inside_active');
				  console.log('вижу!');
				if(seeScreenId == 'advantagesScreen'){
					window.scrollTo(0, advantagesScreenNamber);
				} else {
				let activMenuPointNow = document.querySelector('.menuPoint_active'); //ищем активный пункт меню
				let activMenuPointNow__inside = document.querySelector('.menuPoint__inside_active'); //ищем активный пункт меню
					console.log('activMenuPointNow ' + activMenuPointNow);
				activMenuPointNow.classList.remove('menuPoint_active'); //удаляем класс активности
					activMenuPointNow__inside.classList.remove('menuPoint__inside_active');//удаляем класс активности
				}
  

            }
        })
    }, options)

    // с помощью цикла следим за всеми img на странице
    const arr = document.querySelectorAll('.section')
    arr.forEach(i => {
        observer.observe(i)
    })
	*/
	
	
	//ЗАПОМИНАЕМ КООРДИНАТЫ МЕНЮ
	// переменные для хранения экранов учвствующих в меню  
	let mainScreen = document.getElementById('mainScreen');
	let mainScreenNamber;
	let advantagesScreen = document.getElementById('advantagesScreen');
	let advantagesScreenNamber;
	let specificationsScreen = document.getElementById('specificationsScreen');
	let specificationsScreenNamber;
	let photoScreen = document.getElementById('photoScreen');
	let photoScreenNamber;
	let aboutScreen = document.getElementById('aboutScreen');
	let aboutScreenNamber;
	let reviewsScreen = document.getElementById('reviewsScreen');
	let reviewsScreenNamber;
	let deliveryAndPaymentScreen = document.getElementById('deliveryAndPaymentScreen');
	let deliveryAndPaymentScreenNamber;
	let cart = document.getElementById('cart');
	let cartNamber;
		// переменные для хранения экранов учвствующих в меню 
	
	let arrScreenNamber = []; // масив для хранения экранов учвствующих в меню 
	
	// переменные для хранения экранов НЕ учвствующих в меню 
	let advantagesScreen2 = document.getElementById('advantagesScreen2');
	let advantagesScreen2Namber;
	let advantagesScreen3 = document.getElementById('advantagesScreen3');
	let advantagesScreen3Namber;
	let advantagesScreen4 = document.getElementById('advantagesScreen4');
	let advantagesScreen4Namber;
	let photoScreen2 = document.getElementById('photoScreen2');
	let photoScreen2Namber;
	let photoScreen3 = document.getElementById('photoScreen3');
	let photoScreen3Namber;
	let formBy = document.getElementById('formBy');
	let formNamber;
	// переменные для хранения экранов НЕ учвствующих в меню 
	
	
	
	if(pageYOffset < 2){ // если сайт в начале скрола
		
		mainScreenNamber = mainScreen.getBoundingClientRect().top;
		advantagesScreenNamber = advantagesScreen.getBoundingClientRect().top;
		specificationsScreenNamber = specificationsScreen.getBoundingClientRect().top;
		photoScreenNamber = photoScreen.getBoundingClientRect().top;
		aboutScreenNamber = aboutScreen.getBoundingClientRect().top;
		reviewsScreenNamber = reviewsScreen.getBoundingClientRect().top;
		deliveryAndPaymentScreenNamber = deliveryAndPaymentScreen.getBoundingClientRect().top;
		cartNamber = cart.getBoundingClientRect().top;
		aboutScreenNamber = aboutScreen.getBoundingClientRect().top;
		
		advantagesScreen2Namber = advantagesScreen2.getBoundingClientRect().top;
		advantagesScreen3Namber = advantagesScreen3.getBoundingClientRect().top;
		advantagesScreen4Namber = advantagesScreen4.getBoundingClientRect().top;
		photoScreen2Namber = photoScreen2.getBoundingClientRect().top;
		photoScreen3Namber = photoScreen3.getBoundingClientRect().top;
		formByNamber = formBy.getBoundingClientRect().top;
		// ПОРЯДОК ВАЖЕН!!!
		arrScreenNamber = [mainScreenNamber, advantagesScreenNamber, specificationsScreenNamber, photoScreenNamber, aboutScreenNamber, reviewsScreenNamber, deliveryAndPaymentScreenNamber, cartNamber]; // наполняем масив для хранения экранов учвствующих в меню 
		
		arrScreenNamberAll = [mainScreenNamber, advantagesScreenNamber, advantagesScreen2Namber, advantagesScreen3Namber, advantagesScreen4Namber, specificationsScreenNamber, photoScreenNamber, photoScreen2Namber, photoScreen3Namber, aboutScreenNamber, reviewsScreenNamber, deliveryAndPaymentScreenNamber, cartNamber, formNamber]; // наполняем масив для хранения всех экранов
		
		
		
	   };
	
	// переменные
	let menuPointCollection = document.querySelectorAll('.menuPoint'); // выбрали все пункты меню
	let arrMenuPointCollection = Array.from(menuPointCollection); // сформировали пуктов меню в массив
	let rightMenu = document.querySelector('#rightMenu'); // выбрали контейнер меню
	let menuLineCollection = document.querySelectorAll('.menuLine');  // выбрали все линии меню
	let arrMenuLineCollection = Array.from(menuLineCollection); // сформировали все линии меню в массив
	
	let menuPointSelected; // переменная для хранения пункта меню на который навели мышку
	let menuText = document.querySelector('.menuText'); // выбрали всплывающую подсказку в меню
	let upLine; // переменная для хранения линии выше выбранного пункта меню
	let downLine; // переменная для хранения линии ниже выбранного пункта меню
	
	let sectionPage = document.getElementById('advantagesScreen');
	// переменные конец
	/*
	// клик на пункт меню
	rightMenu.addEventListener("click", function(event) {  // переход по меню
		let menuIndex = arrMenuPointCollection.indexOf(event.target); // получили индекс нажатого пункта меню в массиве пунктов меню
		let menuIndexParent = arrMenuPointCollection.indexOf(event.target.parentElement);
				
		if(menuIndexParent  >= 0){
		   		let menuTargetSectionName = event.target.dataset.targetsection;	// получили название секции на которую нужно перейти
				let menuTargetSection = document.getElementById(menuTargetSectionName); // получили секцию на которую нужно перейти
			scrollStatus = false;
				window.scrollTo(0, arrScreenNamber[menuIndexParent]);
			
			setTimeout(function(){scrollStatus = true;}, 1000);
		   }


		
	}); */// конец клик на пункт меню
	
	// наведение на пункт меню
	rightMenu.addEventListener("mouseover", function(event) {
		
		let menuIndex = arrMenuPointCollection.indexOf(event.target);
		let menuIndexParent = arrMenuPointCollection.indexOf(event.target.parentElement);
		let menuClassName = event.target.className;
	
		let upLineIndex = menuIndexParent;
		let downLineIndex = upLineIndex + 1;
	
		upLine = arrMenuLineCollection[upLineIndex];
		downLine = arrMenuLineCollection[downLineIndex];
	
	
		if(menuClassName == 'menuPoint__inside'){
			arrMenuPointCollection[menuIndexParent].classList.add('menuPointMove');
			menuPointSelected = menuIndexParent;
			upLine.classList.add('moveLine');
			downLine.classList.add('moveLine');
			let coordsMenuPoint =  arrMenuPointCollection[menuIndexParent].getBoundingClientRect();
			menuText.style.top = (coordsMenuPoint.y - 12) + 'px';
			let menuContent = event.target.dataset.namemenu;
			menuText.textContent = menuContent;
			menuText.classList.add('menuTextMove');
		
			}
	}); // конец наведение на пункт меню
		
	// mouseout на пункт меню	
	rightMenu.addEventListener("mouseout", function() { 
		let menuClassName = event.target.className;
		if(menuClassName == 'menuPoint__inside'){
			arrMenuPointCollection[menuPointSelected].classList.remove('menuPointMove');
			upLine.classList.remove('moveLine');
			downLine.classList.remove('moveLine');
			menuText.classList.remove('menuTextMove');
			}
		}); // конец mouseout на пункт меню	   

}; // конец window.onload



