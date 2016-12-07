<?php
//include_once ('HealthService.php');//引入外部php类实现具体数据库操作，通过infotype判断是要查哪个数据
include_once ('UserService.php');
include_once ('SportService.php');
include_once ('ActivityService.php');

//echo ('api');
//在js处调用这些api然后处理返回数据展现到html上
class RestUtils
{
    public static function processRequest()
    {
        // get our verb
        $request_method = strtolower($_SERVER['REQUEST_METHOD']);//api请求的method
//        echo ($request_method);
//        $request1=array();
//        $request1=$_GET;
//        $request_method=$request1['type'];
//
        $return_obj     = new RestRequest();//返回体


//        $request_method=$return_obj->getRequestVars()['type'];
//        echo ($request_method);

//        echo $_GET['type'];
        // we'll store our data here
        $data           = array();//数据

        switch ($request_method)//判断方法
        {
            // gets are easy...
            case 'get':
                $data = $_GET;
//                echo $data;
                break;
            // so are posts
            case 'post':
                $data = $_POST;
                break;
            // here's the tricky bit...
            case 'put':
                // basically, we read a string from PHP's special input location,
                // and then parse it out into an array via parse_str... per the PHP docs:
                // Parses str  as if it were the query string passed via a URL and sets
                // variables in the current scope.
                parse_str(file_get_contents('php://input'), $put_vars);
                $data = $put_vars;
                break;
            //自己实现delete
            case 'delete':
                // basically, we read a string from PHP's special input location,
                // and then parse it out into an array via parse_str... per the PHP docs:
                // Parses str  as if it were the query string passed via a URL and sets
                // variables in the current scope.
                $string=file_get_contents('php://input');
                preg_match_all("|\".*\"|",$string,$out1, PREG_PATTERN_ORDER);
                preg_match_all("|\"s+.*s+------|",$string,$out2, PREG_PATTERN_ORDER);
                for($i=0;$i<count($out2[0]);$i++){
                    $out1[0][$i]=explode("\"", $out1[0][$i])[1];
                    $out2[0][$i]=explode("\n", $out2[0][$i])[2];
                    $out2[0][$i]=trim($out2[0][$i]);
                }
                $data=array();
                for($i=0;$i<count($out2[0]);$i++){
                    $data[$out1[0][$i]] = $out2[0][$i];
                }
                break;


        }

        // store the method
//        echo($data['username']);
        $return_obj->setMethod($request_method);

        // set the raw data, so we can access it if needed (there may be
        // other pieces to your requests)
        $return_obj->setRequestVars($data);

        if(isset($data['data']))
        {
            // translate the JSON to an Object for use however you want
            $return_obj->setData(json_decode($data['data']));
//            echo($return_obj);
        }
        return $return_obj;
    }

    public static function sendResponse($status = 200, $body = '', $content_type = 'text/html')
    {
        $status_header = 'HTTP/1.1 ' . $status . ' ' . RestUtils::getStatusCodeMessage($status);
        // set the status
        header($status_header);
        // set the content type
        header('Content-type: ' . $content_type);

        // pages with body are easy
        if($body != '')
        {
            // send the body
//            echo 1;
            echo $body;
//            echo 2;
            exit;
        }
        // we need to create the body if none is passed
        else
        {
            // create some body messages
            $message = '';

            // this is purely optional, but makes the pages a little nicer to read
            // for your users.  Since you won't likely send a lot of different status codes,
            // this also shouldn't be too ponderous to maintain
            switch($status)
            {
                case 401:
                    $message = 'You must be authorized to view this page.';
                    break;
                case 404:
                    $message = 'The requested URL ' . $_SERVER['REQUEST_URI'] . ' was not found.';
                    break;
                case 500:
                    $message = 'The server encountered an error processing your request.';
                    break;
                case 501:
                    $message = 'The requested method is not implemented.';
                    break;
            }

            // servers don't always have a signature turned on (this is an apache directive "ServerSignature On")
            $signature = ($_SERVER['SERVER_SIGNATURE'] == '') ? $_SERVER['SERVER_SOFTWARE'] . ' Server at ' . $_SERVER['SERVER_NAME'] . ' Port ' . $_SERVER['SERVER_PORT'] : $_SERVER['SERVER_SIGNATURE'];

            // this should be templatized in a real-world solution
            $body = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">  
                        <html>  
                            <head>  
                                <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">  
                                <title>' . $status . ' ' . RestUtils::getStatusCodeMessage($status) . '</title>  
                            </head>  
                            <body>  
                                <h1>' . RestUtils::getStatusCodeMessage($status) . '</h1>  
                                <p>' . $message . '</p>  
                                <hr />  
                                <address>' . $signature . '</address>  
                            </body>  
                        </html>';

            echo $body;///
            exit;
        }
    }

