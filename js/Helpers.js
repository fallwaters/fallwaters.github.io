jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});


jQuery.extend( jQuery.easing,
{
	easeIn: function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	easeOut: function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	easeInOut: function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	expoin: function(x, t, b, c, d) {
		return jQuery.easing.easeInExpo(x, t, b, c, d);
	},
	expoout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutExpo(x, t, b, c, d);
	},
	expoinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutExpo(x, t, b, c, d);
	},
	bouncein: function(x, t, b, c, d) {
		return jQuery.easing.easeInBounce(x, t, b, c, d);
	},
	bounceout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBounce(x, t, b, c, d);
	},
	bounceinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBounce(x, t, b, c, d);
	},
	elasin: function(x, t, b, c, d) {
		return jQuery.easing.easeInElastic(x, t, b, c, d);
	},
	elasout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutElastic(x, t, b, c, d);
	},
	elasinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutElastic(x, t, b, c, d);
	},
	backin: function(x, t, b, c, d) {
		return jQuery.easing.easeInBack(x, t, b, c, d);
	},
	backout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBack(x, t, b, c, d);
	},
	backinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBack(x, t, b, c, d);
	}
});

var clearInt;



$(document).ready(function () {
    // Плавный скролл к якорям
    $('.accordion').on('click', function (e) {
//    var flag = false;
//    if ($(this).hasClass('active')){
//        flag = true;
//    }
//    $('.accordion').each(function(){
//        if (!flag){
//            $(this).removeClass('active');
//            $(this).next().removeClass('show');
//        }
//    });
        $(this).toggleClass('active1');
        $(this).next().toggleClass('show');
//        flag = false;
    });
    
    var isCleared = false;
    clearInt = setInterval(linkSwitchToNext, 4000);
    
    $('a.link').on('click', linkSwitch);
    
    
    $('a[href$="#top"]').bind('click', function (e){
        $('.left-side-bar .menu ul li').each(function () {
                $(this).removeClass('active');
            });
        e.preventDefault();
        $(document).off('scroll');
        var anchor2 = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({
        scrollTop: anchor2
    }, 700, function() {
            $(document).on('scroll', onScroll);
        });
    e.preventDefault();
    });
    
    
    
    $('.main-part .top-buttons .button-transp').bind("click", function (e) {
        e.preventDefault();
        var m = $($(this).children()[0]);
        $(document).off('scroll');
        if ($(m.attr('href')).offset().top == 0){
            $('html, body').stop().animate({
            scrollTop: $(m.attr('href')).offset().top
        }, 700, function() {
                $(document).on('scroll', onScroll);
            });
        }
        else {
            var t = $(m.attr('href')).offset().top;
            $('html, body').stop().animate({
                  scrollTop: t+40
              }, 700, 'easeOutCubic', function() {
                                              $('html, body').stop().animate({
                                            scrollTop: t
              }, 300, 'easeOutCirc', function () {$(document).on('scroll', onScroll)});});
            }
//        $('html, body').stop().animate({
//            var offs1 = $(anchor.attr('href')).offset().top;
//            scrollTop: offs1 + 20
//        }, 400, function () {
//            
//            $('html, body').animate({
//                scrollTop: offs
//            }, 120, function() {$(document).on('scroll', onScroll)});
//        });
        e.preventDefault();
    });
    
var memes = true;
var memes1 = true;
    $('.left-side-bar .menu ul li a').click(function () {
        if ($(this).parent().hasClass('active')){
            memes = false;
        }
        else {
            memes = true;
        }
        $('.left-side-bar .menu ul li a').each(function () {
            $(this).parent().removeClass('active');
        })

        $(this).parent().addClass('active');
    });


    $('.left-side-bar .menu ul li').click(function (e) {
        e.preventDefault();
         $(document).off("scroll");
            $('.left-side-bar .menu ul li').each(function () {
                $(this).removeClass('active');
            });
                $(this).addClass('active');
    //        $('html, body').stop().animate({
    //            scrollTop: $($(this).children('a').attr('href')).offset().top
    //        }, 500);
        if (memes){
            var offs = $($(this).children('a').attr('href')).offset().top;
            var t = $(this).offset().top;
            if (offs > t) {
                e.preventDefault();
                $('html, body').stop().animate({
                  scrollTop: offs+40
              }, 700, 'easeOutCubic', function() {
                                              $('html, body').stop().animate({
                                            scrollTop: offs
              }, 300, 'easeOutCirc', function () {$(document).on('scroll', onScroll)});});
            }
                                                   
                                                   
            else if (offs < t) {
                e.preventDefault();
                $('html, body').stop().animate({
                  scrollTop: offs-40
              }, 700, 'easeOutCubic', function() {
                                              $('html, body').stop().animate({
                                            scrollTop: offs
              }, 300, 'easeOutCirc', function () {$(document).on('scroll', onScroll)});});
            }
        }
        e.preventDefault();
    });
    
    $(document).on('scroll', onScroll);
    $('.burger').click(function () {
        $('.menu-xs ul').toggleClass('opened');
    });

    $('.main-part').click(function () {
        $('.menu-xs ul').removeClass('opened');
    });

    $('.menu-xs ul li a').click(function () {
        $('.menu-xs ul a').each(function () {
            $(this).parent().removeClass('active');
        })

        $(this).parent().addClass('active');
    });

    $('.menu-xs ul li').click(function (e) {
        if ($(this).parent().hasClass('active')){
            memes1 = false;
        }
        else {
            memes1 = true;
        }
        $('.menu-xs ul li').each(function () {
            $(this).removeClass('active');
        })

        $(this).addClass('active');
                e.preventDefault();
         $(document).off("scroll");
            $('.left-side-bar .menu ul li').each(function () {
                $(this).removeClass('active');
            });
                $(this).addClass('active');
    //        $('html, body').stop().animate({
    //            scrollTop: $($(this).children('a').attr('href')).offset().top
    //        }, 500);
        if (memes1){
            var offs = $($(this).children('a').attr('href')).offset().top;
            var t = $(this).offset().top;
            if (offs > t) {
                e.preventDefault();
                $('html, body').stop().animate({
                  scrollTop: offs+40
              }, 700, 'easeOutCubic', function() {
                                              $('html, body').stop().animate({
                                            scrollTop: offs
              }, 300, 'easeOutCirc', function () {$(document).on('scroll', onScroll)});});
            }
                                                   
                                                   
            else if (offs < t) {
                e.preventDefault();
                $('html, body').stop().animate({
                  scrollTop: offs-40
              }, 700, 'easeOutCubic', function() {
                                              $('html, body').stop().animate({
                                            scrollTop: offs
              }, 300, 'easeOutCirc', function () {$(document).on('scroll', onScroll)});});
            }
        }
        e.preventDefault();
        e.preventDefault();
    });

    $('.btn-more').mouseleave(function () {
        $(this).css('background-color', 'rgba(139, 195, 74, .4)');
    }).mouseenter(function () {
        $(this).css('background-color', '#24AD1B');
    });

    $('.btn-more').click(function () {
        $('.smoke').css('display', 'block');
        $('.deal-more').show('slow');
    });

    $('.car-review').mouseleave(function () {
        $(this).css('text-decoration', 'none');
    }).mouseenter(function () {
        $(this).css('text-decoration', 'underline');
    });

    $('.car-review').click(function () {
        $('.smoke').css('display', 'block');
        $('.review').show('slow');
    });

    $('.about-us .icons div').hover(function () {
        $(this).children().children().toggleClass('hovered');
        $(this).children('p').toggleClass('hovered');
    });

    $('.button-red, .zayavka-slogan-btn, .price .podrobnee-btn').click(function () {
        $('.smoke').css('display', 'block');
        $('.hover-form').show('slow');
    });

    $('.smoke, .close').click(function () {
        $('.smoke, .hover-form, .review, .deal-more, .hover-form-review').css('display', 'none');
    });
    
    $('#phone, #phone1').mask('+7 (999) 999 99 99');

    $('.review-btn').click(function () {
        $('.smoke').css('display', 'block');
        $('.hover-form-review').show('slow');
    });
		//Звонок снизу
         $("#contacts-form .submit-btn").click(function () {
             if ($('#contacts-form #fio').val() != '' && $('#contacts-form #phone').val() != '') {
                 var form_data = $('#contacts-form').serialize();
                 $.ajax({
                     type: "POST",
                     url: "send.php",
                     data: form_data,
                     success: function () {
                         //yaCounter38210115.reachGoal('REQUEST_SENDED');
                         $('#contacts-form .message').text('Ваш запрос успешно отправлен').animate({ opacity: '1' }, 300).delay(3000).animate({ opacity: '0' }, 300);
                         $('#contacts-form').find("input[type=text], textarea").val("");
                     },
                 });
             }
             else {
                 $("#contacts-form .message").text('Поля, отмеченные звездочкой (*) обязательны для заполнения').animate({ opacity: '1' }, 300).delay(3000).animate({ opacity: '0' }, 300);
             }
         });
         //Звонок с карусели
         $("#hover-form .submit-btn").click(function () {
             if ($('#hover-form #fio1').val() != '' && $('#hover-form #phone1').val() != '') {
                 var form_data = $('#hover-form').serialize();
                 $.ajax({
                     type: "POST",
                     url: "send.php",
                     data: form_data,
                     success: function () {
                         //yaCounter38210115.reachGoal('REQUEST_SENDED');
                         $('#hover-form .message').text('Ваш запрос успешно отправлен').animate({ opacity: '1' }, 300).delay(3000).animate({ opacity: '0' }, 300);
                         $('#hover-form').find("input[type=text], textarea").val("");
                     },
                 });
             }
             else {
                 $("#hover-form .message").text('Поля, отмеченные звездочкой (*) обязательны для заполнения').animate({ opacity: '1' }, 300).delay(3000).animate({ opacity: '0' }, 300);
             }
         });
    
	//Отзыв
    $("#hover-form-review .submit-review-btn").click(function () {
        if ($('#hover-form-review #fio2').val() != '' && $('#hover-form-review #review').val() != '') {
            var form_data = $('#hover-form-review').serialize();
            $.ajax({
                type: "POST",
                url: "sendReview.php",
                data: form_data,
                success: function () {
                    $('#hover-form-review .message').text('Ваш запрос успешно отправлен').animate({ opacity: '1' }, 300).delay(3000).animate({ opacity: '0' }, 300);
                    $('#hover-form-review').find("input[type=text], textarea").val("");
                },
            });
        }
        else {
            $("#hover-form-review .message").text('Поля, отмеченные звездочкой (*) обязательны для заполнения').animate({ opacity: '1' }, 300).delay(3000).animate({ opacity: '0' }, 300);
        }
    });
});

