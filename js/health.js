$(function () {
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
                            {name:'还差/步', value:100, itemStyle : labelBottom},//10%
                            {name:'共走/步', value:200,itemStyle : labelTop}//90%
                        ]
                    }

                ]
            };


            // 为echarts对象加载数据
            run.setOption(option);

            sleepChart();
            sleepGraph();
            // sleep.setOption(option);
        }
    );


});

function sleepChart() {
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
                            {name: '浅度睡眠/小时', value: 4.8, itemStyle: labelBottom},//10%
                            {name: '深度睡眠/小时', value: 2.1, itemStyle: labelTop}//90%
                        ]
                    }

                ]
            };


            // 为echarts对象加载数据
            sleep.setOption(option);
        }
    );


}
function sleepGraph() {
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
                    data : ['22:30','23:00','23:30','00:00','00:30','01:00','01:30',
                        '02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30']
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
                    data:[4.3,4.2,3.7,2.6,3.8,3.4,1.9,1.6,1.4,1.9,3.7,3.9,4.5,4.8,5]
                }
            ]
        };



        // 为echarts对象加载数据
        sleep.setOption(option);

    }
    );


}
