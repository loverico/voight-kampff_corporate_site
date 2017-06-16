


$(function () {

    
    //スムーススクロール
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top; //トップからの高さ
        $("body,html").animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
    //footer表示
    $('footer').css("opacity", "0");

    $(window).scroll(function () {
        var imgPos = $("footer").offset().top;

        var scroll = $(window).scrollTop();

        var windowHeight = $(window).height();
        //        imgPos - windowHeight + windowHeight / 5
        if (scroll > imgPos - windowHeight - (windowHeight * 0.75)) {

            $("footer").css("opacity", "1");
        } else {
            $("footer").css("opacity", "0");
        }



    });

    //グローバルナビスクロール固定
    var gnav = $('nav'),
        offset = gnav.offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top && gnav.css('height') == '70px') {
            gnav.addClass('fixed'); //ナビ部分が70px(スマホ版）の場合固定する。
        } else {
            gnav.removeClass('fixed');
        }
    });


    var topBtn = $('.go_top');
    topBtn.css('bottom', '-500px');
    var showFlag = false;
    //スクロールが800に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({
                    'bottom': '20px'
                }, 200);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({
                    'bottom': '-500px'
                }, 200);
            }
        }
    });

	




});




