document.getElementById("id1_a").click();
function faqi() {
    // alert(getCookie('level'));
    if(getCookie('level')>=5)
        document.getElementById("faqi").click();
    else
        alert('等级不小于5级才可以发起一个活动哦');

}

// var pul=document.getElementById('acul');
// var count=pul.childElementCount;
// alert(count);
function addButton(flag) {
    var acul=document.getElementById('acul');
    acul.removeChild(acul.children[4]);
    var li=document.createElement('li');
    var b=document.createElement('button');
    li.className='more_mo';
    b.className='more_button';
    acul.appendChild(li);
    li.appendChild(b);
    if(flag=='field'){
        b.innerHTML='确定加入';
        b.onclick=function () {

        }
    }else if(flag=='myActivity'){
        b.innerHTML='修改活动';
        b.onclick=function () {

        }
    }
}
//全部初始化
function allInit() {
    userinit();
    acInit();
    // myAcInit();
    // setTimeout(myAcInit(),800);
}
//初始化活动场
function acInit() {
    clearAcField('field');
    var type='get';
    var infoType='acField';
    sendRequest('./php/restapi.php?type='+type+'&infoType='+infoType,acInitManage);

}
function myAcInit() {
    // addButton('myActivity');
    clearAcField('myActivity');
    var type='get';
    var infoType='myAc';
    var username=getCookie('username');
    sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,myAcInitManage);
}
function myAcInitManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        var xmlDoc=http_request.responseXML;
        var field=document.getElementById('myActivity');
        for(var i=0;i<xmlDoc.getElementsByTagName('name').length;i++){
            var name=xmlDoc.getElementsByTagName('name')[i].childNodes[0].nodeValue;
            var credit=xmlDoc.getElementsByTagName('credit')[i].childNodes[0].nodeValue;
            // var condition=xmlDoc.getElementsByTagName('condition')[i].childNodes[0].nodeValue;
            var image=xmlDoc.getElementsByTagName('image')[i].childNodes[0].nodeValue;
            var introduction=xmlDoc.getElementsByTagName('introduction')[i].childNodes[0].nodeValue;
            var start=xmlDoc.getElementsByTagName('start')[i].childNodes[0].nodeValue;
            var end=xmlDoc.getElementsByTagName('end')[i].childNodes[0].nodeValue;
            var type=xmlDoc.getElementsByTagName('type')[i].childNodes[0].nodeValue;
            var total=xmlDoc.getElementsByTagName('total')[i].childNodes[0].nodeValue;
            var acId=xmlDoc.getElementsByTagName('id')[i].childNodes[0].nodeValue;
            var organizerId=xmlDoc.getElementsByTagName('organizerId')[i].childNodes[0].nodeValue;
            var d1 = new Date(start);
            var d2 = new Date(end);
            var today = new Date();
            var condition;
            if(d1.getTime() > today.getTime()){
                condition='未开始';
            }
            else if(d1.getTime() <= today.getTime()){
                condition='进行中';
            }
            if(d2.getTime() >= today.getTime()){
                field.appendChild(createAc(organizerId,name,start,end,introduction,type,total,condition,credit,image,acId,'myActivity'));
            }

        }
    }
}
function acInitManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        var xmlDoc=http_request.responseXML;
        var field=document.getElementById('field');
        for(var i=0;i<xmlDoc.getElementsByTagName('name').length;i++){
            var name=xmlDoc.getElementsByTagName('name')[i].childNodes[0].nodeValue;
            var credit=xmlDoc.getElementsByTagName('credit')[i].childNodes[0].nodeValue;
            // var condition=xmlDoc.getElementsByTagName('condition')[i].childNodes[0].nodeValue;
            var image=xmlDoc.getElementsByTagName('image')[i].childNodes[0].nodeValue;
            var introduction=xmlDoc.getElementsByTagName('introduction')[i].childNodes[0].nodeValue;
            var start=xmlDoc.getElementsByTagName('start')[i].childNodes[0].nodeValue;
            var end=xmlDoc.getElementsByTagName('end')[i].childNodes[0].nodeValue;
            var type=xmlDoc.getElementsByTagName('type')[i].childNodes[0].nodeValue;
            var total=xmlDoc.getElementsByTagName('total')[i].childNodes[0].nodeValue;
            var acId=xmlDoc.getElementsByTagName('id')[i].childNodes[0].nodeValue;
            var organizerId=xmlDoc.getElementsByTagName('organizerId')[i].childNodes[0].nodeValue;
            var d1 = new Date(start);
            var d2 = new Date(end);
            var today = new Date();
            var condition;
            if(d1.getTime() > today.getTime()){
                condition='未开始';
            }
            else if(d1.getTime() <= today.getTime()){
                condition='进行中';
            }
            if(d2.getTime() >= today.getTime()){
                field.appendChild(createAc(organizerId,name,start,end,introduction,type,total,condition,credit,image,acId,'field'));
            }

        }
        myAcInit();

    }
}
function clearAcField(id) {
    var field=document.getElementById(id);
    var count=field.childElementCount;
    for(var i=0;i<count;i++){
        field.removeChild(field.children[0]);
    }
}
function organize() {
    // alert(getCookie('level'));
    var organizer=getCookie('username');
    var name=document.getElementById('ac_name').value;
    var acType=document.getElementById('ac_type').value;
    var introductin=document.getElementById('ac_introduction').value;
    var start=document.getElementById('ac_start').value;
    var end=document.getElementById('ac_end').value;
    var credit=document.getElementById('ac_credit').value;
    var condition;
    var re = /^(0|\+?[1-9][0-9]*)$/;
    if(organizer==""||name==""||acType==""||introductin==""||start==""||end==""||credit==""){
        alert("请完整填写信息");
    }
    else if( re.test(credit)==false){
        alert("积分必须是不小于0的整数");
    }
    else{
        var d1 = new Date(start);
        var d2 = new Date(end);
        var today = new Date();
        if(d1.getTime() > d2.getTime()){
            alert("结束日期不可早于开始日期");
        }
        else if(d2.getTime()<today.getTime()){
            alert("结束日期不可早于今天的日期");
        }
        else{
            if(d1.getTime() > today.getTime())
                condition="未开始";
            else
                condition="进行中";
            var type='post';
            var infoType='organize';

            sendRequest('./php/restapi.php?type='+type+'&organizer='+organizer+'&name='+name+'&acType='+acType+'&introduction='+introductin+'&start='+start+'&end='+end+'&credit='+credit+'&condition='+condition+'&infoType='+infoType,organizeManager);
        }

    }
}
function organizeManager() {
    if (http_request.readyState == 4 && http_request.status == 200){
        alert("成功发起");
        document.getElementById("reset").click();
        addMyAc(http_request.responseText);
        acInit();

    }
}

