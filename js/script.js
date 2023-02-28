
var loading = $("#js-loading");
$(window).on("load", function () {
    var windowHeight = $(window).height();
    $("mv-height").height(windowHeight);
    loading.delay("1000").fadeOut("2000");
});

setTimeout(function () {
    loading.fadeOut("3000");
}, 8000);


$(window).on('load resize', function () {
    var window_height = window.innerHeight ? window.innerHeight : $(window).innerHeight();
    var window_width = window.innerWidth ? window.innerWidth : $(window).width();
    if (window_width <= 768) {
        $('.mv-height').css('height', window_height + 'px');
    } else {
        $('.mv-height').css('height', '100vh');
    }
});


var audio = $("#js-audio").get(0);
var isPlaying = false;
audio.volume = 0.5;

$('#js-audio-play').click(function () {
    if ($('.audio-txt').text() == 'SOUND OFF') {
        audio.play();
        $('.audio-txt').text('SOUND ON');
        $('#js-audio-play').addClass('on');
    }
    else {
        console.log($('.audio-txt').text())
        audio.pause();
        $('.audio-txt').text('SOUND OFF');
        $('#js-audio-play').removeClass('on');
    }
})

// $(".sp-play").hide();
$(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 767;
    if (winW <= devW) {
        //767px以下の時の処理
        $spCTA = $(".sp-play");
        $spCTA.hide();
        $spCTA.removeClass('none')
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1000) {
                $spCTA.fadeIn();
            } else {
                $spCTA.fadeOut();
            }
        });
        $spCTA.on("click", function () {
            $("body,html").animate({ scrollTop: 0 }, 300);
            return false;
        });
    }
    else {
        $spCTA = $(".sp-play");
        $spCTA.addClass('none')
    }
});