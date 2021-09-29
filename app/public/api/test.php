<?php

phpinfo();
$num = 2;
$foo = "to be";
$bar = "or not to be";
echo $foo . ' ' . $bar;

echo $num * $num * $num;


$arr = [
    "first" => "Liz",
    "last" => "Craig",
];

$arr2 = [1,1,2,3];

if (true) {
    echo "\nTRUE\n";

}

/*while (true) {
    break;
}
foreach($arr as $key=>value) {
    echo "<li>" .$key. "is" .$val. "</li>";
}*/

function printAndEncode( $val ) {
    echo json_encode(
        $val,
        JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR

    );
}


#echo json_encode(
   # $arr,
   
#);