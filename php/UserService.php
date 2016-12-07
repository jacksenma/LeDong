<?php
include_once('MyDB.php');

//增加user记录
//for($i=1;$i<5;$i++){
//echo $q=9;
//    var_dump($i);
//    $x1="赵 钱 孙 李 周 吴 郑 王 冯 陈 楮 卫 蒋 沈 韩 杨 朱 秦 尤 许 何 吕 施 张 孔 曹 严 华 金 魏 陶 姜 戚 谢 邹 喻 柏 水 窦 章 云 苏 潘 葛 奚 范 彭 郎 鲁 韦 昌 马 苗 凤 花 方 俞 任 袁 柳 酆 鲍 史 唐 费 廉 岑 薛 雷 贺 倪 汤 滕 殷 罗 毕 郝 邬 安 常 乐 于 时 傅 皮 卞 齐 康 伍 余 元 卜 顾 孟 平 黄 和 穆 萧 尹 姚 邵 湛 汪 祁 毛 禹 狄 米 贝 明 臧 计 伏 成 戴 谈 宋 茅 庞 熊 纪 舒 屈 项 祝 董 梁 杜 阮 蓝 闽 席 季 麻 强 贾 路 娄 危 江 童 颜 郭 梅 盛 林 刁 锺 徐 丘 骆 高 夏 蔡 田 樊 胡 凌 霍 虞 万 支 柯 昝 管 卢 莫 经 房 裘 缪 干 解 应 宗 丁 宣 贲 邓 郁 单 杭 洪 包 诸 左 石 崔 吉 钮 龚 程 嵇 邢 滑 裴 陆 荣 翁 荀 羊 於 惠 甄 麹 家 封 芮 羿 储 靳 汲 邴 糜 松 井 段 富 巫 乌 焦 巴 弓 牧 隗 山 谷 车 侯 宓 蓬 全 郗 班 仰 秋 仲 伊 宫 宁 仇 栾 暴 甘 斜 厉 戎 祖 武 符 刘 景 詹 束 龙 叶 幸 司 韶 郜 黎 蓟 薄 印 宿 白 怀 蒲 邰 从 鄂 万俟 司马 上官 欧阳 夏侯 诸葛 闻人 东方 赫连 皇甫 尉迟 公羊 澹台 公冶 宗政 濮阳 淳于 单于 太叔 申屠 公孙 仲孙 轩辕 令狐 锺离 宇文 长孙 慕容 鲜于 闾丘 司徒 司空 丌官 司寇 仉 督 子车 颛孙 端木 巫马 公西 漆雕 乐正 壤驷 公良 拓拔 夹谷 宰父 谷梁 晋 楚 阎 法 汝 鄢 涂 钦 段干 百里 东郭 南门 呼延 归 海 羊舌 微生 岳 帅 缑 亢 况 后 有 琴 梁丘 左丘 东门 西门 商 牟 佘 佴 伯 赏 南宫";
//    $x = explode(' ', $x1);//
//    $x2="佳 杰 贤 卫 霞 伟 敬 正 谋 乘 风 定 锐 陈 慧 东 菁 啥 地 方 活 动 计 划 分 撒 旦 回 复 泼 尼 时 间 段 和 方 式 登 记 分 别 是 私 房 话 四 点 发 货 都 是 举 报 电 话 佛 山";
//    $n1=explode(' ',$x2);//
//    $x3="打,,开,,就,,发,,货,,撒,,地,,方,,你,,说,,的,,谁,,离,开,的,发,哦,,是,,假,,发,,是,,是,,领,,导,,方,,式,,皮,,肤,,好,纠,纷,速,,度,,快,解,放,和,,平,多,少,哦,都,,会,反,扒,身,,份,,为,皮,肤,很,难,欧,话,,费,去,玩";
//    $n2=explode(',',$x3);//
//$lo=explode(' ',"江苏 北京 上海 重庆 山东");
////print_r($x);
//echo count($x);
//echo ' ';
//echo count($n1);
//echo ' ';
//echo count($n2);
//echo ' ';
////echo rand(0, count($x)-1);
////$name.=$x[rand(0, count($x)-1)].$n1[rand(0, count($n1)-1)].$n2[rand(0, count($n2)-1)];
////echo $name;
////echo random_int(0,count($x));
////'\''.$pass.'\''.
//
//
//echo md5('123456');
//for($i=20;$i<25;$i++) {
////    $name='';
//    $name=$x[rand(0, count($x)-1)].$n1[rand(0, count($n1)-1)].$n2[rand(0, count($n2)-1)];
//    $loc=$lo[rand(0, count($lo)-1)];
//    $pass=md5('123456');
//    $sex=rand(0,1)==0?'male':'female';
//    $hobby=rand(0,1)==0?'散步':'跑步';
//    $level=rand(1,20);
//    $weight=rand(48,70);
//    $height=rand(148,192);
//    $age=rand(18,36);
//
//
//    DBUtils::execute("INSERT INTO user (id,name,age,location,level) VALUES (".$i.','.'\''.$name.'\''.','.','.'\''.$loc.'\''.','.$i.")");
//}