function onScroll(event){
    event.preventDefault();
    var scrollPos = $(document).scrollTop();
    $('.left-side-bar .menu a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - $(window).height()/3 <= scrollPos && refElement.position().top + refElement.height() - $(window).height()/3 >= scrollPos) {
                $('.left-side-bar .menu ul li a').parent().removeClass("active");
                currLink.parent().addClass("active");
            }
            else{
                currLink.parent().removeClass("active");
            }
        });
    }

function linkSwitch(e){
    e.preventDefault();
        $('a.link').each(function () {
            $(this).parent().removeClass('active1');
            $('.el-desc').css('opacity', '0');
            $('.sh-desc').css('opacity', '0');
            $('.ba-desc').css('opacity', '0');
            $('.sa-desc').css('opacity', '0');
            $('.po-desc').css('opacity', '0');
            $('.flat-electricity').css('opacity', '0');
            $('.flat-shkaphi').css('opacity', '0');
            $('.flat-balkon').css('opacity', '0');
            $('.flat-santehnica').css('opacity', '0');
            $('.flat-pol').css('opacity', '0');
        })

        $(this).parent().addClass('active1');
        var zis = $(this).attr('id');
        if (zis == 'link1'){
            $('.flat-electricity').css('opacity', '1');
            $('.el-desc').css('opacity', '1');
        }
        else if (zis == 'link2'){
            $('.flat-shkaphi').css('opacity', '1');
            $('.sh-desc').css('opacity', '1');
        }
        else if (zis == 'link3'){
            $('.flat-balkon').css('opacity', '1');
            $('.ba-desc').css('opacity', '1');
        }
        else if (zis == 'link4'){
            $('.flat-santehnica').css('opacity', '1');
            $('.sa-desc').css('opacity', '1');
        }
        else if (zis == 'link5'){
            $('.flat-pol').css('opacity', '1');
            $('.po-desc').css('opacity', '1');
        }
    clearInterval(clearInt);
    clearInt = setInterval(linkSwitchToNext, 4000);
}

