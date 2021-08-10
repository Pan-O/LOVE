<?php
header("Content-Type:application/json");
$qq = $_POST['qq'];
if (trim(empty($qq))) {
    echo json_encode(array('status' => 'error', 'msg' => '未传入QQ号'), JSON_UNESCAPED_UNICODE);
}
$get_info = file_get_contents('http://r.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?get_nick=1&uins=' . $qq);
$get_info = mb_convert_encoding($get_info, "UTF-8", "GBK");
$name = json_decode(substr($get_info, 17, -1), true);
if ($name and $qq) {
    $txUrl = 'https://q.qlogo.cn/headimg_dl?dst_uin=' . $qq . '&spec=100';
    $arr = array('qq' => $qq, 'nick' => urlencode($name[$qq][6]), 'pic' => $txUrl);
    exit(stripslashes(urldecode(json_encode($arr))));
}
?>