    public static function getStatusCodeMessage($status)
    {
        // these could be stored in a .ini file and loaded
        // via parse_ini_file()... however, this will suffice
        // for an example
        $codes = Array(
            100 => 'Continue',
            101 => 'Switching Protocols',
            200 => 'OK',
            201 => 'Created',
            202 => 'Accepted',
            203 => 'Non-Authoritative Information',
            204 => 'No Content',
            205 => 'Reset Content',
            206 => 'Partial Content',
            300 => 'Multiple Choices',
            301 => 'Moved Permanently',
            302 => 'Found',
            303 => 'See Other',
            304 => 'Not Modified',
            305 => 'Use Proxy',
            306 => '(Unused)',
            307 => 'Temporary Redirect',
            400 => 'Bad Request',
            401 => 'Unauthorized',
            402 => 'Payment Required',
            403 => 'Forbidden',
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            406 => 'Not Acceptable',
            407 => 'Proxy Authentication Required',
            408 => 'Request Timeout',
            409 => 'Conflict',
            410 => 'Gone',
            411 => 'Length Required',
            412 => 'Precondition Failed',
            413 => 'Request Entity Too Large',
            414 => 'Request-URI Too Long',
            415 => 'Unsupported Media Type',
            416 => 'Requested Range Not Satisfiable',
            417 => 'Expectation Failed',
            500 => 'Internal Server Error',
            501 => 'Not Implemented',
            502 => 'Bad Gateway',
            503 => 'Service Unavailable',
            504 => 'Gateway Timeout',
            505 => 'HTTP Version Not Supported'
        );

        return (isset($codes[$status])) ? $codes[$status] : '';
    }
}

class RestRequest
{
    private $request_vars;
    private $data;
    private $http_accept;
    private $method;

    public function __construct()
    {
        $this->request_vars      = array();
        $this->data              = '';//数据
        $this->http_accept       = (strpos($_SERVER['HTTP_ACCEPT'], 'json')) ? 'json' : 'xml';//要求的数据类型json或xml
        $this->method            = 'get';
    }

    public function setData($data)
    {
        $this->data = $data;
    }

    public function setMethod($method)
    {
        $this->method = $method;
    }

    public function setRequestVars($request_vars)
    {
        $this->request_vars = $request_vars;
    }

    public function getData()
    {
        return $this->data;
    }

    public function getMethod()
    {
        return $this->method;
    }

    public function getHttpAccept()
    {
        return $this->http_accept;
    }

    public function getRequestVars()
    {
        return $this->request_vars;
    }





}


