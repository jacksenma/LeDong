<?php
include_once('MyDB.php');
/**
 * Created by PhpStorm.
 * User: user
 * Date: 2016/11/24
 * Time: 下午 04:36
 */
$username="mike";
//$date='2016-11-30';
//$height=180;
//$weight=60.5;

//$name='跑步';
//$credit=200;
//$introduction='拉拉阿拉';
//$start='2016-12-01';
//$end='2016-12-07';
//$acType=2;
//$organizer='mike';
//$acId='1';
//$result=DBUtils::queryList('SELECT name,step FROM user,myActivity WHERE activityId='.$acId.' AND userId=id');
//$result=DBUtils::queryList('SELECT activity.*,count(userId) FROM activity,myActivity WHERE id=activityId GROUP BY activityId');
//$result=DBUtils::queryList('SELECT activity.*,count(userId) AS total,userId FROM activity,myActivity WHERE id=activityId GROUP BY activityId');
//$userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
//$result=DBUtils::queryList('SELECT activity.*,count(userId) AS total FROM activity,myActivity WHERE id=activityId AND userId='.$userId.' GROUP BY activityId');
//return $result;
//$acId=1;
//$userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
//$count=DBUtils::count('SELECT id FROM myActivity WHERE userId='.$userId.' AND activityId='.$acId);
//echo $count;
$username='bob';
$uname='bb';
$sex='female';
$age='10';
$loc='安徽省';
$hobby='足球';
$signature='来打我呀';

//$userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
//echo('UPDATE user SET name = '.'"'.$uname.'",'.'sex='.'"'.$sex.'",'.'age='.$age.',location='.'"'.$loc.'",'.'hobby='.'"'.$hobby.'",'.'signature='.'"'.$signature.'" WHERE id='.$userId);
//DBUtils::execute('UPDATE user SET name = '.'"'.$uname.'",'.'sex='.'"'.$sex.'",'.'age='.$age.',loc='.'"'.$loc.'",'.'hobby='.'"'.$hobby.'",'.'signature='.'"'.$signature.'" WHERE id='.$userId);
//return $count;
//$id=16;
//$result=DBUtils::queryList('SELECT name,image FROM friend,user WHERE userId='.$id.' AND friendId=id');
//print_r($result);
$date='2016-11-30';
$result=DBUtils::queryList('SELECT name,image,step FROM mySport,user WHERE date='.'"'.$date.'"'.' ORDER BY step DESC');
//return $result;
print_r($result);
//$username='mike';
//$acId='10';
//$userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
//DBUtils::execute('INSERT INTO myActivity VALUES('.$userId.','.$acId.')');
//echo ('SELECT id FROM user WHERE name='.'"'.$username.'"');
//echo ('INSERT INTO myActivity VALUES('.$userId.','.$acId.')');

//$condition="进行中";
//$image="img/pic03.jpg";
//$id=DBUtils::count('SELECT count(*) FROM activity')+1;
//$organizerId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$organizer.'"');
//DBUtils::execute('INSERT INTO activity VALUES ('.$id.',"'.$name.'"'.',"'.$organizerId.'"'.',"'.$credit.'"'.',"'.$condition.'"'.',"'.$image.'"'.',"'.$introduction.'"'.',"'.$start.'"'.',"'.$end.'"'.',"'.$acType.'"'.')');
//$result=DBUtils::queryRow('SELECT sum(distance) AS distance,count(*) AS time,sum(calorie) AS calorie FROM user,mySport WHERE name='.'"'.$username.'"'.'AND id=userId');
//return $result;
//echo('SELECT time,value FROM sleepDetail WHERE userId='.$userId.' date='.'"'.$date.'"'.' ORDER BY time');
//$userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
//$result=DBUtils::queryList('SELECT time,value FROM sleepDetail WHERE userId='.$userId);
//print_r($result);

