/**
 * Created by fjj on 16-9-21.
 */
var username;
var password;
function doSignIn() {
    if (http_request.readyState==4 && http_request.status==200)

        if(http_request.responseText=="yes"){
            // g_username=username;
            // g_password=password;
            // g_image="img/banner.jpg";
            // g_sex="male";
            // g_level=1;
            // var type='get';
            // var infoType='userDetail';
            // // alert('1');
            // sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,setGlobal);
            // alert('2');
            // send();
            // document.cookie="username="+username;
            setCookie("username",username);
            self.location='main.html';
        }
        else if(http_request.responseText=="no"){
            document.getElementById('signInTip').innerHTML="用户名或密码错误"
        }

}

function doSignUp() {

    if (http_request.readyState == 4 && http_request.status == 200)
    // console.log(http_request.responseText);
    //     alert(http_request.responseText);
        if (http_request.responseText == "yes") {
            // alert ('yes');
            document.getElementById('signUpTip').innerHTML = "注册成功";
        }
        else if (http_request.responseText == "no") {
            // alert ('no');
            document.getElementById('signUpTip').innerHTML = "此用户名已存在"
        }

}
function signIn() {
    var type='get';
    username=document.getElementById('InUsername').value;
    password=document.getElementById('InPassword').value;
    var md5=hex_md5(password);
    var infoType='userLogin';
    if(username==""||password=="")
        document.getElementById('signInTip').innerHTML = "请完整填写信息";
    else
        sendRequest('./php/restapi.php?type='+type+'&username='+username+'&password='+md5+'&infoType='+infoType,doSignIn);
}
function signUp() {
    var type='post';
    username=document.getElementById('UpUsername').value;
    password=document.getElementById('UpPassword').value;
    var passwordAgain=document.getElementById('UpPasswordAgain').value;

    var infoType='userSignUp';
    if(username==""||password==""||passwordAgain=="")
        document.getElementById('signUpTip').innerHTML = "请完整填写信息";
    else{
        if(password==passwordAgain){
            var md5=hex_md5(password);
            // alert(md5);
            sendRequest('./php/restapi.php?type='+type+'&username='+username+'&password='+md5+'&infoType='+infoType,doSignUp);
        }
        else
            document.getElementById('signUpTip').innerHTML="两次密码不一致";
    }

}
// function send() {
//     var type='get';
//     var infoType='userDetail';
//     var username=username;
//     sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,userInit);
// }
// function userInit() {
//     if (http_request.readyState == 4 && http_request.status == 200){
//         // alert(http_request.responseText);
//         console.log(http_request.responseText);
//         var xmlDoc=http_request.responseXML;
//         var g_username=xmlDoc.getElementsByTagName('name')[0].childNodes[0].nodeValue;
//         var g_image=xmlDoc.getElementsByTagName('image')[0].childNodes[0].nodeValue;
//         var g_sex=xmlDoc.getElementsByTagName('sex')[0].childNodes[0].nodeValue;
//         var g_level=xmlDoc.getElementsByTagName('level')[0].childNodes[0].nodeValue;
//         document.getElementById('username').innerHTML=g_username;
//         document.getElementById('level').innerHTML=g_level;
//
//     }
// }
