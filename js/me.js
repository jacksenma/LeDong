document.getElementById("follow_click").click();
function modifyUser(){
    var uname=document.getElementById('name').value;
    var temp=document.getElementsByName('optionsRadios');
    var sex;
    for(var i=0;i<temp.length;i++)
    {
        if(temp[i].checked)
            sex = temp[i].value;
    }
    var age=document.getElementById('age').value;
    var loc=document.getElementById('location').value;
    var hobby=document.getElementById('hobby').value;
    var signature=document.getElementById('signature').value;
    // alert(username+' '+sex+' '+age+' '+loc+' '+hobby+' '+signature);
    if(uname==""||sex==""||age==""||loc==""||hobby==""||signature==""){
        alert("请填写完整信息");
    }else{
        setCookie('username',uname);
        setCookie('age',age);
        setCookie('sex',sex);
        setCookie('location',loc);
        setCookie('hobby',hobby);
        setCookie('signature',signature);
        var type='put';
        var infoType='modifyUser';
        var userId=getCookie('userId');
        sendRequest('./php/restapi.php?type='+type+'&userId='+userId+'&uname='+uname+'&sex='+sex+'&age='+age+'&loc='+loc+'&hobby='+hobby+'&signature='+signature+'&infoType='+infoType,modifyUserManager);
    }
}
function modifyUserManager() {
    if (http_request.readyState == 4 && http_request.status == 200){
        alert('修改成功');
        document.getElementById('reset').click();
        userinit();
        if(getCookie('sex')=='male')
            document.getElementById('sex').src='img/male.svg';
        else
            document.getElementById('sex').src='img/female.svg';
        document.getElementById('myage').innerHTML=getCookie('age');
        document.getElementById('myloc').innerHTML=getCookie('location');
        document.getElementById('mysig').innerHTML=getCookie('signature');
        document.getElementById('myhob').innerHTML=getCookie('hobby');
        // document.getElementById('mysig').src='img/male.svg';

        // meinit();
    }
}
function meinit() {

    var type='get';
    var infoType='getMe';
    var id=getCookie('userId');
    // alert('./php/restapi.php?type='+type+'&id='+id+'&infoType='+infoType);
    sendRequest('./php/restapi.php?type='+type+'&id='+id+'&infoType='+infoType,meinitManage);
}
function meinitManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        var xmlDoc=http_request.responseXML;
        document.getElementById('myage').innerHTML=xmlDoc.getElementsByTagName('age')[0].childNodes[0].nodeValue+' 岁';
        document.getElementById('myloc').innerHTML=xmlDoc.getElementsByTagName('location')[0].childNodes[0].nodeValue;
        document.getElementById('mysig').innerHTML=xmlDoc.getElementsByTagName('signature')[0].childNodes[0].nodeValue;
        document.getElementById('myhob').innerHTML=xmlDoc.getElementsByTagName('hobby')[0].childNodes[0].nodeValue;
    }
    userinit();
}