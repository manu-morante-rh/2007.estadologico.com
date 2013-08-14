// JavaScript Document

		function galeria(){
			url=prompt('Escribe la URL','http://');
			num=prompt('�Cuantas fotos?','50');
			num0=prompt('N�mero de ceros','3');
			pre=prompt('�Prefijo?','');
			tipo=prompt('�JPG, GIF, PNG, ...?','jpg');
			inicio=prompt('N�mero inicial','1');
			for (var i=1;i<=num;i++) {
				largo = "" + i;
				ceros='';
				for (var n=0;n<num0-largo.length;n++) {
					ceros+='0';
				}
				document.write("<img src="+url+"/"+pre+ceros+i+"."+tipo+">")
			}
		}


		function win(theURL,winName,ancho,alto,barras) {
			var winl = (screen.width - ancho) / 2;
			var wint = (screen.height - alto) / 2;
			var paramet='top='+wint+',left='+winl+',width='+ancho+',height='+alto+',scrollbars='+barras+'';
			var splashWin=window.open(theURL,winName,paramet);
			splashWin.focus();
		}

		function imagen(ruta,ancho,alto,barras){
			win("/varios/imagen.asp?url="+ruta,"Imagen",ancho,alto,barras);
		}
		
		function popc(a){
			var enlace = a.getAttribute("href");
			var nombre = a.getAttribute("nombre");
			var ancho = a.getAttribute("ancho");
			var alto = a.getAttribute("alto");
			var barras = a.getAttribute("barras");
			if(isNaN(ancho)) ancho = 300;
			if(isNaN(alto)) alto = 250;
			if(isNaN(barras)) barras = 0;
			win(enlace,nombre,ancho,alto,barras);
		}

		function imgc(a){
			var enlace = a.getAttribute("href");
			var nombre = a.getAttribute("nombre");
			var ancho = a.getAttribute("ancho");
			var alto = a.getAttribute("alto");
			var barras = a.getAttribute("barras");
			if(isNaN(ancho)) ancho = 300;
			if(isNaN(alto)) alto = 250;
			if(isNaN(barras)) barras = 0;
			enlace = "/Img/?url="+ enlace
			win(enlace,nombre,ancho,alto,barras);
		}

		function noEnFrames() {
			if(self.location != top.location) {
				top.location = self.location;
			}
		}

		// Gracias: Marc Palau www.palaueb.com
		try{
			void noEnFrames();
		}catch(unerror){}
