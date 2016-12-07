//
// function MySport() {
//     document.getElementById("health_wode_a").click();
//     // $("#health_wode_a").click();
// }

$(function(){
    $(".atip").tooltip();
    $(".badge").tooltip();
    options={
        delay: { show: 500, hide: 100 },
        trigger:'click',
    };
    $(".optiontip").tooltip(options);
    // var type='get';
    // var infoType='userDetail';
    // sendRequest('./php/restapi.php?type='+type+'&infoType='+infoType,init);
    // send();
});
function userinit(){
    document.getElementById('username').innerHTML=getCookie('username');
    document.getElementById('level').innerHTML=getCookie('level');
    document.getElementById('photo').src=getCookie('image');
    // document.getElementById('myage').innerHTML=getCookie('age');
    // document.getElementById('myloc').innerHTML=getCookie('location');
    // document.getElementById('mysig').innerHTML=getCookie('signature');
    // document.getElementById('myhob').innerHTML=getCookie('hobby');
    // friendinit();
    // document.getElementById('weight').placeholder=getCookie('weight');
    // document.getElementById('height').placeholder=getCookie('height');
}
function healthinit(){
    document.getElementById('weight').placeholder=getCookie('weight');
    document.getElementById('height').placeholder=getCookie('height');
    var bmi_data=(getCookie('weight')/Math.pow(getCookie('height')/100,2)).toFixed(1);
    document.getElementById('bmi').innerHTML=bmi_data;
    var bmilist=new Array(35.0,30.0,27.9,24,18.5,0);
    var condition=new Array("重度肥胖","中度肥胖","轻度肥胖","超重","正常","偏轻");
    var color=new Array("red","red","blue","blue","green","orange");
    for(var i=0;i<bmilist.length;i++){
        if(bmi_data>=bmilist[i]){
            document.getElementById('condition').innerHTML=condition[i];
            document.getElementById('condition').style.color=color[i];
            break;
        }
    }
    var ideal_weight=(22*Math.pow(getCookie('height')/100,2)).toFixed(1);
    document.getElementById('ideal_weight').innerHTML=ideal_weight;
    if(ideal_weight<getCookie('weight')){
        document.getElementById('needed_calorie').innerHTML=0;
    }else{
        document.getElementById('needed_calorie').innerHTML=(7700*(ideal_weight-getCookie('weight'))).toFixed(0);
    }



}
// body onload="init()";
// alert('1');
// alert(getCookie("username"));
// function send() {
//     var type='get';
//     var infoType='userDetail';
//     var username=getCookie("username");
//     sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,init);
// }
//
// function init() {
//     if (http_request.readyState == 4 && http_request.status == 200){
//         // console.log(http_request.responseText);
//         // alert(http_request.responseText);
//         var xmlDoc=http_request.responseXML;
//         document.getElementById('username').innerHTML=xmlDoc.getElementsByTagName('name')[0].childNodes[0].nodeValue;
//         document.getElementById('level').innerHTML=xmlDoc.getElementsByTagName('level')[0].childNodes[0].nodeValue;
//         document.getElementById('photo').src=xmlDoc.getElementsByTagName('image')[0].childNodes[0].nodeValue;
//
//     }
//
// }

// document.getElementById('photo').src=g_image;
// document.getElementById('identity').innerHTML=g_image;


