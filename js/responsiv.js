$(function (){
   $('body > header .nav_bar .nav_bar_item').mouseover(function (){
      $('body > header .nav_bar .nav_bar_item > div > .mega_menu:visible').hide();
      $('body > header .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
      
      
      $(this).find('> div > .mega_menu').show();
      $(this).find('> div > .sub_menu').show();
   });
   $('body > header .nav_bar .nav_bar_item .sub_menu .sub_menu_item').mouseover(function (){
       $('body > header .nav_bar .nav_bar_item .sub_menu .sub_menu_item > div > .sub_menu:visible').
                hide();
       $(this).find('> div > .sub_menu').show();
   });
   
   $('body > header .mobile_nav_bar_icon').click(function (){
       $('#nav_bar_backgroud_effect').show();
       $('body > header .nav_bar').css('left','200px');
       $('body > header .nav_bar').show();
       $( "body > header .nav_bar" ).animate({
            left: '0'
        }, 200);
   });
   
   $('body > header .nav_bar > div > header img').click(function (){
       $('body > header .nav_bar').fadeOut("slow",function (){
          $('#nav_bar_backgroud_effect').hide(); 
       });
   });
   
   $('body > header .nav_bar .nav_bar_item .mobile_close img').click(function (){
       $(this).parent().parent().parent().hide(); 
   });
});