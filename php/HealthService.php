<?php

/**
 * Created by PhpStorm.
 * User: fjj
 * Date: 16-10-31
 * Time: 下午8:57
 */
class HealthService
{
    function getUserHealth($username){
        //数据库操作
//        return("ID=1&username=aaa&height=170cm&weight=50kg&datetime=2016-01-23");
        return array("ID"=>"1","username"=>"aaa","height"=>"160","weight"=>"105","dateTime"=>"2016-01-23,2016-01-24,2016-01-25");
//        return ;
    }
}