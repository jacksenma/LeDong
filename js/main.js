/**
 * Created by user on 2016/11/29.
 */
function send() {
    var type='get';
    var infoType='userDetail';
    var username=getCookie("username");
    sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,init);
}

function init() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // console.log(http_request.responseText);
        // alert(http_request.responseText);
        var xmlDoc=http_request.responseXML;
        setCookie('username',xmlDoc.getElementsByTagName('name')[0].childNodes[0].nodeValue);
        setCookie('image',xmlDoc.getElementsByTagName('image')[0].childNodes[0].nodeValue);
        setCookie('level',xmlDoc.getElementsByTagName('level')[0].childNodes[0].nodeValue);
        setCookie('weight',xmlDoc.getElementsByTagName('weight')[0].childNodes[0].nodeValue);
        setCookie('height',xmlDoc.getElementsByTagName('height')[0].childNodes[0].nodeValue);
        setCookie('userId',xmlDoc.getElementsByTagName('id')[0].childNodes[0].nodeValue);
        setCookie('location',xmlDoc.getElementsByTagName('location')[0].childNodes[0].nodeValue);
        setCookie('hobby',xmlDoc.getElementsByTagName('hobby')[0].childNodes[0].nodeValue);
        setCookie('signature',xmlDoc.getElementsByTagName('signature')[0].childNodes[0].nodeValue);
        setCookie('age',xmlDoc.getElementsByTagName('age')[0].childNodes[0].nodeValue);
        // alert(xmlDoc.getElementsByTagName('id')[0].childNodes[0].nodeValue);
        userinit();
        // document.getElementById('username').innerHTML=xmlDoc.getElementsByTagName('name')[0].childNodes[0].nodeValue;
        // document.getElementById('level').innerHTML=xmlDoc.getElementsByTagName('level')[0].childNodes[0].nodeValue;
        // document.getElementById('photo').src=xmlDoc.getElementsByTagName('image')[0].childNodes[0].nodeValue;

    }

}