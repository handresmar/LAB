(function(){
	var btnAddSp = document.getElementById('add'),
		btnPuAdd = document.getElementById('puAdd'), 
		overlay = document.getElementById('overlay'),
		btnClPu = document.getElementById('puBtnCer');
	
	var tabla = document.getElementsById('sampList'),
		sp = document.createElement("tr"),
		spCod=document.createElement("td"),
		spTip=document.createElement("td"),
		spDes=document.createElement("td"),
		spCant=document.createElement("td");

	btnAddSp.addEventListener('click', function(){
		overlay.classList.add('active');
	});
	btnClPu.addEventListener('click', function(){
		overlay.classList.remove('active');
	});

	btnClPu.addEventListener('click', addtabla());


	function addtabla(){
		

	}


})();	
/*
(function(){
})();
*/