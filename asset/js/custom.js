$(function () {



    //구성용
    //item ->el, item, tag,나 자신의 이름을 다 바꿀수 있음
    $('.visual-item').each(function (index, item) {
        idx = $(this).data('index');
        $(this).css({left: 200 * index,'z-index':idx})
    })

    // let idx=0;
    $('.visual-item').click(function () {
        idx = $(this).index();
        // console.log(idx);

        // itemCnt=$('.visual-list . visual-item').length;
        // $(this).css();
        $(this).addClass('active').siblings().removeClass('active');

        //eq 선택 ,idx순서 가져올때 사용  
        item = $('.desc-wrap').eq(idx).find('.hide-el')

        const all=gsap.to('.desc-wrap .hide-el', {y:'110%',paused: true,opacity:0})
        const motion = gsap.to(item, {delay:0.5, y: 0,stagger: 0.1,paused: true,opacity:1})
        all.play()
        motion.play()
    })
    $('.visual-item').eq(0).trigger('click')
    //강제 첫 실행


    /**
     * 검색창 여닫기
     *
     * @version 1.0.0
     * @since 2022-06-27
     * @author jy
     */
    // $('.header .link-search').click(function (e) {
    //     e.preventDefault();
    //     $('.search-pop').toggleClass('active');
    //     $('.link-search').toggleClass('active');
    //     $('.link-menu').toggleClass('active');
    //     if ($('.menu-pop').hasClass('active')) {
    //         $('.menu-pop').removeClass('active')
    //         menu.reverse()
    //     } else {
    //         $('.menu-pop').addClass('active')
    //         menu.play()
    //     }


    // })

    // menu = gsap.to('.header .menu-pop',{
    //     opacity:1,
    //     display:'block',
    //     paused:true
    // })

    /**
     * 메뉴링크 여닫기
     *
     * @version 1.0.0
     * @since 2022-06-27
     * @author jy
     */
    $('.header .link-menu').click(function (e) {
        e.preventDefault();
        $('.link-search').toggleClass('active');
        $('.link-menu').toggleClass('active');

        if ($('.menu-pop').hasClass('active')) {
            $('.menu-pop').removeClass('active')
            menu.reverse()
        } else {
            $('.menu-pop').addClass('active')
            menu.play()
        }


    })

    menu = gsap.to('.header .menu-pop',{
        opacity:1,
        display:'block',
        paused:true
    })


    /**
     * 마우스 올리면 나타나기
     *
     * @version 1.0.0
     * @since 2022-06-29
     * @author jy
     */

    $('.camera').hover(function () {
        $('figcaption').addClass('active');
    }, function () {
        $('figcaption').removeClass('active');
    })


    // var swiper = new Swiper(".main-slide", {
    //     slidesPerView:3,
    //     // spaceBetween:-500,
    //     // centeredSlides:true,
    //     // loop:true,
    //     resistance : false,
    //     navigation: {
    //         nextEl: ".main-slide .next",
    //         prevEl: ".main-slide .prev",

    //     },

    // });
    //gsap.from~전
    //gsap.to~후
    //gsap.fromTo전과 후 둘다
    
    about =gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-season',
            start:"0% 80%",//트리거기준 0%위치, 윈도우기준0%
            end:"100% 80%",
            markers:true,
            scrub:1,
        }
    })

    //동시에 시행되도록 묶어줌
    about.addLabel('motion1')
    
    .from('.season-area>*',{
        y:10,
        opacity:0,
        stagger:0.3
    },'motion1')
    
    .from('.sc-season .season-img',{
        opacity:0,
        rotation:0,
        y:100,
    },'motion1')



})