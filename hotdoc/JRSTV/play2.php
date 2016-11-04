<?php
$agent = strtolower($_SERVER['HTTP_USER_AGENT']);
$iphone = (strpos($agent, 'iphone')) ? true : false;
$mac = (strpos($agent, 'macintosh')) ? true : false;
$ipad = (strpos($agent, 'ipad')) ? true : false;
$android = (strpos($agent, 'android')) ? true : false;
if($iphone || $ipad || $mac)                          //如果是iOS
{
	$steamUrl = $_GET['id'] ? $_GET['id'] : null;//获取直播流
	if($steamUrl){
		$steamUrl = str_replace('flv', 'm3u8', $steamUrl);//直播流转换为m3u8
		$flag = 1;//系统为ios
		//echo "<iframe src='$steamUrl'></iframe>";   
	}
}
else {                              
  $flag = 2;//其他系统
  //echo '输出ckplayer播放代码';     
}
?>

<html>
 <head>
  <title>JRS TV</title>
 </head>
 <body>
	<?php if($flag == 1):?>
<iframe src="<?php echo $steamUrl;?>" width="100%" height="350" scrolling="no" frameborder="0"></iframe>
	<?php elseif($flag == 2):?>
		<div id="a1"></div>
		<script type="text/javascript" src="/ckplayer/ckplayer.js" charset="utf-8"></script>
		<script type="text/javascript">
			var flashvars={
				f:'<?php if($_GET['id']){echo $_GET['id'];}?>',
				c:0,
				p:1,
				lv:1,
				e:1
			};
			var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
			var video=['<?php if($_GET['id']){echo $_GET['id'];}?>.flv->video/flv'];
			CKobject.embed('/ckplayer/ckplayer.swf','a1','ckplayer_a1','100%','100%',false,flashvars,video,params);
		</script>
	<?php endif;?>
 
 </body>
</html>




