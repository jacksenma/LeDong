<?php

/**
 * Created by PhpStorm.
 * User: user
 * Date: 2016/12/1
 * Time: 下午 06:54
 */
class ActivityService
{
    function organizeActivity($organizer,$name,$acType,$introduction,$start,$end,$credit,$condition){
        $image="img/pic03.jpg";
        $id=DBUtils::querySingle('SELECT id FROM activity ORDER BY id DESC')+1;
        $organizerId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$organizer.'"');
        DBUtils::execute('INSERT INTO activity VALUES ('.$id.',"'.$name.'"'.',"'.$organizerId.'"'.',"'.$credit.'"'.',"'.$condition.'"'.',"'.$image.'"'.',"'.$introduction.'"'.',"'.$start.'"'.',"'.$end.'"'.',"'.$acType.'"'.')');
        return $id;
    }
    function getAcField(){
        $result=DBUtils::queryList('SELECT activity.*,count(userId) AS total FROM activity,myActivity WHERE id=activityId GROUP BY activityId');
        return $result;
    }
    function isAdded($username,$acId){
        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        $count=DBUtils::count('SELECT userId FROM myActivity WHERE userId='.$userId.' AND activityId='.$acId);
        return $count;
    }
    function addAc($username,$acId){
        $step=0;
        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        DBUtils::execute('INSERT INTO myActivity VALUES('.$userId.','.$acId.','.$step.')');
    }
    function getAcList($acId){
        $result=DBUtils::queryList('SELECT name,step FROM user,myActivity WHERE activityId='.$acId.' AND userId=id');
        return $result;
    }
    function getMyAc($username){
        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        $result=DBUtils::queryList('SELECT activity.*,count(userId) AS total FROM activity,myActivity WHERE id=activityId AND activityId IN (SELECT activityId FROM myActivity WHERE userId='.$userId.')GROUP BY activityId');
        return $result;
    }
    function modifyActivity($organizer,$name,$acType,$introduction,$start,$end,$credit,$condition,$acId){
        $image="img/pic03.jpg";
//        $id=DBUtils::count('SELECT count(*) FROM activity')+1;
        DBUtils::execute('DELETE FROM activity WHERE id = '.$acId);
        $organizerId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$organizer.'"');
        DBUtils::execute('INSERT INTO activity VALUES ('.$acId.',"'.$name.'"'.',"'.$organizerId.'"'.',"'.$credit.'"'.',"'.$condition.'"'.',"'.$image.'"'.',"'.$introduction.'"'.',"'.$start.'"'.',"'.$end.'"'.',"'.$acType.'"'.')');

    }

    function deleteMyActivity($username,$acId){
        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        DBUtils::execute('DELETE FROM myActivity WHERE activityId = '.$acId.' AND userId='.$userId);
    }
    function deleteActivity($username,$acId){
//        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        DBUtils::execute('DELETE FROM activity WHERE id = '.$acId);
    }
}