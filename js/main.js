$(document).ready(function(){
    //header hide
    $(window).scroll(function(event){
        let st = $(this).scrollTop();
        console.log(st)
        if(st>386){
            $('.header').addClass('hide')
            $('.mb-bt').addClass('hide')

        }else{
            $('.header').removeClass('hide')
            $('.mb-bt').removeClass('hide')
        }

    })

 // 헤더 색상 변경
let HeaderHeight = $('.header').outerHeight();
$(window).on('scroll',function(){
    if($(window).scrollTop() >= HeaderHeight){
        $('.header').addClass('active');
    }else{
        $('.header').removeClass('active');
    }
})
   

    //ALL MENU POP-UP
    const all_menu = $('.all-menu')
    const all_menu_wrapper = $('.all-menu-wrapper')
    const all_menu_mask = $('.all-menu-mask')
    const all_menu_close = $('.all-menu-close')
     // all_menu.onclick(function())
    // all_menu.addEventListener(function())
    all_menu.click(function(){
        // all_menu_wrapper.classList.add('클래스명')css에 클래스명을 하나 추가하는 기능이다.... 
        all_menu_wrapper.addClass('all-menu-wrapper-active')
        all_menu_mask.addClass('all-menu-mask-active')
    })
    all_menu_close.click(function(){
        all_menu_wrapper.removeClass('all-menu-wrapper-active')
        all_menu_mask.removeClass('all-menu-mask-active')
    })

          //모바일 메뉴 기능 
        //mb-bt를 저장해서 활용하자 
        $('.mb-bt').click(function(e){
            e.preventDefault();
            $(this).toggleClass('mb-bt-open')
            $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
            $('.mb-nav').toggleClass('mb-nav-open')
            $('.mb-menu>li').height(54)
        })

              //화면사이즈체크
              $(window).resize(function(){
                let temp = $(window).width();
                // console.log(temp)
                if(temp > 1000) {
                    $('.mb-bt').removeClass('mb-bt-open')
                    $('.mb-menu-mask').removeClass('mb-menu-mask-active')
                    $('.mb-nav').removeClass('mb-nav-open')
                }else{
                    $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
                    $('.all-menu-mask').removeClass('all-menu-mask-active')
                }
            })

            //모바일 메뉴 펼치기 기능 
        //1.모바일 메뉴 불러오기 
        const mb_mainmenu = $('.mb-mainmenu')
       
        //2.모바일 서브메뉴 불러오기 
        const mb_submenu = $('.mb-submenu');

        //3. 펼쳐진 서브메뉴의 높이값
        let mb_submenu_height = [];

        //4.높이값 계산을 실행
        // 배열명. forEach(function(item, index){할일})
        // 이거는 foreach이다  둘의 차이점 
        $.each(mb_submenu, function(index){
            //각각의 .mb_submenu로 가서 
            //li의 개수를 파악한다 
            let count = $(this).find('li').length;
            // console.log(count)
            //최종결과저장 (51px*count+22)
            mb_submenu_height[index] = 51*count+22;
        })
    //    console.log(mb_submenu_height);
       let mb_li = $('.mb-menu > li')
    //    console.log(mb_mainmenu)
       $.each(mb_mainmenu,function(index){
           $(this).click(function(e){
               e.preventDefault();
            //    console.log('안녕')
               //mb_mainmenu-open이 있으면 펼치고
               //없으면 닫기 
               $(this).toggleClass('mb-mainmenu-open')
               let active = $(this).hasClass('mb-mainmenu-open')
               if(active){
                   //클릭이된경우
                   //temp는 해당되는(클릭된) li>a(depth1)의 ul의 높이값을 
                   // temp에 저장
                   let temp = mb_submenu_height[index];
                   //해당요소에 높이 부여
                   mb_li.eq(index).height(temp+54)
               }else{
                   //클릭이 안된경우
                   mb_li.eq(index).height(54)
               }
           })
       })

//모바일 메뉴 배경을 클릭시 사라짐 
const mb_menu_mask = $('.mb-menu-mask')
mb_menu_mask.click(function(){
//모바일 버틴 기능 초기화 
$('.mb-bt').removeClass('mb-nav-open')
$('.mb-menu-mask').removeClass('mb-menu-mask-active')
$('.mb-nav').removeClass('mb-nav-open')
$('.mb-menu>li').height(54)
$('.mb-mainmenu').removeClass('mb-mainmenu-open')
})
})




// $(function () {
//     const $window = $(window),
//         header = $('.page-header');
//     //     headerClone = header.contents().clone();
//     // let headerCloneContainer = $
//         headerOffsetTop = header.offset().top;
//         // console.log(headerOffsetTop)
//         $window.scroll(function(){
//             //윈도우 스크롤양이 .page-header의 위치보다 많으면 
//             // .page-header의 포지션을 스티키로 변경하여 고정시킨다.
//             // scrollTop은 스크롤 한 위치이다. 시작은 0
            