//假设你已经通过路由把请求对应到正确的users控制器，下面具体实现本项目相关数据
//$GLOBALS["as"]=$foo;
$data = RestUtils::processRequest();
//$myMethod = RestUtils::processRequest();
//echo $data->getRequestVars()['username'];
//echo($_SERVER['HTTP_ACCEPT']);
//switch($data->getMethod())
$this_username;
switch($data->getRequestVars()['type'])
{

    case 'get':
        $infoType=$data->getRequestVars()['infoType'];
        switch ($infoType){
            case 'userLogin':
                $username=$data->getRequestVars()['username'];
                $password=$data->getRequestVars()['password'];
                $userService=new UserService();
                $result=$userService->checkUser($username,$password);
                if($result!=null){
//                    echo $username;
//                    echo $password;
//                    echo $result;
//                    $this_username=$result;
                    $GLOBALS["as"]=$result;
                    echo "yes";
                }else{
//                    echo $username;
//                    echo $password;
//                    echo $result;
                    echo "no";
                }
                break;
            case 'userSignUp':
                $username=$data->getRequestVars()['username'];
                $password=$data->getRequestVars()['password'];
                $userService=new UserService();
//                $result=$userService->isExisted($username);
                $result=$userService->isExisted($username);
//                echo 'laile';
                if($result!=0){
                    echo "no";
                }else{
                    $userService->addUser($username,$password);
                    echo "yes";
                }
                break;
            case 'userDetail':
                $username=$data->getRequestVars()['username'];
                $userService=new UserService();
                $result=$userService->getUserDetail($username);
                $xml=new userXML();
                $user=$xml->create_xml($result);
                RestUtils::sendResponse(200, $user,'application/xml');
                break;
            case 'yesSport':
                $username=$data->getRequestVars()['username'];
                $date=$data->getRequestVars()['date'];
                $sportService=new SportService();
                $result=$sportService->getYesSport($username,$date);
                $xml=new sportXML();
                $sport=$xml->create_xml($result);
                RestUtils::sendResponse(200, $sport,'application/xml');
                break;
            case 'sumSport':
                $username=$data->getRequestVars()['username'];
                $sportService=new SportService();
                $result=$sportService->getSumSport($username);
                $xml=new sumSportXML();
                $sport=$xml->create_xml($result);
                RestUtils::sendResponse(200, $sport,'application/xml');
                break;
            case 'graph':
                $username=$data->getRequestVars()['username'];
                $userService=new UserService();
                $result=$userService->getWeight($username);
                $xml=new weightXML();
                $weight=$xml->create_xml($result);
                RestUtils::sendResponse(200, $weight,'application/xml');
                break;
            case 'getSleep':
                $username=$data->getRequestVars()['username'];
                $userService=new UserService();
                $result=$userService->getSleep($username);
                $xml=new sleepXML();
                $sleep=$xml->create_xml($result);
                RestUtils::sendResponse(200, $sleep,'application/xml');
                break;
            case 'sleepDetail':
                $username=$data->getRequestVars()['username'];
                $date=$data->getRequestVars()['date'];
                $userService=new UserService();
                $result=$userService->getSleepDetail($username,$date);
                $xml=new sleepDetailXML();
                $sleep=$xml->create_xml($result);
                RestUtils::sendResponse(200, $sleep,'application/xml');
                break;
            case 'acField':
                $activityService=new ActivityService();
                $result=$activityService->getAcField();
                $xml=new acFieldXML();
                $ac=$xml->create_xml($result);
                RestUtils::sendResponse(200, $ac,'application/xml');
                break;
            case 'myAc':
                $username=$data->getRequestVars()['username'];
                $activityService=new ActivityService();
                $result=$activityService->getMyAc($username);
                $xml=new myAcXML();
                $ac=$xml->create_xml($result);
                RestUtils::sendResponse(200, $ac,'application/xml');
                break;
            case 'acList':
                $acId=$data->getRequestVars()['acId'];
                $activityService=new ActivityService();
                $result=$activityService->getAcList($acId);
                $xml=new acListXML();
                $ac=$xml->create_xml($result);
                RestUtils::sendResponse(200, $ac,'application/xml');
                break;
            case 'getfriend':
                $id=$data->getRequestVars()['id'];
                $userService=new UserService();
                $result=$userService->getFriend($id);
                $xml=new friendXML();
                $f=$xml->create_xml($result);
                RestUtils::sendResponse(200, $f,'application/xml');
                break;
            case 'getMe':
                $id=$data->getRequestVars()['id'];
                $userService=new UserService();
                $result=$userService->getMe($id);
                $xml=new meXML();
                $me=$xml->create_xml($result);
                RestUtils::sendResponse(200, $me,'application/xml');
                break;
            case 'getAllRank':
                $id=$data->getRequestVars()['userId'];
                $userService=new UserService();
                $result=$userService->getAllRank($id);
                $xml=new allRankXML();
                $me=$xml->create_xml($result);
                RestUtils::sendResponse(200, $me,'application/xml');
                break;
        }
        break;
    case 'post':
            $infoType=$data->getRequestVars()['infoType'];
        switch ($infoType){
            case 'userSignUp':
                $username=$data->getRequestVars()['username'];
                $password=$data->getRequestVars()['password'];
                $userService=new UserService();
                $result=$userService->isExisted($username);
//                echo 'laile';
                if($result!=0){
                    echo "no";
                }else{
                    $userService->addUser($username,$password);
                    echo "yes";
                }
                break;
            case 'WandH':
                $username=$data->getRequestVars()['username'];
                $height=$data->getRequestVars()['height'];
                $weight=$data->getRequestVars()['weight'];
                $userService=new UserService();
                $result=$userService->isExisted($username);
//                echo 'laile';
                if($result!=0){
                    echo "yes";
                    $userService->modifyUser($username,$height,$weight);
                }else{
                    echo "no";
                }
                break;
            case 'organize':
                $organizer=$data->getRequestVars()['organizer'];
                $name=$data->getRequestVars()['name'];
                $acType=$data->getRequestVars()['acType'];
                $introduction=$data->getRequestVars()['introduction'];
                $start=$data->getRequestVars()['start'];
                $end=$data->getRequestVars()['end'];
                $credit=$data->getRequestVars()['credit'];
                $condition=$data->getRequestVars()['condition'];
//                $orType=$data->getRequestVars()['orType'];
                $activityService=new ActivityService();
                $id=$activityService->organizeActivity($organizer,$name,$acType,$introduction,$start,$end,$credit,$condition);
                echo $id;
                break;
            case 'addMyAc':
                $username=$data->getRequestVars()['username'];
                $acId=$data->getRequestVars()['acId'];
                $activityService=new ActivityService();
                $result=$activityService->isAdded($username,$acId);
                if($result!=0){
                    echo "no";
                }else{
                    $activityService->addAc($username,$acId);
                    echo "yes";
                }
                break;
            case 'addFriend':
                $id=$data->getRequestVars()['id'];
                $friname=$data->getRequestVars()['friname'];
                $userService=new UserService();
                $result=$userService->isAdded($id,$friname);
                if($result!=0){
                    echo "no";
                }else{
                    $userService->addFriend($id,$friname);
                    echo "yes";
                }
                break;
        }
//        if (array_key_exists("username",$data->getRequestVars())) {
//
//            $username=$data->getRequestVars()['username'];
////             if($data->getHttpAccept() == 'json'){
////                //echo('json');
////                if($infoType=="health"){
////                    $healthService=new HealthService();
////                    $result=$healthService->getUserHealth($username);
////                    if($result==""){
////                        RestUtils::sendResponse(404, "Not Found");
////                    }
////                    else{
////                        RestUtils::sendResponse(200, json_encode($result), 'application/json');
////                    }
////                }
////
////            }
//
////            else{
//                if($infoType=="health"){
//                    //echo('xml');
//                    //主要实现以下内容
//                    $healthService=new HealthService();
//                    $result=$healthService->getUserHealth($username);
//                    //echo($username);
//                    //echo($result);
////                    $result="m";
//                    if($result==""){
//                        RestUtils::sendResponse(404, "NOT FOUND");
//                    }
//                    else{
////                        创建一个xml对象
//                        $health=new HealthXML();
//                        RestUtils::sendResponse(200, $health->create_xml($result),'application/xml');
//                    }
//                }
//
////            }
//        }

        break;

//    case 'post':
//        $infoType=$data->getRequestVars()['infoType'];
//        if($infoType=="health"){
//            $username=$data->getRequestVars()['username'];
//            $height=$data->getRequestVars()['height'];
//            $weight=$data->getRequestVars()['weight'];
//            $date=$data->getRequestVars()['date'];
//            $healthService=new HealthService();
//            $ID=$healthService->addHealthWithDate($username, $height, $weight, $date);
//            $health=new HealthXML();
//            $data_array = array(
//                array(
//                    'ID' => $ID,
//                )
//            );
//            RestUtils::sendResponse(201, $health->create_IDxml($data_array));
//        }
//
//        break;

    case 'put':
        $infoType=$data->getRequestVars()['infoType'];
        switch ($infoType){
            case 'modifyAc':
                $organizer=$data->getRequestVars()['organizer'];
                $name=$data->getRequestVars()['name'];
                $acType=$data->getRequestVars()['acType'];
                $introduction=$data->getRequestVars()['introduction'];
                $start=$data->getRequestVars()['start'];
                $end=$data->getRequestVars()['end'];
                $credit=$data->getRequestVars()['credit'];
                $condition=$data->getRequestVars()['condition'];
                $acId=$data->getRequestVars()['acId'];
                $activityService=new ActivityService();
                $activityService->modifyActivity($organizer,$name,$acType,$introduction,$start,$end,$credit,$condition,$acId);
                break;
            case 'modifyUser':
                $userId=$data->getRequestVars()['userId'];
                $uname=$data->getRequestVars()['uname'];
                $sex=$data->getRequestVars()['sex'];
                $age=$data->getRequestVars()['age'];
                $loc=$data->getRequestVars()['loc'];
                $hobby=$data->getRequestVars()['hobby'];
                $signature=$data->getRequestVars()['signature'];

                $userService=new UserService();
                $userService->modifyUserDetail($userId,$uname,$sex,$age,$loc,$hobby,$signature);
                break;

        }
        break;

    case 'delete':
        $infoType=$data->getRequestVars()['infoType'];
        switch ($infoType){
            case 'deleteMyAc':
                $username=$data->getRequestVars()['username'];
                $acId=$data->getRequestVars()['acId'];
                $activityService=new ActivityService();
                $activityService->deleteMyActivity($username,$acId);
                break;
            case 'deleteAc':
                $username=$data->getRequestVars()['username'];
                $acId=$data->getRequestVars()['acId'];
                $activityService=new ActivityService();
                $activityService->deleteActivity($username,$acId);
                break;
            case 'deleteFriend':
                $fname=$data->getRequestVars()['fname'];
                $userId=$data->getRequestVars()['userId'];
                $userService=new UserService();
                $userService->deleteFriend($fname,$userId);
                break;

        }

        break;
}
class userXML{
    //  创建XML单项
    function create_item($id,$name,$sex,$password,$image,$location,$hobby,$level,$signature,$weight,$height,$age)
    {
        $item = "<item>\n";
        $item .= "<id>" . $id . "</id>\n";
        $item .= "<name>" . $name . "</name>\n";
        $item .= "<sex>" . $sex . "</sex>\n";
        $item .= "<image>" . $image . "</image>\n";
        $item .= "<location>" . $location . "</location>\n";
        $item .= "<hobby>" . $hobby . "</hobby>\n";
        $item .= "<level>" . $level . "</level>\n";
        $item .= "<signature>" . $signature . "</signature>\n";
        $item .= "<weight>" . $weight . "</weight>\n";
        $item .= "<height>" . $height. "</height>\n";
        $item .= " <age>" . $age . "</age>\n";
        $item .= "</item>\n";
        return $item;
    }

