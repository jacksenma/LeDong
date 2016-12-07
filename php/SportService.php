<?php

/**
 * Created by PhpStorm.
 * User: user
 * Date: 2016/11/28
 * Time: 下午 09:29
 */
class SportService
{
    function getYesSport($username,$date){
//        $result=DBUtils::queryRow('SELECT distance,time,calorie,step,goal FROM user,mySport WHERE name='.'"'.$username.'"'.'AND id=userId');
        $result=DBUtils::queryRow('SELECT * FROM user,mySport WHERE name='.'"'.$username.'"'.'AND id=userId AND date='.'"'.$date.'"');
        return $result;
}
    function getSumSport($username){
        $result=DBUtils::queryRow('SELECT sum(distance) AS distance,count(*) AS time,sum(calorie) AS calorie FROM user,mySport WHERE name='.'"'.$username.'"'.'AND id=userId');
        return $result;
    }
}