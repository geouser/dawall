// Global parameters
window.params = {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};


/**
     *
     * Check if element exist on page
     *
     * @param el {string} jQuery object (#popup)
     *
     * @return {bool}
     *
*/
function exist(el){
    if ( $(el).length > 0 ) {
        return true;
    } else {
        return false;
    }
}


jQuery(document).ready(function($) {

    /*---------------------------
                                  Fullpage
    ---------------------------*/
    $('#fullpage').fullpage({
        lockAnchors: true,
        sectionSelector: '.fp-section',
        slideSelector: '.fp-slide',
        responsiveWidth: 1200,
    });


    /*---------------------------
                                  Custom scroll-bar
    ---------------------------*/
    if ( exist('.scroll') ) {
        $('.scroll').mCustomScrollbar({
            axis: 'y'
        });

        $(window).on('resize', function(event) {
            event.preventDefault();
            $('.scroll').mCustomScrollbar("update");
        });
    }


    /*---------------------------
                                  ADD CLASS ON SCROLL
    ---------------------------*/
    $(function() { 
        var $document = $(document),
            $element = $('.menu-button'),
            $element2 = $('header'),
            className = 'hasScrolled';

        $document.scroll(function() {
            $element.toggleClass(className, $document.scrollTop() >= 1);
            $element2.toggleClass(className, $document.scrollTop() >= 1);
        });
    });
    
    /*---------------------------
                                PAGE ANCHORS
    ---------------------------*/
    $('.mainNav a, .anchor').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 800);
        return false;
    });

    /*---------------------------
                                ACTIVATE MENU ITEM OVER CURRENT SECTION
    ---------------------------*/
    /*var $sections = $('section');
    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        var $currentSection;
        var windowHalf = $(window).height() / 2;
        
        $sections.each(function(){
          var divPosition = $(this).offset().top - windowHalf;
          
          if( divPosition - 1 < currentScroll ){
            $currentSection = $(this);
          }
        var id = $currentSection.attr('id');
          $('a').removeClass('active');
          $("[href=#"+id+"]").addClass('active');
        })
    });*/

    /*---------------------------
                                  MENU TOGGLE
    ---------------------------*/
    $('.menu-button').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('header').toggleClass('active');
        if ($('header').hasClass('active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');
            }
    });



    /*---------------------------
                                  Magnific popup
    ---------------------------*/
    $('.magnific').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',
        modal: false,

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    $('.projects-slider').each(function(index, el) {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            fixedContentPos: false,
            fixedBgPos: true,
            closeBtnInside: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            }
        })
    });



    /*---------------------------
                                  Sliders
    ---------------------------*/
    $('.offer--slider').slick({
        fade: true,
        arrows: false,
        dots: true,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });

    $('.partners-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        easing: 'ease',
        pauseOnHover: true,
        pauseOnFocus: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.patterns--slider').on('init', function(event, slick) {
        event.preventDefault();
        $(this).addClass('visible')
    });
    $('.patterns--slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        easing: 'ease',
        pauseOnHover: true,
        pauseOnFocus: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })


    $('.projects-slider').on('init', function(event, slick) {
        event.preventDefault();
        $(this).addClass('visible')
    });
    $('.projects-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    /*---------------------------
                                  Tabs
    ---------------------------*/
    if ( exist('.tabs') ) {
        $('.tabs').tabs({
            activate: function( event, ui ) {
                ui.newPanel.find('.slick-slider').slick('setPosition');
            }
        });
    }


    /*----------------------------
                              SEND FORM
    -------------------------*/
    /**
     *
     * Open popup
     *
     * @param popup {String} jQuery object (#popup)
     *
     * @return n/a
     *
    */
    function openPopup(popup){
        $.magnificPopup.open({
            items: {
              src: popup
            },
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            modal: false,
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        }, 0);
    }

    $('.form').on('submit', function(event) {
        event.preventDefault();
        var data = new FormData(this);
        $(this).find('button').prop('disabled', true);
        $.ajax({
            url: theme.url + '/forms.php',
            type: 'POST',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            success: function(result) {
                if (result.status == 'ok') {
                    openPopup('#modal-popup-ok')
                } else {
                    openPopup('#modal-popup-error')
                }
            },
            error: function(result) {
                openPopup('#modal-popup-error');
            }
        }).always(function() {
            $('form').each(function(index, el) {
                $(this)[0].reset();
                $(this).find('button').prop('disabled', false);
            });
        });
    });



    /*Google map init*/
    var map;
    function googleMap_initialize() {
        var lat = $('#map_canvas').data('lat');
        var long = $('#map_canvas').data('lng');

        var mapCenterCoord = new google.maps.LatLng(lat, long+0.002);
        var mapMarkerCoord = new google.maps.LatLng(lat, long);
        if ( $(window).width() <= 1000 ) {
            mapCenterCoord = new google.maps.LatLng(lat, long);
            mapMarkerCoord = new google.maps.LatLng(lat, long);
        }
        $(window).resize(function(event) {
            if ( $(window).width() <= 1000 ) {
                mapCenterCoord = new google.maps.LatLng(lat, long);
                mapMarkerCoord = new google.maps.LatLng(lat, long);
            } else {
                mapCenterCoord = new google.maps.LatLng(lat, long+0.002);
                mapMarkerCoord = new google.maps.LatLng(lat, long);
            }
        });

        var mapOptions = {
            center: mapCenterCoord,
            zoom: 17,
            //draggable: false,
            disableDefaultUI: true,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        var markerImage = new google.maps.MarkerImage('images/location.png');
        var marker = new google.maps.Marker({
            icon: markerImage,
            position: mapMarkerCoord, 
            map: map,
            title:"Чисто Строй"
        });
        
        $(window).resize(function (){
            map.setCenter(mapCenterCoord);
        });
    }

    if ( exist( '#map_canvas' ) ) {
        googleMap_initialize();
    }

}); // end file