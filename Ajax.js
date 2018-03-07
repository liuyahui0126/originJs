//时间戳
var odata = new Date();
var time = odata.getTime();

var xml = null;
function Ajax(method,url,callback,value,flag){
	//判断xml适合ie还是其他
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		//ie
		xml = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//添加事件监听
	xml.onreadystatechange = function(){
		if(xml.readyState == 4){
			if(xml.status == 200){
				callback(xml.responseText);
			}
		}
	}

	//选择是 GET 还是 POST
	if(method == 'GET'){
		xml.open(method,url+'?'+value+'&onlyTime='+time,flag); 
		xml.send();
	}else if(method == 'POST'){
		xml.open(method,url,flag); 
		xml.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xml.send(value);
	}
}


//差点value  14.23刚开始