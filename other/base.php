<?php
//获取QQ头像
function man() {
	$qq = LOVE_QQ_MAN;
	$geturl = 'http://ptlogin2.qq.com/getface?&imgtype=1&uin=' . $qq;
	$qquser = file_get_contents($geturl);
	preg_match('/&k=.*&s=/', $qquser, $matches);
	$k = $matches[0];
	$qqimg = 'https://q1.qlogo.cn/g?b=qq&k=' . $k . '&s=100';
	echo $qqimg;
}
function woman() {
	$qq = LOVE_QQ_WOMAN;
	$geturl = 'http://ptlogin2.qq.com/getface?&imgtype=1&uin=' . $qq;
	$qquser = file_get_contents($geturl);
	preg_match('/&k=.*&s=/', $qquser, $matches);
	$k = $matches[0];
	$qqimg = 'https://q1.qlogo.cn/g?b=qq&k=' . $k . '&s=100';
	echo $qqimg;
}
/***
 节日计时	代码来自：www.bubaijun.com    有修改
***/
$now_year = date('Y');
include_once 'other/Calendar.php';
use Overtrue\ChineseCalendar\Calendar;
date_default_timezone_set('PRC');
$calendar = new Calendar();
$chunjie = $calendar->lunar($now_year, 1, 1);
$chunjie = $chunjie['gregorian_month'].$chunjie['gregorian_day'];
$qixi = $calendar->lunar($now_year, 7, 7);
$qixi = $qixi['gregorian_month'].$qixi['gregorian_day'];
$date_time = [
	'0114' => '日记情人节',
	"{$chunjie}" => '春节',
	'0214' => '情人节',
	'0314' => '白色情人节',
	'0514' => '玫瑰情人节',
	'0521' => '521',
	'0522' => '522',
	'0601' => '儿童节',
	'0614' => '亲吻情人节',
	'0714' => '银色情人节',
	"{$qixi}" => '七夕节',
	'0814' => '绿色情人节',
	DAY => '纪念日',
	'0914' => '音乐与相片情人节',
	'1014' => '葡萄酒情人节',
	'1114' => '电影情人节',
	'1214' => '拥抱情人节',
	'1224' => '平安夜',
	'1225' => '圣诞节',
];
$now = date('Y-m-d');
$now_moth = date('md');
$now_times = strtotime($now);
$i = false;
$next = [];
$o = false;
$p = false;
foreach ($date_time as $key => $value) {
	if ($now_moth <= $key) {
		$now_year = date('Y');
		$key = $now_year . '-' . mb_substr($key, 0, 2) . '-' . mb_substr($key, 2, 2);
	}
	if ($now_moth > $key) {
		$now_year = date('Y') + 1;
		$key = $now_year . '-' . mb_substr($key, 0, 2) . '-' . mb_substr($key, 2, 2);
	}
	$key_times = strtotime($key);
	$target_time_difference_times = $key_times - time();
	$day = floor($target_time_difference_times / 3600 / 24)+1;
	if ($now == $key) {
		$to_day = $value;
	}
	if (!$i && $key_times > $now_times && $now_year == date('Y')) {
		$next['time'] = $key;
		$next['value'] = $value;
		$next['target'] = "{$day} 天";
		$i = true;
		$o = true;
	}
	if (!$o && !$i && $key_times > $now_times && $now_year !== date('Y')) {
		$next['time'] = $key;
		$next['value'] = $value;
		$next['target'] = "{$day} 天";
		$o = true;
	}
	if ($now == $key) {
		$festival = "<span>{$value}</span><span>就是今天！</span>";
		$festival_time = mb_substr($key, 5, 2) . '.' . mb_substr($key, 8, 2);
		$p = true;
	} elseif (!$p) {
		$festival = "<span>{$next['value']}即将到来！</span><span>还有{$next['target']}</span>";
		$festival_time = mb_substr($next['time'], 5, 2) . '.' . mb_substr($next['time'],8 , 2);
	}
}
//输出列表
function love_list() {
	$content= file_get_contents('other/list.json');
	$content = json_decode($content,true);
	foreach ($content as $key ) {
		if ($key['result']=="完成") {
			$list_result= "done";
		} else {
			$list_result= "undone";
		}
		echo '<li><span class="'.$list_result.'"></span>' . $key['plan'] . '</li>';
	}
}
