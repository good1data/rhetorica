// JavaScript Document
window.onload = function() {
var up = document.querySelector('#up');
	function inform(){
		console.log('up detected!');
		up.scrollIntoView();
	}
	
	var options = {
		rootMargin: '0px',
  		threshold: 0.1
		}	
	var callback = function(entries, observer){ 
  	entries.forEach(entry => {
	  if(entry.isIntersecting){
		  inform()
	  }
 });
};
	var observer = new IntersectionObserver(callback, options);
	var target = document.querySelector('#listItem');
	observer.observe(target);
/*
	
	var elem1 = document.getElementById('uuu');
		console.log(elem1);
		
	
	function yy(){
		console.log(999);
		alert(999998);
		console.log(elem1);
		return elem1.scrollIntoView();
	};
	
	
	function rollPage(entries, observer){
		entries.forEach(function(entry){
		console.log(77);
			console.log(entries);
			if (entry.isIntersecting){
			 		console.log(7007);
					return yy();

		 }
	});
		
		
		 
	};
	
	var options = {
		rootMargin: '0px',
  		threshold: 0.1
		};
	var observer = new IntersectionObserver(rollPage, options);
	
	var section = document.querySelectorAll('.section');
	
	console.log(section);
	
	section.forEach(function(item){
		console.log(item);
		observer.observe(item);
	});*/
	
	//МЕНЮ БУСИНЫ
	function menuPointClick() {
		alert('');
	}
	
	let menuPointCollection = document.querySelectorAll('.menuPoint');
	let arrMenuPointCollection = Array.from(menuPointCollection);
	let rightMenu = document.querySelector('#rightMenu');
	let menuLineCollection = document.querySelectorAll('.menuLine');
	let arrMenuLineCollection = Array.from(menuLineCollection);
	
	let menuPointSelected;
	let menuText = document.querySelector('.menuText');
	let upLine;
	let downLine;

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
		console.log(coordsMenuPoint.y);
		console.log(coordsMenuPoint);
		
		let p = document.createElement('p');
		p.className = "menuText";
		p.textContent = 'menuContent';
		console.log(p);
		
		menuText.style.top = (coordsMenuPoint.y - 12) + 'px';
		let menuContent = event.target.dataset.namemenu;
		menuText.textContent = menuContent;
		menuText.classList.add('menuTextMove');
		
	} 
	

	
});
	
	
rightMenu.addEventListener("mouseout", function() { 
	let menuClassName = event.target.className;
	if(menuClassName == 'menuPoint__inside'){
		arrMenuPointCollection[menuPointSelected].classList.remove('menuPointMove');
		upLine.classList.remove('moveLine');
		downLine.classList.remove('moveLine');
		menuText.classList.remove('menuTextMove');
			/*
	upLineIndex = false;
	downLineIndex = false; */
	}

});	
};

