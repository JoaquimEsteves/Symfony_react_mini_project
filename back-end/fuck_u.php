<?php
# Fill our vars and run on cli
# $ php -f fuck_u.php

$dbname = 'symfony';
$dbuser = 'root';
$dbpass = 'password';
$dbhost = 'db';

$link = mysqli_connect($dbhost, $dbuser, $dbpass);
$url = "https://jsonplaceholder.typicode.com/users";
$data = json_decode(file_get_contents($url));
foreach($data as $user) {
    print("yo");
    print_r($user);
}
// mysqli_select_db($link, $dbname);

// $test_query = "SHOW TABLES FROM $dbname";
// $result = mysqli_query($link, $test_query);

// $tblCnt = 0;
// while($tbl = mysqli_fetch_array($result)) {
//   $tblCnt++;
//   #echo $tbl[0]."<br />\n";
// }

// if (!$tblCnt) {
//   echo "There are no tables<br />\n";
// } else {
//   echo "There are $tblCnt tables<br />\n";
// } 
?>