function linkSwitchToNext(){
    isCleared = true;
    $('a.link').each(function () {
            $('.el-desc').css('opacity', '0');
            $('.sh-desc').css('opacity', '0');
            $('.ba-desc').css('opacity', '0');
            $('.sa-desc').css('opacity', '0');
            $('.po-desc').css('opacity', '0');
            $('.flat-electricity').css('opacity', '0');
            $('.flat-shkaphi').css('opacity', '0');
            $('.flat-balkon').css('opacity', '0');
            $('.flat-santehnica').css('opacity', '0');
            $('.flat-pol').css('opacity', '0');
        });
    
    if ($('.active1 .link').is('#link1')){
        $('#link1').parent().removeClass('active1');
        $('#link2').parent().addClass('active1');
        $('.flat-shkaphi').css('opacity', '1');
        $('.sh-desc').css('opacity', '1');
    }
    else if ($('.active1 .link').is('#link2')){
        $('#link2').parent().removeClass('active1');
        $('#link3').parent().addClass('active1');
        $('.flat-balkon').css('opacity', '1');
        $('.ba-desc').css('opacity', '1');
    }
    else if ($('.active1 .link').is('#link3')){
        $('#link3').parent().removeClass('active1');
        $('#link4').parent().addClass('active1');
        $('.flat-santehnica').css('opacity', '1');
        $('.sa-desc').css('opacity', '1');
    }
    else if ($('.active1 .link').is('#link4')){
        $('#link4').parent().removeClass('active1');
        $('#link5').parent().addClass('active1');
        $('.flat-pol').css('opacity', '1');
        $('.po-desc').css('opacity', '1');
    }
    else if ($('.active1 .link').is('#link5')){
        $('#link5').parent().removeClass('active1');
        $('#link1').parent().addClass('active1');
        $('.flat-electricity').css('opacity', '1');
        $('.el-desc').css('opacity', '1');
    }
}

