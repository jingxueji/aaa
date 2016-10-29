
function json2url(json){
	json.t=Math.random();
	var arr=[];
	for(var name in json){
		arr.push(name+'='+encodeURIComponent(json[name]));
	}
	return arr.join('&');
} 

function ajax(json){
	if(!json.url){return;}
	json=json||{};
	json.type=json.type||'GET';
	json.data=json.data||{};
//1.创建ajax对象兼容性写法
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject('Microsoft.XMLHttp');
	}
	//2建立一个连接
	//get
	switch(json.type.toLowerCase()){
		case 'get':
			oAjax.open('GET',json.url+'?'+json2url(json.data),true);
	}
			oAjax.send;
		break;
		case 'post':
			oAjax.open('POST',json.url,true);
			alert('xxxx');
			oAjax.setRequestHeader('Contendt-type','application/x-www-form-uriencoded');
			oAjax.send(json2url(json.data));
	/*oAjax.open('GET','a.txt',true);
	//3.发送请求
	oAjax.send();
	//4接收   当状态改变*/
	oAjax.onreadystatechange = function(){
		//网络状态
		if(oAjax.readyState == 4){
			//http状态
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status == 304){
					alert(oAjax.responseText);
			}else{
				alert('网络异常，请重试');	
			}	
		}
	};
};	