//             if($(this).scrollTop() >= headerOffsetTop){
//                 header.addClass('sticky')
//                 header.addClass('visual')
               
//             }else{
//                 header.removeClass('sticky')
//                 header.removeClass('visual')
//             }
//         })
    
//     });
    // $(function () {
    //     const $window = $(window),
    //         header = $('.page-header');
    //         headerOffsetTop = header.offset().top;
    //         $window.scroll(function(){
    //             if($(this).scrollTop()>headerOffsetTop){
    //                 header.addClass('sticky')
    //                 header.addClass('visual')
                   
    //             } else {
    //                     header.removeClass('sticky')
    //                     header.removeClass('visual')
    //                 }
    //         })
        
    //     });


   //검색필드기능
   //검색필드를 보여주는 버튼
   $(document).ready(function(){
   const searchBt = $('.search-bt')
   //검색필드요소
   const searchWrap = $('.search-wrap')
   searchWrap.click(function(e){
       e.stopPropagation();
      
       
       
   })
   searchBt.click(function(event){
       event.preventDefault();
       event.stopPropagation()
       searchWrap.fadeToggle(300)
       //검색버튼 이미지 교체 하기
       let imgName = $(this).find('img').attr('src');
       // console.log(imgName)
       if(imgName == 'images/search-icon.png'){
           $(this).find('img').attr('src','images/close0btn.png')
        //    $(this).css('background','#3d66c4')

       }else{
           $(this).find('img').attr('src','images/search-icon.png')
        //    $(this).css('background','#fff')
       }

   })

   $('body').click(function(){
       searchWrap.fadeOut(300);
       searchBt.find('img').attr('src','images/search-icon.png')
    //    searchBt.css('background','#fff')
       

   })
 });





// 탑버튼영역
$(function () {
    //A.stop().animate(속성,속성값),duration time)
    
    $('.go_top').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({scrollTop:0},600)
    })
});


    // 지금떠나기좋은여행영역
$(function(){
    let mySwiper = new Swiper(".sw-basic", {

        autoplay: true,
        loop:true,
        
        spaceBetween: 40,
        loopFillGroupWithBlank: true,

        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev"
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            
        },
        breakpoints: {
            380: {slidesPerView:1.5},
            670: {
                slidesPerView:2.5
            },
           
            1000: {
                slidesPerView:3
            },
            1300: {
                slidesPerView: 4
            },
        }
         
    });
    })

// 제휴서비스영역
let sw_banner = new Swiper(".sw-banner", {
    // slidesPerView: 4,
    // spaceBetween: 2,
    autoplay: {
        delay:2000,
        disableOnInteraction: false,
     
    },
    loop: true,
    breakpoints: {
        670: {
            slidesPerView:2
        },

        800: {
            slidesPerView:3
        },
        
        840: {
            slidesPerView:3
        },
        950: {
            slidesPerView:3
        },
        900: {
            slidesPerView:3
        },

        1000: {
            slidesPerView: 4
        },
        1300: {
            slidesPerView: 4
        },
    },

     

navigation: {
nextEl: ".banner-forward",
prevEl: ".banner-back"
},
});

const banner_back = $('.banner-back')
const banner_play = $('.banner-play')
const banner_forward = $('.banner-forward')

banner_play.click(function(){
    $(this).toggleClass('banner-play-start');
    let temp = $(this).hasClass('banner-play-start')
    if(temp){
        //슬라이드 작동안함 
        sw_banner.autoplay.stop();
    }else{
       //슬라이드 작동
       sw_banner.autoplay.start();
    }
})
banner_back.click(function(){
    let temp = banner_play.hasClass('banner-play-start')
    if(temp=true){
        banner_play.removeClass('banner-play-start')
        sw_banner.autoplay.start()
    }
    
    }) 

    banner_forward.click(function(){
        let temp = banner_play.hasClass('banner-play-start')
        if(temp=true){
            banner_play.removeClass('banner-play-start')
            sw_banner.autoplay.start()
        }
        
        }) ;


        $(".hover").mouseleave(
            function () {
              $(this).removeClass("hover");
            }
          );


// 모바일슬라이더
        //   let mbbg = new Swiper('.sw-visual', {
        //     // 설정임.
        //     autoplay: true,
        //     slidesPerView: 1,
        //     loop: true,
          
            
        // });

// 취항지모바일
$(function(){
    let mySwiper = new Swiper(".sw-basic-2", {

        autoplay: true,
        loop:true,
        // slidesPerView:2,
        // spaceBetween: 40,

        loopFillGroupWithBlank: true,

        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev"
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,

        
            
        }
         
    });
    })



          