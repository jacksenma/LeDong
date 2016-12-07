
document.getElementById("follow_click").click();
// alert(document.getElementById("id1_aa"));
function exitCircle(id) {
    document.getElementById('c'+id).style.display='none';
}

function friendinit() {

    var type='get';
    var infoType='getfriend';
    var id=getCookie('userId');
    sendRequest('./php/restapi.php?type='+type+'&id='+id+'&infoType='+infoType,friendinitManage);
}
function friendinitManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // alert(http_request.responseText);
        var xmlDoc=http_request.responseXML;
        var flist=document.getElementById('ranking_list');
        for(var i=0;i<xmlDoc.getElementsByTagName('name').length;i++){
            var name=xmlDoc.getElementsByTagName('name')[i].childNodes[0].nodeValue;
            var image=xmlDoc.getElementsByTagName('image')[i].childNodes[0].nodeValue;
            flist.appendChild(createFriend(i+1,name,image));
        }
    }
    userinit();
}

 function createFriend(i,name,image){
    var section=document.createElement('section');
     section.className='box';
     var section1=document.createElement('section');
     section1.className='col_1';

     var section2=document.createElement('section');
     section2.className='col_2';
     section2.innerHTML='<img src="img/banner.jpg"  />';

     var section3=document.createElement('section');
     section3.className='col_3';
     var a=document.createElement('a');
     section3.appendChild(a);
     a.id='s3';
     var section4=document.createElement('section');
     section4.className='col_4';
     var b=document.createElement('button');
     b.className='btn btn-info btn-block';
     b.innerHTML='删除好友';
     b.onclick=function () {
         // alert(name);
         deleteFriend(name);
     }

     section4.appendChild(b);
     section.appendChild(section1);
     section.appendChild(section2);
     section.appendChild(section3);
     section.appendChild(section4);
     section1.innerHTML=i;
     a.innerHTML=name;
     return section;
}
function deleteFriend(name) {
    var type='delete';
    var infoType='deleteFriend';
    // var fname=getCookie('name');
    var userId=getCookie('userId');
    sendRequest('./php/restapi.php?type='+type+'&userId='+userId+'&fname='+name+'&infoType='+infoType,deleteFriendManage);
}
function deleteFriendManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        clearFriend();
        friendinit();
    }
}

function clearFriend() {
    var pul=document.getElementById('ranking_list');
    var count=pul.childElementCount;
    for(var i=0;i<count;i++){
        pul.removeChild(pul.children[0]);
    }
}