    function create_xml($data){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
//        foreach ($data_array as $data) {
        $xml .= $this->create_item($data['id'],$data['name'], $data['sex'], $data['password'],$data['image'],$data['location'],$data['hobby'],$data['level'],$data['signature'],$data['weight'],$data['height'],$data['age']);
//        }
        $xml .= "</article>\n";
        return $xml;
    }
}

class sportXML{
    //  创建XML单项
    function create_item($userId,$date,$distance,$time,$step,$calorie,$goal)
    {
        $item = "<item>\n";
        $item .= "<userId>" . $userId . "</userId>\n";
        $item .= "<date>" . $date . "</date>\n";
        $item .= "<distance>" . $distance . "</distance>\n";
        $item .= "<time>" . $time . "</time>\n";
        $item .= "<step>" . $step . "</step>\n";
        $item .= "<calorie>" . $calorie . "</calorie>\n";
        $item .= "<goal>" . $goal . "</goal>\n";
        $item .= "</item>\n";
        return $item;
    }

    function create_xml($data){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
//        foreach ($data_array as $data) {
        $xml .= $this->create_item($data['userId'],$data['date'], $data['distance'], $data['time'],$data['step'],$data['calorie'],$data['goal']);
//        }
        $xml .= "</article>\n";
        return $xml;
    }
}
class weightXML{
    //  创建XML单项
    function create_xml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
       $xml.="<item>\n";
        foreach ($data_array as $data) {
            $xml.="<weight>".$data['weight']."</weight>\n";
      }
        foreach ($data_array as $data) {
            $xml.="<date>".$data['date']."</date>\n";
        }
        $xml.="</item>\n";
        $xml .= "</article>\n";
        return $xml;
    }
}
class acListXML{
    //  创建XML单项
    function create_xml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
        $xml.="<item>\n";
        foreach ($data_array as $data) {
            $xml.="<name>".$data['name']."</name>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<step>".$data['step']."</step>\n";
        }
        $xml.="</item>\n";
        $xml .= "</article>\n";
        return $xml;
    }
}
class friendXML{
    //  创建XML单项
    function create_xml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
        $xml.="<item>\n";
        foreach ($data_array as $data) {
            $xml.="<name>".$data['name']."</name>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<image>".$data['image']."</image>\n";
        }
        $xml.="</item>\n";
        $xml .= "</article>\n";
        return $xml;
    }
}
class allRankXML{
    //  创建XML单项
    function create_xml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
        $xml.="<item>\n";
        foreach ($data_array as $data) {
            $xml.="<name>".$data['name']."</name>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<image>".$data['image']."</image>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<step>".$data['step']."</step>\n";
        }
        $xml.="</item>\n";
        $xml .= "</article>\n";
        return $xml;
    }
}
class meXML{
    //  创建XML单项
    function create_xml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
        $xml.="<item>\n";
        foreach ($data_array as $data) {
            $xml.="<age>".$data['age']."</age>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<hobby>".$data['hobby']."</hobby>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<location>".$data['location']."</location>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<signature>".$data['signature']."</signature>\n";
        }
        $xml.="</item>\n";
        $xml .= "</article>\n";
        return $xml;
    }
}

