(function(){
	var btnAddSp = document.getElementById('add'),
		btnPuAdd = document.getElementById('puAdd'), 
		btnClPu = document.getElementById('puBtnCer'),
		btnpdf = document.getElementById('pdfBtn'),

		overlay = document.getElementById('overlay');
		
	
	var tabla = document.getElementById('sampList');

	var inputCod=document.getElementById('puCod'),
		inputTipo=document.getElementById('puTipo'),
		inputCant=document.getElementById('puCant'),
		inputDesc=document.getElementById('des_pop');

	btnAddSp.addEventListener('click', function(){
		overlay.classList.add('active');
	});
	btnClPu.addEventListener('click', function(){
		overlay.classList.remove('active');
	});

	btnPuAdd.addEventListener('click', comprobar);

	function comprobar(){
			if (inputCod.value==="" || inputTipo.value==="" || inputCant.value==="" || inputDesc.value===""){
				alert('Complete los espacios');
			} else{
				addsmp();
			}
	};

	function addsmp(){
		var cod = document.createTextNode(inputCod.value),
			tipo=document.createTextNode(inputTipo.value),
			cant=document.createTextNode(inputCant.value),
			desc=document.createTextNode(inputDesc.value);

		var sp = document.createElement("tr"),
			spCod=document.createElement("td"),
			spTip=document.createElement("td"),
			spDes=document.createElement("td"),
			spCant=document.createElement("td");

		spCod.appendChild(cod);
		spTip.appendChild(tipo);
		spDes.appendChild(desc);
		spCant.appendChild(cant);
		

		sp.appendChild(spCod);
		sp.appendChild(spTip);
		sp.appendChild(spDes);
		sp.appendChild(spCant);

		sp.classList.add('smp');
		sp.addEventListener('click', delSmpl);

		tabla.appendChild(sp);
		overlay.classList.remove('active');
	};

	function delSmpl(){
		this.parentNode.removeChild(this);
	};

})();	
/*
(function(){
})();
*/