
// alert(document.getElementById("health_wode_a"));
// sendRequest('./php/restapi.php?type='+'get'+'&username=mike'+'&infoType='+'yesSport',yesSport);
// function yesSport() {
//     if (http_request.readyState == 4 && http_request.status == 200){
//         var xmlDoc=http_request.responseXML;
//         console.log(xmlDoc);
//         document.getElementById('dist').innerHTML=xmlDoc.getElementsByTagName('distance')[0].childNodes[0].nodeValue;
//         document.getElementById('hour').innerHTML=xmlDoc.getElementsByTagName('time')[0].childNodes[0].nodeValue;
//         document.getElementById('calo').innerHTML=xmlDoc.getElementsByTagName('calorie')[0].childNodes[0].nodeValue;
//         document.getElementById('step').innerHTML=xmlDoc.getElementsByTagName('step')[0].childNodes[0].nodeValue;
//     }
//
// }
function chartInit() {


    document.getElementById("health_wode_a").click();
    // document.getElementById("health_wode_a").click();

    // 路径配置

    // 路径配置
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });

    // 使用
    require(
        [
            'echarts',
            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var run = ec.init(document.getElementById('run'));


//样式
            var labelFromatter = {
                normal : {
                    label : {
                        formatter : function (params){
                            // 显示百分比
                            // return 100 - params.value + '%'
                            //显示步数
                            return params.value
                        },
                        textStyle: {
                            baseline : 'top',
                            // font-size:18px,
                            fontSize:18
                        }
                    }
                },
            }
            var labelTop = {
                normal : {
                    label : {
                        show : true,
                        position : 'center',
                        formatter : '{d}'+'%',
                        textStyle: {
                            baseline : 'bottom'
                        }
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }

            };
            var labelBottom = {
                normal : {
                    color: '#ccc',
                    label : {
                        // show : false,//显示具体步数
                        position : 'center',
                        formatter : ' ',
                    },
                    labelLine : {
                        show : false
                    }

                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var labelq = {
                normal : {
                    color: '#ccc',
                    label : {
                        // show : false,//显示具体步数
                        position : 'center',
                        formatter : '',
                    },
                    labelLine : {
                        show : false
                    }

                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var radius = [55, 75];//图片大小，[内圈半径，外圈半径]
            var option = {
                legend: {
                    x : 'center',
                    y : 'center',
                    data:[
                        //图例
                    ]
                },
                title : {
                    // text: 'The App World',
                    // subtext: 'from global web index',
                    // x: 'center'
                },
                toolbox: {
                    show : true,

                    feature : {
                        // dataView : {show: true, readOnly: false},
                        magicType : {
                            // show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    width: '20%',
                                    height: '30%',
                                    itemStyle : {
                                        normal : {
                                            label : {
                                                formatter : function (params){
                                                    return 'other\n' + params.value + '%\n'
                                                },
                                                textStyle: {
                                                    baseline : 'middle'
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        },
                        // restore : {show: true},
                        // saveAsImage : {show: true}
                    }
                },
                animation:true,
                tooltip : {         // 提示框. Can be overwrited by series or data
                    trigger: 'axis',
                    //show: true,   //default true
                    showDelay: 0,
                    hideDelay: 10,
                    transitionDuration:50,
                    borderRadius : 4,
                    borderWidth: 1,
                    padding: 2,    // [5, 10, 15, 20]
                },
                series : [
                    {
                        type : 'pie',
                        center : ['25%', '45%'],//图片位置
                        radius : radius,
                        y: '55%',   // for funnel
                        x:'80%', // for funnel
                        itemStyle : labelFromatter,
                        // itemStyle : graphStyleB=='labelTop'?labelTop:labelFromatter,//graphStyleB,// 当查到的数据不存在（并非为0），此属性隐藏
                        tooltip : {             // Series config.
                            trigger: 'aixs',
                            position:['100%','100%'],
                            backgroundColor: 'rgba(197,196,222,0.6)',
                            borderWidth :0,
                            textStyle:{
                                color:'black'
                            },
                            // formatter: '全流程服务时长2小时内达标'
                        },
                        data : [
                            {name:'目标完成度', value:'', itemStyle : labelq},//10%
                            {name:'还差/步', value:getCookie("goal")-getCookie("step"), itemStyle : labelBottom},//10%
                            {name:'共走/步', value:getCookie("step"),itemStyle : labelTop}//90%
                        ]
                    }

                ]
            };


            // 为echarts对象加载数据
            run.setOption(option);

            sleepChart();
            sleepGraph();
            // weight();
            setTimeout(up,1000);
            // up();
            // sleep.setOption(option);
        }
    );


};

function sleepChart(deep,qian) {
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });

    // 使用
    require(
        [
            'echarts',
            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            // var run = ec.init(document.getElementById('run'));
            var sleep = ec.init(document.getElementById('sleep'));
//样式
            var labelFromatter = {
                normal: {
                    label: {
                        formatter: function (params) {
                            // 显示百分比
                            // return 100 - params.value + '%'
                            //显示步数
                            return params.value
                        },
                        textStyle: {
                            baseline: 'top',
                            // font-size:18px,
                            fontSize: 18
                        }
                    }
                },
            }
            var labelTop = {
                normal: {
                    label: {
                        show: true,
                        position: 'center',
                        formatter: '{d}' + '%',
                        textStyle: {
                            baseline: 'bottom'
                        }
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }

            };
            var labelBottom = {
                normal: {
                    color: '#ccc',
                    label: {
                        // show : false,//显示具体步数
                        position: 'center',
                        formatter: ' ',
                    },
                    labelLine: {
                        show: false
                    }

                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var labelq = {
                normal: {
                    color: '#ccc',
                    label: {
                        // show : false,//显示具体步数
                        position: 'center',
                        formatter: '',
                    },
                    labelLine: {
                        show: false
                    }

                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            var radius = [55, 75];//图片大小，[内圈半径，外圈半径]
            var option = {
                legend: {
                    x: 'center',
                    y: 'center',
                    data: [
                        //图例
                    ]
                },
                title: {
                    // text: 'The App World',
                    // subtext: 'from global web index',
                    // x: 'center'
                },
                toolbox: {
                    show: true,

                    feature: {
                        // dataView : {show: true, readOnly: false},
                        magicType: {
                            // show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    width: '20%',
                                    height: '30%',
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                formatter: function (params) {
                                                    return 'other\n' + params.value + '%\n'
                                                },
                                                textStyle: {
                                                    baseline: 'middle'
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        },
                        // restore : {show: true},
                        // saveAsImage : {show: true}
                    }
                },
                animation: true,
                tooltip: {         // 提示框. Can be overwrited by series or data
                    trigger: 'axis',
                    //show: true,   //default true
                    showDelay: 0,
                    hideDelay: 10,
                    transitionDuration: 50,
                    borderRadius: 4,
                    borderWidth: 1,
                    padding: 2,    // [5, 10, 15, 20]
                },
                series: [
                    {
                        type: 'pie',
                        center: ['25%', '45%'],//图片位置
                        radius: radius,
                        y: '55%',   // for funnel
                        x: '80%', // for funnel
                        itemStyle: labelFromatter,
                        // itemStyle : graphStyleB=='labelTop'?labelTop:labelFromatter,//graphStyleB,// 当查到的数据不存在（并非为0），此属性隐藏
                        tooltip: {             // Series config.
                            trigger: 'aixs',
                            position: ['100%', '100%'],
                            backgroundColor: 'rgba(197,196,222,0.6)',
                            borderWidth: 0,
                            textStyle: {
                                color: 'black'
                            },
                            // formatter: '全流程服务时长2小时内达标'
                        },
                        data: [
                            {name: '深度睡眠', value: '', itemStyle: labelq},//10%
                            {name: '浅度睡眠/小时', value: qian, itemStyle: labelBottom},//10%
                            {name: '深度睡眠/小时', value: deep, itemStyle: labelTop}//90%
                        ]
                    }

                ]
            };


            // 为echarts对象加载数据
            sleep.setOption(option);
        }
    );


}
function sleepGraph(s_time,s_value) {
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });

    // 使用
    require(
        [
            'echarts',
            'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        // var run = ec.init(document.getElementById('run'));
        var sleep = ec.init(document.getElementById('yesterday_sleep_graph'));
//样式
        var option = {
            title : {
                text: '睡眠波动情况',
                subtext: '睡眠指数'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['睡眠指数']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data:s_time
                    // data : ['22:30','23:00','23:30','00:00','00:30','01:00','01:30',
                    //     '02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30']
                }
            ],
            yAxis : [
                {
                    // type : 'value',
                    // type : 'category',
                    // data :['深度睡眠','浅度睡眠','唤醒']
                }
            ],
            series : [
                {
                    name:'睡眠指数',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    // data:[0,0.1,0.2,0.5,0.8,0.4,0.8,0.3,0.2,0.24,0.26,0.5,0.6,0.95,5]
                    // data:[4.3,4.2,3.7,2.6,3.8,3.4,1.9,1.6,1.4,1.9,3.7,3.9,4.5,4.8,5]
                    data:s_value
                }
            ]
        };



        // 为echarts对象加载数据
        sleep.setOption(option);

    }
    );


}

function weight(w_data,w_time) {
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });

    // 使用
    require(
        [
            'echarts',
            'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            // var run = ec.init(document.getElementById('run'));
            var wei = ec.init(document.getElementById('weight_graph'));
//样式
            var option = {
                title : {
                    text: '体重变化情况',
                    subtext: '体重/千克'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['体重']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data:w_time
                        // data : ['2016-10-10','2016-10-11','2016-10-12','2016-10-13','2016-10-14','2016-10-15','2016-10-16',
                        //     '2016-10-17','2016-10-18','2016-10-19','2016-10-20','2016-10-21','2016-10-22','2016-10-23','2016-10-24','2016-10-25','2016-10-26']
                    }
                ],
                yAxis : [
                    {
                        // type : 'value',
                        // type : 'category',
                        // data :['深度睡眠','浅度睡眠','唤醒']
                    }
                ],
                series : [
                    {
                        name:'体重',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        // data:[0,0.1,0.2,0.5,0.8,0.4,0.8,0.3,0.2,0.24,0.26,0.5,0.6,0.95,5]

                        data:w_data
                        // data:[58.3,58.3,58.2,58.2,58.2,58.3,59.0,59.1,59.1,59.1,59.2,59.2,59.2,59.6,59.7,59.6,60.0]
                    }
                ]
            };



            // 为echarts对象加载数据
            wei.setOption(option);
            // yesSend();

        }
    );
}
function yesSend() {
    userinit();
    healthinit();
    var type='get';
    var username=getCookie('username');
    var infoType='yesSport';
    var date='2016-11-30';
    sendRequest('./php/restapi.php?type='+type+'&username='+username+'&date='+date+'&infoType='+infoType,yestSport);
}
function yestSport() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // console.log(http_request.responseText);
        var xmlDoc=http_request.responseXML;
        setCookie("step",xmlDoc.getElementsByTagName('step')[0].childNodes[0].nodeValue);
        setCookie("goal",xmlDoc.getElementsByTagName('goal')[0].childNodes[0].nodeValue);
        document.getElementById('dist').innerHTML=xmlDoc.getElementsByTagName('distance')[0].childNodes[0].nodeValue;
        document.getElementById('hour').innerHTML=xmlDoc.getElementsByTagName('time')[0].childNodes[0].nodeValue;
        document.getElementById('calo').innerHTML=xmlDoc.getElementsByTagName('calorie')[0].childNodes[0].nodeValue;
        document.getElementById('step').innerHTML=xmlDoc.getElementsByTagName('step')[0].childNodes[0].nodeValue;
        chartInit();
        sumSport();
        // allRank();
    }

}
function sumSport() {
    var type='get';
    var username=getCookie('username');
    var infoType='sumSport';
    sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,printSumSport);
}
function printSumSport() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // alert(http_request.responseText);
        var xmlDoc=http_request.responseXML;
        // alert(xmlDoc);
        // document.getElementById()
        document.getElementById('sp_dist').innerHTML=xmlDoc.getElementsByTagName('distance')[0].childNodes[0].nodeValue;
        document.getElementById('sp_time').innerHTML=xmlDoc.getElementsByTagName('time')[0].childNodes[0].nodeValue;
        document.getElementById('sp_calo').innerHTML=xmlDoc.getElementsByTagName('calorie')[0].childNodes[0].nodeValue;
        allRank();
    }

}
function updateWandH() {
    var height;
    var weight
    if(document.getElementById('height').value==''){
        height=getCookie('height');
    }else{
        height=document.getElementById('height').value;
    }

    if(document.getElementById('weight').value==''){
        weight=getCookie('weight');
    }else{
        weight=document.getElementById('weight').value;
    }
    var re = /^(0|\+?[1-9][0-9]*)$/;
    if(re.test(height)==false||re.test(height)==false){
        alert('请输入正确数字');
    }else{
        var type='post';
        var username=getCookie('username');
        var infoType='WandH';
        sendRequest('./php/restapi.php?type='+type+'&username='+username+'&height='+height+'&weight='+weight+'&infoType='+infoType,updateWandH_manage);
    }

    // send();
    // var bmi_data=(getCookie('weight')/Math.pow(getCookie('height')/100,2)).toFixed(1);
    // document.getElementById('bmi').innerHTML=bmi_data;

}
function updateWandH_manage() {
    if (http_request.readyState == 4 && http_request.status == 200){
            send();
            setTimeout(up,800);
        // sleep();
            // setTimeout(sleep,2000);
    }

}
function up() {
    healthinit();
    var type='get';
    var username=getCookie('username');
    var infoType='graph';
    sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,draw);
    // var infoType='getSleep';
    // sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,drawSleep);

}
function draw() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // alert(http_request.responseText);
        // console.log(http_request.responseText);
        var xmlDoc=http_request.responseXML;
        var w_data=new Array();
        var w_time=new Array();
        for(var i=0;i<xmlDoc.getElementsByTagName('weight').length;i++){
            w_data.push(xmlDoc.getElementsByTagName('weight')[i].childNodes[0].nodeValue);
            w_time.push(xmlDoc.getElementsByTagName('date')[i].childNodes[0].nodeValue);
        }
        weight(w_data,w_time);
        sleep();
        // alert(w_data);
        // alert(w_time);


        // setCookie("step",xmlDoc.getElementsByTagName('step')[0].childNodes[0].nodeValue);
        // setCookie("goal",xmlDoc.getElementsByTagName('goal')[0].childNodes[0].nodeValue);
    }
}
function sleep() {
    var type='get';
    var username=getCookie('username');
    var infoType='getSleep';
    sendRequest('./php/restapi.php?type='+type+'&username='+username+'&infoType='+infoType,yesSleep);

}
function yesSleep() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // alert(http_request.responseText);
        var xmlDoc=http_request.responseXML;
        var start=document.getElementById('s_start').innerHTML=xmlDoc.getElementsByTagName('start')[0].childNodes[0].nodeValue;
        var end=document.getElementById('s_end').innerHTML=xmlDoc.getElementsByTagName('end')[0].childNodes[0].nodeValue;
        var deep=document.getElementById('s_deep').innerHTML=xmlDoc.getElementsByTagName('deep')[0].childNodes[0].nodeValue;
        var deeps=xmlDoc.getElementsByTagName('deep')[0].childNodes[0].nodeValue;
        if(deeps>=4){
            document.getElementById('s_quality').innerHTML='高';
        }
        else if(deeps>=2){
            document.getElementById('s_quality').innerHTML='中';
        }
        else{
            document.getElementById('s_quality').innerHTML='低';
        }
        var startHM= new Array(); //定义一数组
        startHM=start.split(":"); //字符分割
        var start_h=startHM[0];
        var start_m=startHM[1];
        var endHM= new Array(); //定义一数组
        endHM=end.split(":"); //字符分割
        var end_h=endHM[0];
        var end_m=endHM[1];
        var h=parseFloat(end_h)-parseFloat(start_h)+24+(parseFloat(end_m)-parseFloat(start_m))/60;
        var qian=(h-deep).toFixed(1);
        sleepChart(deep,qian);
        sleep_graph();
    }


}