//$a='22:30';
//$b='6:40';
//echo $b-$a;
//echo('SELECT distance,time,calorie,step,goal FROM user,mySport WHERE name='.'"'.$username.'"'.' AND id=userId');
//$e=DBUtils::queryRow('SELECT distance,time,calorie,step,goal FROM user,mySport WHERE name='.'"'.$username.'"'.'AND id=userId');
//$result=DBUtils::queryRow('SELECT * FROM user WHERE name='.'"'.$username.'"');
//$result=DBUtils::queryRow('SELECT sum(distance) AS distance,sum(time) AS time,sum(calorie) AS calorie FROM user,mySport WHERE name='.'"'.$username.'"'.'AND id=userId');
//echo print_r($result);
//$userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
//DBUtils::execute('UPDATE weight SET weight='.$weight.' WHERE userId='.$userId.' AND date='.'"'.$time.'"');
////echo ('UPDATE weight SET weight='.$weight.' WHERE userId='.$userId.' AND date='.'"'.$time.'"');
//$userId=16;
//$a=DBUtils::queryList('SELECT weight,date FROM weight WHERE userId='.$userId);
////print_r($a[0]['weight']);
////print_r($a[0]['date']);
////print_r($a[1]);
////print_r($a[2]);
////print_r($a);
////echo 'sdsdsd';
//print_r(create_xml($a));
//
////function create_item($weight)
////{
////    echo 's';
////    $item = "<weight>";
////    $item .= $weight;
////    $item .= "</weight>\n";
////    echo $item;
////    return $item;
////}
////function create_item_d($date)
////{
////    $item = "<date>\n";
////    $item .= $date;
////    $item .= "</date>\n";
////    return $item;
////}
//
//function create_xml($data_array){
////    $title_size = 1;
////    $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!--\n";-->
<!--//    $xml .= "<article>\n";-->
<!--//    $xml.="<item>\n";-->
<!--//    foreach ($data_array as $data) {-->
<!--//        $xml.="<weight>";-->
<!--//        $xml .=($data['weight']);-->
<!--//        $xml.="</weight>\n";-->
<!--//    }-->
<!--//    foreach ($data_array as $data) {-->
<!--//        $xml.="<date>";-->
<!--//        $xml .=($data['date']);-->
<!--//        $xml.="</date>\n";-->
<!--//    }-->
<!--//    $xml .= "</article>\n";-->
<!--//    echo $xml;-->
<!--//    return $xml;-->
<!--//}-->
<!--//echo "articleww";-->
<!--//echo ('UPDATE user SET height = '.$height.',weight='.$weight.' WHERE name='.'"'.$username.'"');-->
<!--//$username="Jack";-->
<!--//$password="123456q";-->
<!--//$count=DBUtils::count('SELECT id FROM user WHERE name='.'\''.$username.'\''.'AND password='.'\''.$password.'\'');-->
<!--////$count=DBUtils::queryRow('SELECT id FROM user WHERE name='.'\''.$username.'\''.'AND password='.'\''.$password.'\'');-->
<!--//echo $count;-->
<!--//echo'INSERT INTO user VALUES (6,"qq1","male","qq1","img/pic.jpg","a","as",20,"as",60,120,20)';-->
<!--//echo '<br>';-->
<!--//$id=1;-->
<!--//$username="1";-->
<!--//$password="ad";-->
<!--////echo 'INSERT INTO user VALUES ('.$id.',"'.$username.'"'.',"male",'.'"'.$password.'"'.',"img/pic.jpg"'.',"as"'.',"as",'.'20'.',"as",'.'60,165,20'.')';-->
<!--////$result=DBUtils::queryRow('SELECT * FROM user WHERE name='.'"'.$username.'"');-->
<!--////print_r($result);-->
<!--//echo (<font size='1'><table class='xdebug-error xe-notice' dir='ltr' border='1' cellspacing='0' cellpadding='1'>-->
<!--//<tr><th align='left' bgcolor='#f57900' colspan="5"><span style='background-color: #cc0000; color: #fce94f; font-size: x-large;'>( ! )</span> Notice: Undefined index: username in D:\wamp64\www\LeDong\php\restapi.php on line <i>308</i></th></tr>-->
<!--//<tr><th align='left' bgcolor='#e9b96e' colspan='5'>Call Stack</th></tr>-->
<!--//<tr><th align='center' bgcolor='#eeeeec'>#</th><th align='left' bgcolor='#eeeeec'>Time</th><th align='left' bgcolor='#eeeeec'>Memory</th><th align='left' bgcolor='#eeeeec'>Function</th><th align='left' bgcolor='#eeeeec'>Location</th></tr>-->
<!--//<tr><td bgcolor='#eeeeec' align='center'>1</td><td bgcolor='#eeeeec' align='center'>0.0018</td><td bgcolor='#eeeeec' align='right'>334912</td><td bgcolor='#eeeeec'>{main}(  )</td><td title='D:\wamp64\www\LeDong\php\restapi.php' bgcolor='#eeeeec'>...\restapi.php<b>:</b>0</td></tr>-->
<!--//</table></font>)-->
<!--//<br />-->
<!--//<font size='1'><table class='xdebug-error xe-notice' dir='ltr' border='1' cellspacing='0' cellpadding='1'>-->
<!--//<tr><th align='left' bgcolor='#f57900' colspan="5"><span style='background-color: #cc0000; color: #fce94f; font-size: x-large;'>( ! )</span> Notice: Undefined index: username in D:\wamp64\www\LeDong\php\restapi.php on line <i>308</i></th></tr>-->
<!--//<tr><th align='left' bgcolor='#e9b96e' colspan='5'>Call Stack</th></tr>-->
<!--//<tr><th align='center' bgcolor='#eeeeec'>#</th><th align='left' bgcolor='#eeeeec'>Time</th><th align='left' bgcolor='#eeeeec'>Memory</th><th align='left' bgcolor='#eeeeec'>Function</th><th align='left' bgcolor='#eeeeec'>Location</th></tr>-->
<!--//<tr><td bgcolor='#eeeeec' align='center'>1</td><td bgcolor='#eeeeec' align='center'>0.0018</td><td bgcolor='#eeeeec' align='right'>334912</td><td bgcolor='#eeeeec'>{main}(  )</td><td title='D:\wamp64\www\LeDong\php\restapi.php' bgcolor='#eeeeec'>...\restapi.php<b>:</b>0</td></tr>-->
<!--//</table></font>-->