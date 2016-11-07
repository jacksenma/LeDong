/**
 * Created by fjj on 16-9-21.
 */

var http_request=false;
function createRequest(url){
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
    http_request.onreadystatechange=alertContents;
    http_request.open("GET",url,true);
    http_request.send(null);

    // alert(xmlDoc);
    // alert(xmlDoc);\\
}

function alertContents() {
    // alert('123');
    // if (http_request.readyState == 4) {
    //     if (http_request.status == 200) {

            // alert(http_request.responseText);
    // document.getElementById('InUsername').innerHTML="placeholder='s'";
    // if(http_request.responseText){
    //     jiexi(http_request.responseText);
    // }

    // alert(document.getElementById('InUsername'));
    // document.getElementById("rem111").innerHTML="aszxc";
    var xmlDoc=http_request.responseXML;
    //alert(document.getElementById("login"));
    // alert(xmlDoc.getElementById('login').innerHTML);
    // document.getElementById("login").innerHTML=xmlDoc.getElementById('as').innerHTML;
    alert(xmlDoc.getElementsByTagName('dateTime')[0].childNodes[0].nodeValue);
    // console.log(xmlDoc.getElementById('as').innerHTML);
    // alert(xmlDoc.getElementById('login').innerHTML);
    console.log(http_request.responseText);
            // if(flag)
            //     return true;
            // else
            //     return false;
        // }else {
            // alert("请求页面错误");
        // }
    // }
}
// function jiexi(s) {
//     var xmlhttp;
//     if (window.XMLHttpRequest)
//     {// code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp=new XMLHttpRequest();
//     }
//     else
//     {// code for IE6, IE5
//         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.open("GET",'./php/restapi.php?username=fjj'+'&password='+'123'+'&infoType=health',false);
//     xmlhttp.send();
//     var xmlDoc=xmlhttp.responseXML;
//     alert(xmlDoc);
// }
// function checkValue(name) {
// alert('123');
//     alert(document.getElementById('rem').innerHTML);
// document.getElementById("rem").innerHTML="aszxc";
    createRequest('./php/restapi.php?username=fjj'+'&password='+'123'+'&infoType=health');
// alert('123');

// }