//    print_r($x);
//    $xing=array('赵','钱','孙','李','周','吴','郑','王','范','徐','曹','段');
//    DBUtils::execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//      VALUES (".$i.',\'asd\','.$i.','.'\'sddfsdf\','.$i.")");
//}
//$i=20;
//echo ("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//      VALUES (".$i.',\'asd\','.$i.','.'\'sddfsdf\','.$i.")");
//
//
//echo 'INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//      VALUES (1, \'Paul\', 32, \'California\', 20000.00 )';
//DBUtils::execute('INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//      VALUES (1, \'Paul\', 32, \'California\', 20000.00 )');
//DBUtils::execute('INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//      VALUES (2, "sss", 25, "sdfsdfsd", 15000.00 );');
//$re=array();

//修改记录
//DBUtils::execute('INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
////      VALUES (1, \'Paul\', 32, \'California\', 20000.00 )');

//查多条记录，返回数组
//$re=DBUtils::queryList('SELECT * from COMPANY');
//print_r($re);
//$re=DBUtils::queryRow('SELECT SALARY from COMPANY WHERE ID=1');
//print_r(($re));
//echo ($re[0]['SALARY']);
//print_r($re[1]);
/**
 * Created by PhpStorm.
 * User: user
 * Date: 2016/11/8
 * Time: 上午 11:12
 */
//echo '111';
class UserService
{
    //检查账号密码是否匹配
    function checkUser($username,$password){
        $name=DBUtils::querySingle('SELECT name FROM user WHERE name='.'\''.$username.'\''.'AND password='.'\''.$password.'\'');
//        if($name){
////            $_SESSION['user']=$name;
////            echo $name;
////            echo $_SESSION['user'];
//            $GLOBALS["foo"]=$name;
//        }
        return $name;
    }
    //检查此用户名是否已经存在
    function isExisted($username){
//        echo '1';
        $count=DBUtils::count('SELECT id FROM user WHERE name='.'\''.$username.'\'');
        return $count;
    }
    //增加一个用户
    function addUser($username,$password){
        $id=DBUtils::count('SELECT count(*) FROM user')+1;
        DBUtils::execute('INSERT INTO user VALUES ('.$id.',"'.$username.'"'.',"male",'.'"'.$password.'"'.',"img/banner.jpg"'.',"北京"'.',"散步",'.'1'.',"德玛西亚",'.'60,165,20'.')');
    }
    //获得用户个人详细信息
    function getUserDetail($username){
        $result=DBUtils::queryRow('SELECT * FROM user WHERE name='.'"'.$username.'"');
        return $result;
    }
    function modifyUser($username,$height,$weight){
//        DBUtils::execute('INSERT INTO user VALUES ('.$id.',"'.$username.'"'.',"male",'.'"'.$password.'"'.',"img/banner.jpg"'.',"北京"'.',"散步",'.'1'.',"德玛西亚",'.'60,165,20'.')');
        DBUtils::execute('UPDATE user SET height = '.$height.',weight='.$weight.' WHERE name='.'"'.$username.'"');

        $time="2016-11-30";
        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        DBUtils::execute('UPDATE weight SET weight='.$weight.' WHERE userId='.$userId.' AND date='.'"'.$time.'"');
    }
    function getWeight($username){
        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        $result=DBUtils::queryList('SELECT weight,date FROM weight WHERE userId='.$userId);
        return $result;
    }
    function getSleep($username){
        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        $result=DBUtils::queryList('SELECT date,start,end,deep FROM sleep WHERE userId='.$userId.' ORDER BY date DESC');
        return $result;
    }
    function getSleepDetail($username,$date){
        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        $result=DBUtils::queryList('SELECT time,value FROM sleepDetail WHERE userId='.$userId);
        return $result;
    }
    function modifyUserDetail($userId,$uname,$sex,$age,$loc,$hobby,$signature){
//        $userId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$username.'"');
        DBUtils::execute('UPDATE user SET name = '.'"'.$uname.'",'.'sex='.'"'.$sex.'",'.'age='.$age.',location='.'"'.$loc.'",'.'hobby='.'"'.$hobby.'",'.'signature='.'"'.$signature.'" WHERE id='.$userId);
    }
    function getFriend($id){
        $result=DBUtils::queryList('SELECT name,image FROM friend,user WHERE userId='.$id.' AND friendId=id');
        return $result;
    }
    function deleteFriend($fname,$userId){
        $friendId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$fname.'"');
        DBUtils::execute('DELETE FROM friend WHERE userId = '.$userId.' AND friendId='.$friendId);
        DBUtils::execute('DELETE FROM friend WHERE userId = '.$friendId.' AND friendId='.$userId);
    }
    function getMe($id){
        $result=DBUtils::queryList('SELECT age,location,hobby,signature FROM user WHERE id='.$id);
        return $result;
    }
    function getAllRank($id){
        $date='2016-11-30';
        $result=DBUtils::queryList('SELECT name,image,step FROM mySport,user WHERE date='.'"'.$date.'"'.' AND id=userId ORDER BY step DESC');
        return $result;
    }
    function isAdded($id,$friname){
        $friendId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$friname.'"');
        $count=DBUtils::count('SELECT userId FROM friend WHERE userId='.$id.' AND friendId='.$friendId);
        return $count;
    }
    function addFriend($id,$friname){
        $friendId=DBUtils::querySingle('SELECT id FROM user WHERE name='.'"'.$friname.'"');
        DBUtils::execute('INSERT INTO friend VALUES('.$id.','.$friendId.')');
        DBUtils::execute('INSERT INTO friend VALUES('.$friendId.','.$id.')');

    }

}