//sleep图
function sleep_graph() {
    var type='get';
    var username=getCookie('username');
    var date='2016-11-30';
    var infoType='sleepDetail';
    sendRequest('./php/restapi.php?type='+type+'&username='+username+'&date='+date+'&infoType='+infoType,drawSleepGraph);
}
function drawSleepGraph() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // alert(http_request.responseText);
        var xmlDoc=http_request.responseXML;
        var s_time=new Array();
        var s_value=new Array();
        for(var i=0;i<xmlDoc.getElementsByTagName('time').length;i++){
            s_time.push(xmlDoc.getElementsByTagName('time')[i].childNodes[0].nodeValue);
            s_value.push(xmlDoc.getElementsByTagName('value')[i].childNodes[0].nodeValue);
        }
        // alert(s_time);
        sleepGraph(s_time,s_value);
        // setTimeout(sleepGraph(s_time,s_value),800);
    }
    // sleep_graph(s_time,s_value);
}

function allRank(){
    var type='get';
    var infoType='getAllRank';
    var userId=getCookie('userId');
    sendRequest('./php/restapi.php?type='+type+'&userId='+userId+'&infoType='+infoType,allRankManage);
}
function allRankManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        // alert(http_request.responseText);
        var xmlDoc=http_request.responseXML;
        var flist=document.getElementById('ranking_list');
        for(var i=0;i<xmlDoc.getElementsByTagName('name').length;i++){
            var name=xmlDoc.getElementsByTagName('name')[i].childNodes[0].nodeValue;
            var image=xmlDoc.getElementsByTagName('image')[i].childNodes[0].nodeValue;
            var step=xmlDoc.getElementsByTagName('step')[i].childNodes[0].nodeValue;
            var me;
            if(name==getCookie('username')){
                me=i+1;
                document.getElementById('ranking_title').innerHTML="我的排行： "+me;
            }
            flist.appendChild(createFriend(i+1,name,image,step,me));
        }
    }
}

