$(document).ready(function() {
    /* dropdown position */
    $(document)
        .on('click mouseover', '.menu-item', function(e) {
            if($(e.target).is('.dropdown-menu-item, .navbar-toggler')) {
                return false;
            }
            if(!$('#top-menu').hasClass('show')) {
                $('.menu-item.active').removeClass('active'), $(this).addClass('active');
                var wW = $(window).width();
                var dropdown = $(this).find('.dropdown-menu');
                if (dropdown.length > 0) {
                    var w = dropdown.width();
                    var left = $(this).offset().left;
                    if (left + w > wW)
                        dropdown.css('right', '0'), dropdown.css('left', 'auto');
                    else
                        dropdown.css('right', ''), dropdown.css('left', '0');
                    $('.dropdown-menu', this).stop(true, true).slideDown(200);
                }
            }else{
                //if($(this).hasClass('active')) $(this).removeClass('active'); else $(this).addClass('active');
                $('.menu-item.active').removeClass('active');
                $(this).addClass('active');
                $('.dropdown-menu', this).stop(true, true).slideToggle(200);
            }
        })
        .on('mouseleave', '.menu-item', function() {
            if(!$('#top-menu').hasClass('show')) {
                $(this).removeClass('active');
                $('.dropdown-menu', this).stop(true, true).slideUp(200);
            }
        })
    ;
    $('.special-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '<button type="button" class="slick-next"><span class="icon-nav-slider-special"></span></button>',
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-nav-slider-special"></span></button>',
        responsive: [
            // {
            //     breakpoint: 1210,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: false
            //     }
            // },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});