$(document).ready(function () {
  
  const serviceNames = [
    'ASSETS & PROPS',
    '3D CHARACTERS',
	  'NFT COLLECTIONS',
	  '3D LOCATIONS',
	  '3D ANIMATIONS',
	  'GAME PLAY TRAILERS'
  ]

  // $("#service-1").modal({
  //   fadeDuration: 500
  // });

  const heightForChange = 200;

  $(document).on( "scroll", function() {

    const heightNow = window.scrollY;
    const opacity = Math.min(heightNow/heightForChange, 1);

    $('#header-bg').css({"opacity": `${opacity}`});
    $('#header-container').css({"padding": `${25 - (10*opacity)}px 40px`});
    $('#navbar-img').css({"width": `${90 - (20*opacity)}px`});

    
    // $('#header-bg').css({"opacity": "0.5"});

    // const box = document.getBoundingClientRect();

    // return {
    //   top: box.top + pageYOffset,
    //   left: box.left + pageXOffset
    // };

    console.log(opacity)
  } );
  


});
