<?php if (!defined('THINK_PATH')) exit();?>
<h2 class="sub-header">添加合作案例</h2>
	<form name="fmCaseInsert" id="fmCaseInsert" method="post" action="javascript:void(0)" enctype="multipart/form-data">
                <div class="addBox">
                    <div class="input-group">
                        <span class="input-group-addon">标题</span>
                        <input type="text" class="form-control" name="casetitle" id="casetitle" placeholder="案例标题">
                        <span class="input-group-addon input-group-inport">*</span>
                    </div>
                    <div class="input-group">
                        <div class="input-group">
                            <span class="input-group-addon">权重</span>
                             <input name="caseweight" id="caseweight"  type="text" class="form-control" value="0" maxlength="7">
                            <span class="input-group-addon input-group-inport">(越小越靠前)</span>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">缩略图</div>
                        <div class="panel-body" style="text-align: center;">
                            <input type="file" name="thumbinalselect" id="thumbinalselect"  onchange="setCaseImageThumbinal()"  style="float:left;margin-bottom:10px;"><span class="input-group-inport" style="float:right">*</span>
                            <div class="clear"></div>
                            <img  name="casethumbinal" id="casethumbinal" alt="" src=""  class="img-thumbnail" width="200">
	    					<input type="hidden" id="casethumbinalpath" name="casethumbinalpath" >
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">二维码</div>
                        <div class="panel-body"  style="text-align: center;">
                            <input type="file" id="qrcodeselect" name="qrcodeselect" onchange="setCaseImageQrcode()" style="float:left;margin-bottom:10px;"><span class="input-group-inport" style="float:right">*</span>
                            <div class="clear"></div>
                            <img name="caseqrcode" id="caseqrcode" alt="" src="" width="200">
	    					<input type="hidden" id="caseqrcodepath" name="caseqrcodepath" >
                        </div>
                    </div>
                </div>
               
                <div class="modal-footer" style="text-align: center;"s>
	    			<input type="hidden" id="casetoken" name="casetoken" >
                    <button name="btnResetCase" id="btnResetCase" onclick="resetCase()" type="button" class="btn btn-default">清空
                    </button>
                    <button name="btnSubmitCase" id="btnSubmitCase" onclick="caseSummit(this.form)" type="button" class="btn btn-primary">
                        添加
                    </button>
                </div>
	</form>
 <!-- /.modal-content -->
<!-- 
<form name="fmCaseInsert" id="fmCaseInsert" method="post" action="javascript:void(0)" enctype="multipart/form-data">
	<table width="Auto" border="1" cellspacing="1" cellpadding="1" style="border-collapse:collapse;">
	  <tr>
	    <td colspan="2" align="center">案例添加</td>
	  </tr>
	  <tr>
	    <td width="100" height="30" align="right">标题：</td>
	    <td  align="left" width="759"><input name="casetitle" type="text" id="casetitle" size="40"><span style="color:red;">*</span></td>
	  </tr>
	  <tr>
	    <td width="100" height="200" align="right">缩略图：</td>
	    <td  align="left" width="759">
	    	<img name="casethumbinal" id="casethumbinal" alt="" src="" width="200" height="200">
	    	<input type="file" name="thumbinalselect" id="thumbinalselect"  onchange="setCaseImageThumbinal()" style="cursor:pointer;">
	    	<input type="hidden" id="casethumbinalpath" name="casethumbinalpath" >
	    	<span style="color:red;">*</span>
	    </td>
	  </tr>
	  <tr>
	    <td width="100" height="200" align="right">二维码：</td>
	    <td  align="left" width="759">
	    	<img name="caseqrcode" type="text" id="caseqrcode" alt="" src="" width="200" height="200">	    	
	    	<input type="file" id="qrcodeselect" name="qrcodeselect" onchange="setCaseImageQrcode()"  style="cursor:pointer;">
	    	<input type="hidden" id="caseqrcodepath" name="caseqrcodepath" >
	    	<span style="color:red;">*</span>
	    </td>
	  </tr>
	  <tr>
	    <td width="100" height="30" align="right">权重：</td>
	    <td  align="left" width="559">    	
	    	<input name="caseweight" id="caseweight" type="text" value="0" >
	    	<span style="color:red;">(越小越靠前)</span>
	    </td>
	  </tr>
	  <tr>
	    <td colspan="2">
	    	<input type="hidden" id="casetoken" name="casetoken" >
	    	<input type="submit" name="btnSubmitCase" id="btnSubmitCase" onclick="caseSummit(this.form)" value="保存">
	      	&nbsp;&nbsp;&nbsp;&nbsp;
	      	<input type="reset" name="btnResetCase" id="btnResetCase" onclick="resetCaseAdd()" value="清空">
	     </td>
	  </tr>
	</table>
</form> -->