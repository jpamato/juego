var app = (function(){



	var elecciones = {};

	var eleccion = {};

	var preguntas = {};

	var pregCount=0;

	var id=0;

	var animando=false;

	var w=0;
	var h=0;
	var iniPadH=0.2;
	var tarjeH100=0;
	var tarjeFactor = 0.45; 
	var tarjePadF = 0.05;
	var punSize=0;
	var factorDot=1.5;

	var optSize=0.18;

	var sobreFondoH=0;
	var sobreFreDiff=50;	

	var sigW=0.6;
	var sHF=0.234;

	//reemplazar carateres por html ascii codes
	/*function getCleanText(some_text) {
		var clean_text = some_text;
		clean_text = clean_text.replace("¿", "&#191;"); 

		clean_text = clean_text.replace("Á", "&#193;"); 
		clean_text = clean_text.replace("É", "&#201;"); 
		clean_text = clean_text.replace("Í", "&#205;"); 
		clean_text = clean_text.replace("Ó", "&#211;"); 
		clean_text = clean_text.replace("Ú", "&#218;"); 

		clean_text = clean_text.replace("á", "&#225;"); 
		clean_text = clean_text.replace("é", "&#233;"); 
		clean_text = clean_text.replace("í", "&#237;"); 
		clean_text = clean_text.replace("ó", "&#243;"); 
		clean_text = clean_text.replace("ú", "&#250;"); 

		clean_text = clean_text.replace("Ñ", "&#209;"); 
		clean_text = clean_text.replace("ñ", "&#241;"); 

		return clean_text;
	}*/

	function nextQuest(id){		
		// Escribe el texto de la siguiente pregunta
		$(".tPreg").html(preguntas["Texto"][pregCount]);


		// #Animación de aparición de las opciones de voto
		$( "#vSi" ).tween({
			rotate:{
				start: 0,
				stop: 355,
				time: 0,
				duration: 2,
				effect:'easeInOut'
			},
			width:{
				start: 1,
				stop: h*tarjeH100,
				time: 0,
				units: 'px',
				duration: 2,
				effect:'easeInOut'
			},
			height:{
				start: 1,
				stop: h*tarjeH100*0.9,
				time: 0,
				units: 'px',
				duration: 2,
				effect:'easeInOut'
			}
		});

		$( "#vNo" ).tween({
		//$( ".voto" ).tween({
			rotate:{
				start: 0,
				stop: 365,
				time: 0,
				duration: 2,
				effect:'easeInOut'
			},
			width:{
				start: 1,
				stop: h*tarjeH100,
				time: 0,
				units: 'px',
				duration: 2,
				effect:'easeInOut'
			},
			height:{
				start: 1,
				stop: h*tarjeH100*0.9,
				time: 0,
				units: 'px',
				duration: 2,
				effect:'easeInOut'
			},
			onStop: function( element ){
				//$(".masOp").show();				
				//$(".nElec").show();
			}

		});		
		//#Anima los puntos que muestran por qué pregunta vas
		var pun = "#p"+pregCount;
		$( pun ).tween({
			width:{
				start: punSize,
				stop: punSize*factorDot,
				time: 0,
				units: 'px',
				duration: 1,
				effect:'easeInOut'
			},
			height:{
				start: punSize,
				stop: punSize*factorDot,
				time: 0,
				units: 'px',
				duration: 1,
				effect:'easeInOut'
			},
			borderRadius:{
				start: punSize,
				stop: punSize*factorDot,
				time: 0,
				units: 'px',
				duration: 1,
				effect:'easeInOut'
			},				
			backgroundColor:{
				start: '#000',
				stop: '#20a685',
				time: 0,
				duration: 1,
				effect:'easeInOut'
			},
			/*marginTop:{
			  start: punSize*0.25,
			  stop:0,
			  time: 0,
			  units: 'px',
			  duration: 1,
			  effect:'easeInOut'
			  },
			  marginBottom:{
			  start: punSize*0.25,
			  stop:0,
			  time: 0,
			  units: 'px',
			  duration: 1,
			  effect:'easeInOut'
			  }*/
		});			

		if(pregCount>0){
			pun = "#p"+(pregCount-1);
			$( pun ).tween({
				width:{
					start: punSize*factorDot,
					stop: punSize,
					time: 0,
					units: 'px',
					duration: 1,
					effect:'easeInOut'
				},
				height:{
					start: punSize*factorDot,
					stop: punSize,
					time: 0,
					units: 'px',
					duration: 1,
					effect:'easeInOut'
				},
				borderRadius:{
					start: punSize*factorDot,
					stop: punSize,
					time: 0,
					units: 'px',
					duration: 1,
					effect:'easeInOut'
				},
				/*marginTop:{
				  start: 0,
				  stop: punSize*0.25,
				  time: 0,
				  units: 'px',
				  duration: 1,
				  effect:'easeInOut'
				  },
				  marginBottom:{
				  start:0,
				  stop: punSize*0.25,
				  time: 0,
				  units: 'px',
				  duration: 1,
				  effect:'easeInOut'
				  }*/
			});					
		}
		$.play();	
	};


	// #Animación muestra el resultado a partir del voto elegido
	function pregResult(){
					
	}

	return {//funcion de inicio de la aplicación
		init : function(){

			w = $(window).width();
			h = $(window).height()-$(".navbar").height();

			$("#game").css("top",$(".navbar").height()+"px");
			$("#game").css("width",w+"px");
			$("#game").css("height",h+"px");

			$("#inicio").css("padding-top",h*iniPadH+"px");
			$("#inicio").css("padding-bottom",h*iniPadH+"px");;
			$("#tarjeta1").css("padding-top",h*tarjePadF+"px");
			$("#tarjeta2").css("padding-top",h*tarjePadF+"px");

			// Listener por resize de la ventana
			window.addEventListener("resize", function() {
				// Get screen size (inner/outerWidth, inner/outerHeight)
				w = $(window).width();
				h = $(window).height()-$(".navbar").height();

				$("#game").css("top",$(".navbar").height()+"px");
				$("#game").css("width",w+"px");
				console.log(w);
				$("#game").css("height",h+"px");
				$("#inicio").css("padding-top",h*iniPadH+"px");
				$("#inicio").css("padding-bottom",h*iniPadH+"px");

				tarjeH100 = tarjeFactor*parseFloat($("#tarjeta1").css("height"))/h;
				$("#tarjeta1").css("padding-top",h*tarjePadF);
				$("#tarjeta2").css("padding-top",h*tarjePadF);

				//console.log(w);
				$( "#vSi" ).css("width",(tarjeH100*h)+"px");
				$( "#vSi" ).css("height",(tarjeH100*h*0.9)+"px");
				$( "#vNo" ).css("width",(tarjeH100*h)+"px");
				$( "#vNo" ).css("height",(tarjeH100*h*0.9)+"px");
				$( ".masOp" ).css("width",(optSize*h)+"px");
				$( ".masOp" ).css("height",(optSize*h)+"px");
				$( ".masOp" ).css("left",(w*0.5)-((optSize*h)*0.5)+"px");
				//$( ".tPreg" ).css("font-size",w*0.003+"em");
				//$( ".tPreg" ).css("font-size",(1+w*0.0005)+"em")
				$(".dots").css("margin-right",w*0.02+"px");
				

				var sW = parseFloat($(".sobreFrente").css("width"))*sigW;	
				$(".sigue").css("width",sW+"px");
				$(".sigue").css("left",((w*0.5)-(sW*0.5))+"px");
				var sH = sW*sHF;
				$(".sigue").css("height",sH+"px");
				$(".sigue").css("top",(h-sH)+"px");

			}, false);

			punSize = parseFloat($(".dots").css("height"));
			optSize = parseFloat($(".masOp").css("height"))/h;

			tarjeH100 = tarjeFactor*parseFloat($("#tarjeta1").css("height"))/h;
			$( "#vSi" ).css("width",(tarjeH100*h)+"px");
			$( "#vSi" ).css("height",(tarjeH100*h)+"px");
			$( "#vNo" ).css("width",(tarjeH100*h)+"px");
			$( "#vNo" ).css("height",(tarjeH100*h)+"px");

			sobreFondoH = parseFloat($(".sobreFondo").css("top"));
			$(".sobreFrente").css("top",(sobreFondoH+sobreFreDiff)+"px");
			$(".sobreChicos").css("top",(sobreFondoH+sobreFreDiff)+"px");

			
			$( ".masOp" ).css("width",(optSize*h)+"px");
			$( ".masOp" ).css("height",(optSize*h)+"px");
			$( ".masOp" ).css("left",(w*0.5)-((optSize*h)*0.5)+"px");


			var sW = parseFloat($(".sobreFrente").css("width"))*sigW;	
			$(".sigue").css("width",sW+"px");
			$(".sigue").css("left",((w*0.5)-(sW*0.5))+"px");
			var sH = sW*sHF;
			$(".sigue").css("height",sH+"px");
			$(".sigue").css("top",(h-sH)+"px");
			//console.log("App 0 init");
			var inicio = $("#inicio");
			var game = $("#game");

			game.hide();
			$(".sigue").hide();
			$(".masOp").hide();
			$(".sigue").click(function() {
				
				$("#vSi").show();
				$("#vNo").show();
				nextQuest(id);
				$(".sigue").hide();
			});

			//console.log("ACA");
			$.getJSON( "data/yqs.json", function( data ) {
				//console.log(data);
				var options_departments = '';
				$.each(data, function(key,value){				
					options_departments += '<option value="' + value + '"><h4>' + key + '</h4><\/option>';				
				});
				$("select#eleccion").html(options_departments);

				$("select#eleccion").change(function(){
					var index = $(this).get(0).selectedIndex;
					var d = data[index-1];  // -1 because index 0 is for empty 'Select' option
				});

			});

			$( "#eleccion" ).change( function(){
				id=$( "#eleccion" ).val();
				console.log(id);
			});

			$(".bJugar").click(function() {

				console.log("data/yqs"+id+".json");
				$.getJSON( "data/yqs"+id+".json", function( data ) {			
					//console.log(data);
					eleccion = data;
					preguntas = eleccion["Preguntas"];			
					$(".nElec").html(eleccion["Nombre"]);

					console.log(id);
					nextQuest(id);

					inicio.hide();
					game.show();
				});


			}); 

			//$(".vo/to").click(function(event) {

			$("#vSi").click(function() {
				if(!animando){
					animando=true;
					$(".masOp").hide();

					var offset = $("#vSi").offset();
					offset.top = parseFloat($("#tarjeta1").css("padding-top"));

					var offUrna = $(".sobreChicos").offset();

					$("#vSi").css("position","absolute");
					$("#vSi").css("zIndex","2");

					$("#vSi").css("left",offset.left+"px");
					$("#vSi").css("top",offset.top+"px");


					//console.log(event.target);
					///console.log(offset.left)
					//console.log(offset.top);;

					var center =  (($("#game").width())*0.5)-($("#vSi").width()*0.5);

					//$("#vSi").css("position","absolute");
					//console.log(center);
					$( "#vSi" ).tween({
						rotate:{
							start: 0,
						stop: 90,
						time: 0,
						duration: 0.5,
						effect:'easeInOut'
						},
						left:{
							start:offset.left, 
						stop: center,
						time: 0,
						units: 'px',
						duration: 0.5,
						effect:'easeInOut'
						},
						top:{
							start:offset.top, 
						stop: offUrna.top,
						time: 0.5,
						units: 'px',
						duration: 1,
						effect:'easeInOut'
						},


						onStop: function( element ){
							animando=false;
							$("#vSi").css("position","relative");
							$("#vSi").css("top","0px");
							$("#vSi").css("left","0px");							
							$("#vSi").css("zIndex","1");
							$("#vSi").css("width","0px");
							$("#vSi").css("height","0px");
							$("#vNo").css("width","0px");
							$("#vNo").css("height","0px");
							$("#vNo").hide();
							$("#vSi").hide();						

							pregCount++;
							/*$( "#vSi" ).tween({

							  });*/
							//nextQuest(id);
							pregResult();
						}
					});
					$.play();  
				}
			});

			$("#vNo").click(function() {
				if(!animando){
					animando=true;
					$(".masOp").hide();
					var offset = $("#vNo").offset();
					offset.left =parseFloat($("#vNo").css("padding-left"));
					offset.top = parseFloat($("#tarjeta1").css("padding-top"));
					var offUrna = $(".sobreChicos").offset();
					//console.log(offset.top);					
					//console.log(offset.left);

					$("#vNo").css("position","absolute");

					$("#vNo").css("zIndex","2");

					$("#vNo").css("top",offset.top+"px");
					$("#vNo").css("left",offset.left+"px");
					var center =  $("#vNo").css("padding-left")+($("#vNo").width());
					//$("#vNo").css("position","absolute");
					//console.log("C"+center);
					$( "#vNo" ).tween({
						rotate:{
							start: 0,
						stop: -90,
						time: 0,
						duration: 0.5,
						effect:'easeInOut'
						},
						left:{
							start:offset.left, 
						stop: -(offset.left+($("#vNo").width()*0.5)),
						time: 0,
						units: 'px',
						duration: 0.5,
						effect:'easeInOut'
						},

						top:{
							start:offset.top, 
						stop: offUrna.top,
						time: 0.5,
						units: 'px',
						duration: 1,
						effect:'easeInOut'
						},
						onStop: function( element ){
							animando=false
								$("#vNo").css("position","relative");
							$("#vNo").css("top","0px");
							$("#vNo").css("left","0px");
							$("#vNo").css("zIndex","1");
							$("#vSi").css("width","0px");
							$("#vSi").css("height","0px");
							$("#vNo").css("width","0px");
							$("#vNo").css("height","0px");
							$("#vNo").hide();
							$("#vSi").hide();							
							pregCount++;
							//nextQuest(id);
							pregResult();
						}
					});
					$.play();
				}
			});


		},

	stop : function(){

	},

	update : function(){		    

	},
	keyPressed : function(keyCode){
	},

	mousePos : function(mouseX,mouseY){
	}


	};

})();
app.init();