function modify() {
    var organizer=getCookie('username');
    var name=document.getElementById('mac_name').value;
    var acType=document.getElementById('mac_type').value;
    var introductin=document.getElementById('mac_introduction').value;
    var start=document.getElementById('mac_start').value;
    var end=document.getElementById('mac_end').value;
    var credit=document.getElementById('mac_credit').value;
    var condition;
    if(organizer==""||name==""||acType==""||introductin==""||start==""||end==""||credit==""){
        alert("请完整填写信息");
    }
    else{
        var d1 = new Date(start);
        var d2 = new Date(end);
        var today = new Date();
        if(d1.getTime() > d2.getTime()){
            alert("结束日期不可早于开始日期");
        }
        else if(d2.getTime()<today.getTime()){
            alert("结束日期不可早于今天的日期");
        }
        else{
            if(d1.getTime() > today.getTime())
                condition="未开始";
            else
                condition="进行中";
            var type='put';
            var infoType='modifyAc';

            sendRequest('./php/restapi.php?type='+type+'&organizer='+organizer+'&name='+name+'&acType='+acType+'&introduction='+introductin+'&start='+start+'&end='+end+'&credit='+credit+'&condition='+condition+'&acId='+getCookie('acId')+'&infoType='+infoType,modifyManager);
        }

    }
}

function modifyManager() {
    if (http_request.readyState == 4 && http_request.status == 200){
        alert('修改成功');
        // acInit();
        myAcInit();
        acInit();
    }
}

