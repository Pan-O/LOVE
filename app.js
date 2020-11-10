//时间计算
function siteTime() {
	window.setTimeout("siteTime()", 1000);
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	var today = new Date();
	var todayYear = today.getFullYear();
	var todayMonth = today.getMonth() + 1;
	var todayDate = today.getDate();
	var todayHour = today.getHours();
	var todayMinute = today.getMinutes();
	var todaySecond = today.getSeconds();
	var t1 = Date.UTC(2020, 1, 1, 00, 00, 00);//日期
	var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
	var diff = t2 - t1;
	var diffYears = Math.floor(diff / years);
	var diffDays = Math.floor((diff / days) - diffYears * 365);
	var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
	var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
	var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);
	document.getElementById("love_clock").innerHTML = +diffDays + " 天 " + diffHours + " 时 " + diffMinutes + " 分 " + diffSeconds + " 秒";
}
siteTime();
//开屏动画
$("#loading").fadeOut(4000);
//音乐播放
document.addEventListener('touchstart', function() {
	function audioAutoPlay() {
		var audio = document.getElementById('audio');
		audio.play();
	}
	audioAutoPlay();
});
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
//祝福按钮
$('body').on('click', '.blessing', function() {
	$.message('Thanks,Wish your Mr.Right/Miss Right will appear soon.');
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