function friRank(){

}
function friRankManage() {

}

function createFriend(i,name,image,step,me){
    var section=document.createElement('section');


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
    var section5=document.createElement('section');
    section5.className='col_4';
    section5.innerHTML=step+ '步';
    var section4=document.createElement('section');
    section4.className='col_4';
    var b=document.createElement('button');
    b.className='btn btn-info btn-block';
    if(i!=me){
        b.innerHTML='添加好友';
        section.className='box';
    }
    else{
        // b.innerHTML="";
        section.className='box cur';
        b.style.display='none';
    }
    b.onclick=function () {
        // alert(name);
        // deleteFriend(name);
        addFriend(getCookie('userId'),name);
    }

    section4.appendChild(b);
    section.appendChild(section1);
    section.appendChild(section2);
    section.appendChild(section3);
    section.appendChild(section5);
    section.appendChild(section4);

    section1.innerHTML=i;
    a.innerHTML=name;
    return section;
}

function clear(type) {
    var pul=document.getElementById(type);
    var count=pul.childElementCount;
    for(var i=0;i<count;i++){
        pul.removeChild(pul.children[0]);
    }
}
function addFriend(id,friname) {
    var type='post';
    var infoType='addFriend';
    // var userId=getCookie('userId');
    sendRequest('./php/restapi.php?type='+type+'&id='+id+'&friname='+friname+'&infoType='+infoType,addFriendManage);
}
function addFriendManage() {
    if (http_request.readyState == 4 && http_request.status == 200){
        if(http_request.responseText=='no'){
            alert('已经是你的好友了，不必重复添加');
        }else {
            alert('添加成功');

        }
    }
}