class sleepXML{
    //  创建XML单项
    function create_xml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
        $xml.="<item>\n";
        foreach ($data_array as $data) {
            $xml.="<date>".$data['date']."</date>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<start>".$data['start']."</start>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<end>".$data['end']."</end>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<deep>".$data['deep']."</deep>\n";
        }
        $xml.="</item>\n";
        $xml .= "</article>\n";
        return $xml;
    }
}
class sleepDetailXML{
    //  创建XML单项
    function create_xml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
        $xml.="<item>\n";
        foreach ($data_array as $data) {
            $xml.="<time>".$data['time']."</time>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<value>".$data['value']."</value>\n";
        }
        $xml.="</item>\n";
        $xml .= "</article>\n";
        return $xml;
    }
}
class acFieldXML{
    //  创建XML单项
    function create_xml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
        $xml.="<item>\n";
        foreach ($data_array as $data) {
            $xml.="<id>".$data['id']."</id>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<name>".$data['name']."</name>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<organizerId>".$data['organizerId']."</organizerId>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<credit>".$data['credit']."</credit>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<condition>".$data['condition']."</condition>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<image>".$data['image']."</image>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<introduction>".$data['introduction']."</introduction>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<start>".$data['start']."</start>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<end>".$data['end']."</end>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<type>".$data['type']."</type>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<total>".$data['total']."</total>\n";
        }
        $xml.="</item>\n";
        $xml .= "</article>\n";
        return $xml;
    }
}

