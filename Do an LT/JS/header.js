$(document).ready(function(){
    $('.list-menu-item .fa-bars').click(function(en){
        en.preventDefault()
        $('.list-menu-drop').addClass('show-menu')
        $('.list-drop-menu').toggleClass('show-toggle-menu')
        $('.bg-list').addClass('show-bg');
        $('.body-show').addClass('overflow')
    })
    $('.show-menu .list-drop-menu').slideUp()
    
    $('.list-menu-drop .head-bottom-item:nth-child(1)').click(function(){
        $('.list-menu-drop').removeClass('show-menu')
        $('.bg-list').removeClass('show-bg');
        $('.body-show').removeClass('overflow')
    })
    $('.list-menu-drop >  .head-bottom-item .list-drop-menu').slideUp()
    $('.list-menu-drop >.head-bottom-item .head-bottom-link').click(function(){
        $('.list-menu-drop >  .head-bottom-item .list-drop-menu').slideUp()
        $(this).next().slideToggle()
        $('.body-show').classClass('overflow')
    })
    $('.bg-list').click(function(){
        $('.list-menu-drop').removeClass('show-menu')
        $('.bg-list').removeClass('show-bg');
        $('.body-show').removeClass('overflow')
    })
    $(window).scroll(function(){
        let origin = $('html').scrollTop();
        let _h = $(window).innerHeight();
        console.log('ban dang ở' + origin)
        if(origin >=200) {
            $('.header').addClass('top')
            $('.head-top').addClass('remove-head')
            
          
        }else{
            $('.header').removeClass('top')
            $('.head-top').removeClass('remove-head')
        }
        $.each($('.product .product-item'), function(){
            (origin + _h - _h/4 >= $(this).offset().top)?$(this).addClass('move-top'):null;
        });
        //  if(origin >= 324) {
        //     $('.product .product-item:nth-child(2) ').addClass('move-top')
        // }if(origin >= 890) {
        //     $('.product .product-item:nth-child(4) ').addClass('move-top')
        // }
        // if(origin >= 1855) {
        //     $('.product .product-item:nth-child(6) ').addClass('move-top')
        // }
        // if(origin >= 2860) {
        //     $('.product .product-item:nth-child(8) ').addClass('move-top')
        // }
        // if(origin >= 3690) {
        //     $('.product .product-item:nth-child(10) ').addClass('move-top')
        // }
        
    })
  
})
