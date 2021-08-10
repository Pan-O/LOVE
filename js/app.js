//时间计算
function setTime() {
    var urodz = new Date("日期");//填写你们开始的时间 格式：月/日/年 例如：8/17/2020
    var now = new Date();
    var ile = now.getTime() - urodz.getTime();
    var dni = Math.floor(ile / (1000 * 60 * 60 * 24));
    currentTimeHtml = dni + 1 + "天";
    document.getElementById("love_clock").innerHTML = currentTimeHtml;
}
setInterval(setTime, 1000);
//动画，音乐播放
$('body').on('click', '.star-icon',
function() {
	audio.volume = 0;
    $("audio")[0].play();
    var t = setInterval(function(){
        audio.volume+= 0.05;
        if(audio.volume<=0.9){
            audio.volume = audio.volume;
        }else{
            clearInterval(t);
        }
    },700);
    $(".loading").fadeOut(1500);
    window.setTimeout(function() {
        $(".man_img").animate({
            left: '100%'
        },
        1000);
    },
    1000);
    window.setTimeout(function() {
        $(".woman_img").animate({
            right: '100%'
        },
        1000);
    },
    1000);
});
//上下页
if (screen && screen.width <900 ) {
    var container = document.querySelector('.main')
    var viewHeight = document.documentElement.clientHeight
    var pageNum = document.querySelectorAll('.page').length
    var currentPosition = 0
    container.style.height = viewHeight + 'px'
    function goDown () {
      if (currentPosition > - viewHeight * (pageNum - 1)) {
        currentPosition = currentPosition - viewHeight
        container.style.top = currentPosition + 'px'
      }
    }
    $('body').on('click','.next',
    function(){
	    goDown();
	});
    function goUp () {
      if (currentPosition < 0) {
        currentPosition = currentPosition + viewHeight
        container.style.top = currentPosition + 'px'
      }
    }
    function throttle (fn, delay) {
      let baseTime = 0
      return function () {
        const currentTime = Date.now()
        if (baseTime + delay < currentTime) {
          fn.apply(this, arguments)
          baseTime = currentTime
        }
      }
    }
    var handlerWheel = throttle(scrollMove, 1000)
    if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
      document.addEventListener('mousewheel', handlerWheel)
    } else {
      document.addEventListener('DOMMouseScroll', handlerWheel)
    }
    function scrollMove (e) {
      if (e.deltaY < 0) {
        goUp()
      } 
    }
    var touchStartY = 0
    document.addEventListener('touchstart', event => {
      touchStartY = event.touches[0].pageY
    })
    var handleTouchEnd = throttle(touchEnd, 500)
    document.addEventListener('touchend', handleTouchEnd)
    function touchEnd (e) {
      var touchEndY = e.changedTouches[0].pageY
      if (touchEndY - touchStartY > 0) { 
        goUp()
      }
    }
}
//消息弹框组件  https://github.com/qiuyaofan/message
$.extend({
	message: function(options) {
		var defaults = {
			message: ' 操作成功',
			time: '2000',
			showClose: false,
			autoClose: true,
			onClose: function() {}
		};
		if (typeof options === 'string') {
			defaults.message = options;
		}
		if (typeof options === 'object') {
			defaults = $.extend({}, defaults, options);
		}
		var template = '<div class="c-message messageFadeInDown">' + '<div class="c-message--main">' + '<div class="c-message--tip">' + defaults.message + '</div>' + '</div>' + '</div>';
		var _this = this;
		var $body = $('body');
		var $message = $(template);
		var timer;
		var closeFn, removeFn;
		closeFn = function() {
			$message.addClass('messageFadeOutUp');
			$message.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				removeFn();
			})
		};
		removeFn = function() {
			$message.remove();
			defaults.onClose(defaults);
			clearTimeout(timer);
		};
		$('.c-message').remove();
		$body.append($message);
		$message.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$message.removeClass('messageFadeInDown');
		});
		if (defaults.autoClose) {
			timer = setTimeout(function() {
				closeFn();
			}, defaults.time)
		}
	}
});
//随机感谢语
$(document).ready(function() {
    $(".blessing").click(function() {
        file = $.ajax({
            url: "./other/love.txt",
            async: false
        });
        var lines = file.responseText.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        var txt = JSON.stringify(lines[randLineNum].split("#")).replace(/\["|\"]|\\r/g, '');
        $.message(txt);
    });
});
//点击爱心效果
$("html,body").click(function(event) {
	event = event || window.event;
	let oSpan = $('<span></span>');
	oSpan.css({
		position: 'absolute',
		zIndex: 99999,
		userSelect: 'none',
		left: event.pageX + 'px',
		top: event.pageY + 'px'
	})
	oSpan.html('<svg t="1604924053890" class="icon" viewBox="0 0 1628 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3136" width="20" height="20"><path d="M1167.90943 104.580449l-3.555999-3.555998C1031.804496-29.533486 820.466599-34.084483 682.370667 90.500456 544.275734-34.084483 332.936837-29.391486 200.387902 101.024451 65.136968 234.570385 63.571969 452.450279 197.116904 587.843213l3.269998 3.269998L604.149705 991.179016c42.381979 43.234979 111.784945 43.803979 155.019924 1.422999l1.422-1.422999 403.761802-399.779805c135.393934-133.401935 137.099933-351.424828 3.555999-486.817762z m-132.121936 284.296861c-9.955995 0-18.204991-8.105996-18.204991-18.203991 0-65.562968-53.189974-118.753942-118.752942-118.753942-4.835998 0-9.528995-1.989999-12.941994-5.403997-3.413998-3.412998-5.404997-8.106996-5.404997-12.941994a18.147991 18.147991 0 0 1 18.204991-18.203991c85.757958 0 155.303924 69.544966 155.303924 155.303924 0 9.954995-8.106996 18.203991-18.203991 18.203991z" fill="#e81224" p-id="3137"></path></svg>');
	$("body").append(oSpan)
	oSpan.animate({
		top: oSpan.offset().top - 50,
		opacity: 0,
	}, 500, 'linear', function() {
		$(this).remove();
	})
})
//评论窗口
$('body').on('click', '.message',
function() {
    $('#message_black').fadeIn(400);
    $('#message_content').fadeIn(400);
    $.message("可以输入QQ号更快评论哦~");
});
$('body').on('click', '#message_black',
function() {
    $('#message_black').fadeOut(400);
    $('#message_content').fadeOut(400);
});

//Valine评论
new Valine({
    el: '#vcomments',
    appId: 'ID',//填写自己申请的id
    appKey: 'KEY',//填写自己申请的key
    placeholder: '说点什么吧…',
    enableQQ: 'true',
});