// function createAc(organizerId,name,start,end,introduction,acType,total,condition,credit,image,acId,flag) {
//     var ac = document.createElement('div');
//     ac.className='ac_field';
//     // ac.id=acId;
//     var ul1=document.createElement('ul');
//     ac.appendChild(ul1);
//     var li1=document.createElement('li');
//     li1.className='ac_img';
//     li1.innerHTML='<img class="img_detail" src='+image+">";
//     ul1.appendChild(li1);
//     var li2=document.createElement('li');
//     li2.className='ac_describ';
//     ul1.appendChild(li2);
//     var ul2=document.createElement('ul');
//     li2.appendChild(ul2);
//     var li3=document.createElement('li');
//     li3.className='ac_title';
//     var li4=document.createElement('li');
//     li4.className='ac_group';
//     var li5=document.createElement('li');
//     li5.className='ac_time';
//     var li6=document.createElement('li');
//     li6.className='ac_detail';
//     ul2.appendChild(li3);
//     ul2.appendChild(li4);
//     ul2.appendChild(li5);
//     ul2.appendChild(li6);
//     var span1=document.createElement('span');
//     span1.className='ac_kind';
//     var span2=document.createElement('span');
//     span2.className='ac_num';
//     var span3=document.createElement('span');
//     span3.className='ac_condition';
//     var span4=document.createElement('span');
//     span4.className='ac_score';
//     li4.appendChild(span1);
//     li4.appendChild(span2);
//     li4.appendChild(span3);
//     li4.appendChild(span4);
//     var li7=document.createElement('li');
//     li7.className='more';
//     var li8=document.createElement('li');
//     li8.className='more';
//     li7.appendChild(li8);
//     // li8.innerHTML='<button class="more_button" onclick="" data-toggle="modal" data-target="#hd">我要参加</button>';
//     // li8.innerHTML='<button class="more_button" onclick="join(1)">我要参加</button>';
//     li3.innerHTML=name;
//     li5.innerHTML=start+" ~ "+end;
//     li6.innerHTML=introduction;
//     var kind;
//     if(acType==1){
//         kind=' 单人PK ';
//         span2.innerHTML=total+"/2 ";
//     }
//
//     else{
//         kind=' 多人竞赛 ';
//         span2.innerHTML=total+'  ';
//     }
//     span1.innerHTML=kind+' ';
//     span3.innerHTML=condition+'  ';
//     span4.innerHTML=credit+'积分';
//     ul1.appendChild(li7);
//     var b=document.createElement('button');
//     b.className='more_button';
//     if(flag=='field'){
//         // addButton('field');
//         b.innerHTML='我要参加';
//         b.onclick=function(){
//             document.getElementById('f_img').src=image;
//             document.getElementById('f_title').innerHTML=name;
//             document.getElementById('f_kind').innerHTML=kind;
//             document.getElementById('f_time').innerHTML=start+" ~ "+end;
//             document.getElementById('f_introduction').innerHTML=introduction;
//             var bu=document.getElementById('join');
//             bu.innerHTML='确定加入';
//             //请求访问参与者及其步数列表
//             clearAcList();
//             var type='get';
//             var infoType='acList';
//             sendRequest('./php/restapi.php?type='+type+'&acId='+acId+'&infoType='+infoType,acListManage);
//             //弹出模态框
//             var m=document.getElementsByName('acField')[0];
//             m.id=acId;
//             $('#'+acId).modal('toggle');
//         }
//     }
//     else if(flag=='myActivity'){
//         b.innerHTML='查看详情';
//         b.onclick=function(){
//             document.getElementById('m_img').src=image;
//             document.getElementById('m_title').innerHTML=name;
//             document.getElementById('m_kind').innerHTML=kind+'aas';
//             document.getElementById('m_time').innerHTML=start+" ~ "+end;
//             document.getElementById('m_introduction').innerHTML=introduction;
//             // alert(organizerId);
//             // alert(getCookie('userId'));
//             var bu=document.getElementById('xiugai');
//             if(organizerId==getCookie('userId'))
//                 bu.innerHTML='修改活动';
//             else{
//                 bu.innerHTML='中途退出';
//             }
//             // addButton(flag)
//             //请求访问参与者及其步数列表
//             clearAcList();
//             var type='get';
//             var infoType='acList';
//             sendRequest('./php/restapi.php?type='+type+'&acId='+acId+'&infoType='+infoType,acListManage);
//             // var p_list=document.getElementById('p_list');
//             //弹出模态框
//             var m=document.getElementsByName('myAc')[0];
//             m.id=acId;
//             $('#'+acId).modal('toggle');
//         }
//         // addButton('myActivity');
//     }
//         // b.innerHTML='查看详情';
//     li8.appendChild(b);
//     return ac;
// }

