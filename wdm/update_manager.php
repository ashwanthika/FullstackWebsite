<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include 'function.php';

$data = json_decode((file_get_contents("php://input")));
$name = $data->user1;
$id= $data->user2;
$email= $data->user3;
$ssn= $data->user4;

$dob = $data->user6;
$date= $data->user7;
$salary= $data->user8;
$starttime= $data->user9 ;
$endtime= $data->user10;
$contact=$data->user11;

$conn = get_db_connection();
// $sql = "UPDATE buildingmanager SET name= '$name', id= '$id', email='$email',  message= '$message', password= '$password' ,'dob= $dob'  ,date= '$date', salary='$salary', starttime='$starttime' ,endtime= '$endtime' WHERE id = '$id'";
$sql = "UPDATE buildingmanager SET bm_name= '$name', bm_email='$email' , bm_contact='$contact', bm_ssn= '$ssn' ,bm_dob= '$dob'  ,bm_doj= '$date', bm_salary='$salary', bm_starttime='$starttime' ,bm_endtime= '$endtime' WHERE bm_id = '$id'";
if($conn->query($sql) === true) {
    $response['message'] = 'success';
    echo json_encode($response);
} else {
    $response['message'] = 'failed';
    echo json_encode($response);
}

?>