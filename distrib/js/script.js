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



    // ACCORDEON

    $('.js-accordeon-controls').click(function() {

        // подсвечиваем открытый аккордеон
        if ( $(this).parent().hasClass('opened') ) {
            $(this).parent().removeClass('opened');
            $(this).parent().children('.accordeon-item__content').slideUp(300);
        }
        else {
            $(this).parent().addClass('opened');
            $(this).parent().children('.accordeon-item__content').slideDown(300);
        }
    });




    // показ сообщения о добавлении заказа в избранное
    function showFavAddMessage() {
        if ($('#order-removed').hasClass('order-fav-message_active')) {
            $('#order-removed').removeClass('order-fav-message_active');
        }
        $('#order-added').addClass('order-fav-message_active');
        setTimeout(function() {$('#order-added').removeClass('order-fav-message_active')}, 1500);
    }

    function showFavRemoveMessage() {
        if ($('#order-added').hasClass('order-fav-message_active')) {
            $('#order-added').removeClass('order-fav-message_active');
        }
        $('#order-removed').addClass('order-fav-message_active');
        setTimeout(function() {$('#order-removed').removeClass('order-fav-message_active')}, 1500);                
    }


    $('.js-fav-add').click(function() {

        // добавляем
        if ( $(this).hasClass('add') ) {
            $(this).removeClass('add').addClass('btn_star-delete');
            $(this).parent().parent().parent().addClass('order-history_fav');
            $(this).html('Удалить из избранных заказов');
            showFavAddMessage();

        // удаляем
        } else {
            $(this).addClass('add').removeClass('btn_star-delete');
            $(this).parent().parent().parent().removeClass('order-history_fav');
            $(this).html('Добавить в избранные заказы');
            showFavRemoveMessage();
        }
    });



    // product zoom

    // js-open-product-zoom
    function showProductZoom() {
        let isOpened = $('.product-zoom').hasClass('product-zoom_opened');
        if( !isOpened ) {
            $('.product-zoom, .overlay').fadeIn(200).addClass('product-zoom_opened');
            console.log('open');
        } else {
            $('.product-zoom, .overlay').fadeOut(200).removeClass('product-zoom_opened');
            console.log('close');
        }
    }

    $('.js-open-product-zoom').click(showProductZoom);
});