class myAcXML{
    //  创建XML单项
    function create_xml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
        $xml.="<item>\n";
        foreach ($data_array as $data) {
            $xml.="<id>".$data['id']."</id>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<name>".$data['name']."</name>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<organizerId>".$data['organizerId']."</organizerId>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<credit>".$data['credit']."</credit>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<condition>".$data['condition']."</condition>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<image>".$data['image']."</image>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<introduction>".$data['introduction']."</introduction>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<start>".$data['start']."</start>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<end>".$data['end']."</end>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<type>".$data['type']."</type>\n";
        }
        foreach ($data_array as $data) {
            $xml.="<total>".$data['total']."</total>\n";
        }
        $xml.="</item>\n";
        $xml .= "</article>\n";
        return $xml;
    }
}

class sumSportXML{
    //  创建XML单项
    function create_item($distance,$time,$calorie)
    {
        $item = "<item>\n";
        $item .= "<distance>" . $distance . "</distance>\n";
        $item .= "<time>" . $time . "</time>\n";
        $item .= "<calorie>" . $calorie . "</calorie>\n";
        $item .= "</item>\n";
        return $item;
    }

    function create_xml($data){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
//        foreach ($data_array as $data) {
        $xml .= $this->create_item($data['distance'],$data['time'], $data['calorie']);
//        }
        $xml .= "</article>\n";
        return $xml;
    }
}
class HealthXML{

    //  创建XML单项
    function create_item($ID_data,$username_data, $height_data , $weight_data, $dateTime_data)
    {
        $item = "<item>\n";
        $item .= "<ID>" . $ID_data . "</ID>\n";
        $item .= "<username id='as'>" . $username_data . "</username>\n";
        $item .= "<height>" . $height_data . "</height>\n";
        $item .= "<weight>" . $weight_data . "</weight>\n";
        $item .= " <dateTime>" . $dateTime_data . "</dateTime>\n";
        $item .= "</item>\n";
        return $item;
    }

    function create_xml($data){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
//        foreach ($data_array as $data) {
            $xml .= $this->create_item($data['ID'],$data['username'], $data['height'], $data['weight'],$data['dateTime']);
//        }
        $xml .= "</article>\n";
        return $xml;
    }



    //  创建XML单项
    function create_IDitem($ID_data)
    {
        $item = "<item>\n";
        $item .= "<ID>" . $ID_data . "</ID>\n";
        $item .= "</item>\n";
        return $item;
    }

    function create_IDxml($data_array){
        $title_size = 1;
        $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
        $xml .= "<article>\n";
        foreach ($data_array as $data) {
            $xml .= $this->create_IDitem($data['ID']);
        }
        $xml .= "</article>\n";
        return $xml;
    }

}



?>