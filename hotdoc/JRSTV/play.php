<?php
$agent = strtolower($_SERVER['HTTP_USER_AGENT']);
$iphone = (strpos($agent, 'iphone')) ? true : false;
$mac = (strpos($agent, 'macintosh')) ? true : false;
$ipad = (strpos($agent, 'ipad')) ? true : false;
$android = (strpos($agent, 'android')) ? true : false;
if($iphone || $ipad || $android )                          //������ֻ�
{
	$steamUrl = $_GET['id'] ? $_GET['id'] : null;//��ȡֱ����
	if($steamUrl){
		$steamUrl = str_replace('flv', 'm3u8', $steamUrl);//ֱ����ת��Ϊm3u8
		$flag = 1;//�ֻ��豸
		//echo "<iframe src='$steamUrl'></iframe>";   
	}
}
else {                              
  $flag = 2;//����ϵͳ
  //echo '���ckplayer���Ŵ���';     
}
?>

<html>
 <head>
  <title>JRS TV</title>
 </head>
 <body>
	<?php if($flag == 1):?>
	<div id="a1"></div>
		<script type="text/javascript" src="/ckplayer/ckplayer.js" charset="utf-8"></script>
		<script type="text/javascript">
			var flashvars={
			    f:'/ckplayer/m3u8.swf',
				a:'<?php echo $steamUrl;?>',
				c:0,
				p:1,
				lv:1,
				e:1
			};
			var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
          	var video=['<?php echo $steamUrl;?>'];
	        CKobject.embed('/ckplayer/ckplayer.swf','a1','ckplayer_a1','100%','100%',false,flashvars,video,params);
		</script>
  
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