//
function createAc(organizerId,name,start,end,introduction,acType,total,condition,credit,image,acId,flag) {
    var de=document.getElementById('delete');
    de.style.display="none";
    var ac = document.createElement('div');
    ac.className='ac_field';
    // ac.id=acId;
    var ul1=document.createElement('ul');
    ac.appendChild(ul1);
    var li1=document.createElement('li');
    li1.className='ac_img';
    li1.innerHTML='<img class="img_detail" src='+image+">";
    ul1.appendChild(li1);
    var li2=document.createElement('li');
    li2.className='ac_describ';
    ul1.appendChild(li2);
    var ul2=document.createElement('ul');
    li2.appendChild(ul2);
    var li3=document.createElement('li');
    li3.className='ac_title';
    var li4=document.createElement('li');
    li4.className='ac_group';
    var li5=document.createElement('li');
    li5.className='ac_time';
    var li6=document.createElement('li');
    li6.className='ac_detail';
    ul2.appendChild(li3);
    ul2.appendChild(li4);
    ul2.appendChild(li5);
    ul2.appendChild(li6);
    var span1=document.createElement('span');
    span1.className='ac_kind';
    var span2=document.createElement('span');
    span2.className='ac_num';
    var span3=document.createElement('span');
    span3.className='ac_condition';
    var span4=document.createElement('span');
    span4.className='ac_score';
    li4.appendChild(span1);
    li4.appendChild(span2);
    li4.appendChild(span3);
    li4.appendChild(span4);
    var li7=document.createElement('li');
    li7.className='more';
    var li8=document.createElement('li');
    li8.className='more';
    li7.appendChild(li8);
    // li8.innerHTML='<button class="more_button" onclick="" data-toggle="modal" data-target="#hd">我要参加</button>';
    // li8.innerHTML='<button class="more_button" onclick="join(1)">我要参加</button>';
    li3.innerHTML=name;
    li5.innerHTML=start+" ~ "+end;
    li6.innerHTML=introduction;
    var kind;
    // alert(total);
    if(acType==1){
        kind=' 单人PK ';
        span2.innerHTML=total+"/2 ";
    } else{
        kind=' 多人竞赛 ';
        span2.innerHTML=total+'  ';
    }
    span1.innerHTML=kind+' ';
    span3.innerHTML=condition+'  ';
    span4.innerHTML=credit+'积分';
    ul1.appendChild(li7);
    var b=document.createElement('button');
    b.className='more_buttone';

    if(flag=='field'){
        b.innerHTML='我要参加';
        b.onclick=function(){
            document.getElementById('f_img').src=image;
            document.getElementById('f_title').innerHTML=name;
            document.getElementById('f_kind').innerHTML=kind;
            document.getElementById('f_time').innerHTML=start+" ~ "+end;
            document.getElementById('f_introduction').innerHTML=introduction;
            var bu=document.getElementById('join');
            bu.innerHTML='确定加入';
            bu.onclick=function () {
                if(acType==1&&total==1){
                    alert('人数已满');
                }
                else{
                    addMyAc(acId);
                }

            }
            clearAcList();
            var type='get';
            var infoType='acList';
            sendRequest('./php/restapi.php?type='+type+'&acId='+acId+'&infoType='+infoType,acListManage);
            var m=document.getElementsByName('acField')[0];
            m.id=acId;
            $('#'+acId).modal('toggle');
        }
    }
    else if(flag=='myActivity'){
        b.innerHTML='查看详情';
        b.onclick=function(){
            document.getElementById('f_img').src=image;
            document.getElementById('f_title').innerHTML=name;
            document.getElementById('f_kind').innerHTML=kind;
            document.getElementById('f_time').innerHTML=start+" ~ "+end;
            document.getElementById('f_introduction').innerHTML=introduction;
            var bu=document.getElementById('join');
            if(organizerId==getCookie('userId')){
                bu.innerHTML='修改活动';
                var de=document.getElementById('delete');
                de.style.display="block";
                bu.onclick=function () {
                    // document.getElementById('send').click();
                    document.getElementById('close').click();
                    document.getElementById('qqmodify').click();
                    setCookie('acId',acId);

                }
                de.onclick=function () {
                    deleteMyAc(acId);
                    deleteAc(acId);
                }
            }

            else{
                var de=document.getElementById('delete');
                de.style.display="none";
                bu.innerHTML='中途退出';
                bu.onclick=function () {
                    // alert(acId);
                    deleteMyAc(acId);
                    deleteAc(acId);
                }
            }
            clearAcList();
            var type='get';
            var infoType='acList';
            sendRequest('./php/restapi.php?type='+type+'&acId='+acId+'&infoType='+infoType,acListManage);
            var m=document.getElementsByName('acField')[0];
            m.id=acId;
            $('#'+acId).modal('toggle');
        }
        // addButton('myActivity');
    }
    // b.innerHTML='查看详情';
    li8.appendChild(b);
    return ac;
}
function deleteMyAc(acId) {
    var type='delete';
    var infoType='deleteMyAc';
    var username=getCookie('username');
    sendRequest('./php/restapi.php?type='+type+'&acId='+acId+'&username='+username+'&infoType='+infoType,deleteMyAcManage);
}
function deleteMyAcManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        document.getElementById('close').click();
        myAcInit();
    }

}

