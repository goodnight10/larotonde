$(function(){

     /**
 * 검색창 여닫기
 *
 * @version 1.0.0
 * @since 2022-06-27
 * @author jy
 */
    $('.header .link-search').click(function(e){
        e.preventDefault();
        $('.search-pop').toggleClass('active');
        $('.link-search').toggleClass('active');
        $('.link-menu').toggleClass('active');
    })

     /**
 * 메뉴링크 여닫기
 *
 * @version 1.0.0
 * @since 2022-06-27
 * @author jy
 */
    $('.header .link-menu').click(function(e){
        e.preventDefault();
        $('.menu-pop').toggleClass('active');
        $('.link-search').toggleClass('active');
        $('.link-menu').toggleClass('active');
    })

     /**
 * 마우스 올리면 나타나기
 *
 * @version 1.0.0
 * @since 2022-06-29
 * @author jy
 */

    $('.camera').hover(function(){
        $('figcaption').addClass('active');
    }, function () {
        $('figcaption').removeClass('active');
    })


    var swiper = new Swiper(".main-slide", {
        slidesPerView:3,
        // spaceBetween:-500,
        // centeredSlides:true,
        // loop:true,
        resistance : false,
        navigation: {
            nextEl: ".main-slide .next",
            prevEl: ".main-slide .prev",
            
        },
        
    });

})