//Función para el menú desplegable
$(document).ready(function() {
	$('.dropdown-button').dropdown();
	$('.button-collapse').sideNav();
});

  $(function(){
    $('li[class^="type-"]').mouseover(function(){
      var currentClass = $(this).attr('class').split(' ')[0];
      if(currentClass != 'empty'){
      	$('.main > li').addClass('deactivate');
      	$('.' + currentClass).removeClass('deactivate');
      }
    });
   
   $('li[class^="cat-"]').mouseover(function(){
      var currentClass = $(this).attr('class').split(' ')[0];
      	$('.main > li').addClass('deactivate');
      	$('.' + currentClass).removeClass('deactivate');
    }); 
    
    $('.main > li').mouseout(function(){
      var currentClass = $(this).attr('class').split(' ')[0];
       $('.main > li').removeClass('deactivate');
    }); 
 
}); 

$(#modal1).on('click',function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

  function MakeBold() {
    document.execCommand('bold', null, false);
}     