function deleteAc(acId) {
    var type='delete';
    var infoType='deleteAc';
    var username=getCookie('username');
    sendRequest('./php/restapi.php?type='+type+'&acId='+acId+'&username='+username+'&infoType='+infoType,deleteAcManage);
}
function deleteAcManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        alert('删除成功');
        document.getElementById('close').click();
        myAcInit();
        acInit();
    }

}

function acListManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // alert(http_request);
        clearAcList();
        var xmlDoc=http_request.responseXML;
        var pul=document.getElementById('p_list');
        for(var i=0;i<xmlDoc.getElementsByTagName('name').length;i++){
            var name=xmlDoc.getElementsByTagName('name')[i].childNodes[0].nodeValue;
            var step=xmlDoc.getElementsByTagName('step')[i].childNodes[0].nodeValue;
            pul.appendChild(createJoinedLi(name,step));
        }
        // var mpul=document.getElementById('mp_list');
        // for(var i=0;i<xmlDoc.getElementsByTagName('name').length;i++){
        //     var name=xmlDoc.getElementsByTagName('name')[i].childNodes[0].nodeValue;
        //     var step=xmlDoc.getElementsByTagName('step')[i].childNodes[0].nodeValue;
        //     mpul.appendChild(createJoinedLi(name,step));
        // }
    }
}

function clearAcList() {
    var pul=document.getElementById('p_list');
    var count=pul.childElementCount;
    for(var i=0;i<count;i++){
        pul.removeChild(pul.children[0]);
    }
    // var mpul=document.getElementById('mp_list');
    // var mcount=pul.childElementCount;
    // for(var i=0;i<mcount;i++){
    //     mpul.removeChild(mpul.children[0]);
    // }
}
//创建参与者和参与者步数
function createJoinedLi(name,step) {
    // var pul=document.getElementById('p_list');
    var li=document.createElement('li');
    var a=document.createElement('a');
    var span=document.createElement('span');
    a.innerHTML=name;
    span.innerHTML="       "+step+"  步";
    li.appendChild(a);
    li.appendChild(span);
    return li;
}
function addMyAc(acId) {
    // alert('in addMyac');
    var username=getCookie('username');
    var type='post';
    var infoType='addMyAc';
    sendRequest('./php/restapi.php?type='+type+'&username='+username+'&acId='+acId+'&infoType='+infoType,addMyAcManage);
}
function addMyAcManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // alert(http_request.responseText);
        document.getElementById('close').click();
        if(http_request.responseText=='no'){
            // document.getElementById('close').click();
            alert('你已经加入过此活动啦！');
        }else{

            alert('加入成功！');
            // acInit();
            myAcInit();

        }
    }
}