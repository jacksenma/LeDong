var http_request=false;
function sendRequest(url,func){
    // alert('123');
    http_request=false;
    //为不同浏览器创建request;
    if(window.XMLHttpRequest){
        http_request=new XMLHttpRequest();
        // alert('s');
        if(http_request.overrideMimeType){
            http_request.overrideMimeType("text/xml");
        }
    }else if(window.ActiveXObject){//IE浏览器
        try{
            http_request=new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e){
            try{
                http_request=new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){}
        }

    }

    if(!http_request){
        alert("不能创建XMLHTTP实例！");
        return false;
    }
    // if(type=="get")
    //     http_request.onreadystatechange=doSignIn;
    // else if(type=="post")
    http_request.onreadystatechange=func;
    http_request.open("GET",url,true);
    http_request.send();

    // alert(xmlDoc);
    // alert(xmlDoc);\\
}