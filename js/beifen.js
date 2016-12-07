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
            var type='get';
            var infoType='userDetail';
            alert('1');
            sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,setGlobal);
            // alert('2');
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
function setGlobal() {
    if (http_request.readyState == 4 && http_request.status == 200){
        alert(http_request.responseText);
        var detail=http_request.responseText;
        // g_username=detail['name'];
        // g_level=detail['level'];
        // g_sex=detail['sex'];
        // g_image=detail['image'];
        alert(g_username);
    }
    // alert(http_request.responseText);
}
