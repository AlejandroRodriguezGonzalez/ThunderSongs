$(document).ready(function(){
  
  //Esto permite que desde el inicio el navegador se mantenga proporcional a el header
  navFixed();

  function navFixed() {
    //Media queries para que el navegador no supere el header
    if(($(window).innerWidth() >1083)){ //1083px es mas exacto
      $("nav").css({
        "position":"fixed",
        "top": ($("header").height()+12) + "px",
        "left":  (($(window).innerWidth()*0.02)-15)+"px",
      });
      $(".toggleNav").css({
        "position":"fixed",
        "top": ($("header").height()+($(window).innerWidth()*0.01)+20) + "px",    //Proporcional a la ventana y a la altura del header
        "left":  ($(window).innerWidth()*0.028)+"px",
      });
    }
    //Distinta disposicion en otros dispositivos, el navegador comienza desaparecido
    else{
      $("nav").css({
      "position":"fixed",
      "top": ($(window).innerWidth()*0.006)+"px",
      "left": ($(window).innerWidth()*0.006)+"px",
      });
      $(".toggleNav").css({
        "position":"fixed",
        "top": ($(window).innerWidth()*0.02)+5+"px",
        "left": ($(window).innerWidth()*0.02)+5+"px",
      });
      $("nav").fadeOut(0);
    }
  }

  $( window ).resize(function() {
      navFixed();
  });

  $(".toggleNav").click(function(){
      $("nav").fadeToggle();
  });

    
  $(window).scroll(function(){
      //aplicamos la funcion fixed al scroll
      navFixed();
      //zoom de imagenes con scroll
      if(($(window).innerWidth() >1083)){
          $(".product").css({
            "align-self": "center",
            "width": 78+$(window).scrollTop()*0.05+"%",
          });
        //Para que desaparezca si se hace scroll
        $("nav").fadeOut(300);

      }
      else{
        $(".product").css({
          "align-self": "center",
          "width": 50+$(window).scrollTop()*0.05+"%",
        });

      }
  });

  //Animaciones

  //Ajustar y dinamizar
  $( "li" )
    .mouseover(function(e) {
      $(this).css({
        "background-color": "#612C63",
      });

      $(this).stop(true).animate({
        fontSize: '1.1em'
      
      }, 150);

    $(this).mouseout(function(e) {
          $(this ).css({
            "background-color": "",
          });
          $(this).stop(true).animate({
            fontSize: '1em'
          }, 150);
    });
  });


});

