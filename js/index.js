var options= ['Frenos','Alineacion','Suspención','Mecanica ligera','Tren delantero y trasero','Balanceo','Gomeria','Aire acondicionado','Verificación computalizada'];

$(document).ready(function(){

	var select= $('#revisar');

	for( var i=0; i<options.length; i++){
		value=i+1;
		var option= '<option value="'+ value +'">'+options[i]+'</option>';
		select.append(option);
	}

	$('.img_peque').on('click', function(){

	imagen=$(this).data('img');
	alt=$(this).data('titulo');
	url='./img'+ imagen;
	$('#img_grande').attr('src', url);
	$('#grande').show();
    });

    $('#salirmod').on('click', function(){
    	$('#grande').hide();

    });

    $('.menu').on('click',function(e){
    	
    	e.preventDefault();
    	var link= $(this).attr('href');
    	$('html, body' ).animate({
    	scrollTop:$(link).offset().top
    	}, 1000);

        });

    $('#oil').on('mouseenter',function(){

    	ima=$(this).data('img');
    	urll='./img'+ima;
    	$('#oil').attr('src',urll);

    });

    $('#oil').on('mouseleave',function(){
    	ima=$(this).data('volver');
    	urll='./img'+ima;
    	$('#oil').attr('src',urll)

    })
});





	