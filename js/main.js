(function(){
	var btnAddSp = document.getElementById('add'), 
		overlay = document.getElementById('overlay'),
		btnClPu = document.getElementById('puBtnCer');

	btnAddSp.addEventListener('click', function(){
		overlay.classList.add('active');
	});
	btnClPu.addEventListener('click', function(){
		overlay.classList.remove('active');
	});


})();	
/*
(function(){
})();
*/