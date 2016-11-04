<?php
/* 数据模型文件(直播云系统)
 * To contact the author write to {@link jingyunshan@tvmining.com}
 * @author 景云山 
*/
class Boxlogs extends Bean {
	
	const TABLE = 'boxlogs';
	public static $desc = null;
	//const PRIMARY_KEY = 'id';
	
    public function add($userid,$mac,$date) {
        $bean = new Boxlogs();
        $bean->userid = $userid;
        $bean->boxcode = $mac;
	$bean->add_time = $date;
        return $bean->save();
    }

    public function edit($name,$image,$id=0,$status=1) {
        $bean = Boxs::i($id);
        if ($bean->boxcode){
            if($name)$bean->boxname = $name;
            if($image)$bean->image = $image;
            $bean->status = $status;
            $flag = $bean->save();
        }
        return $flag;
    }
    
  
	
}
