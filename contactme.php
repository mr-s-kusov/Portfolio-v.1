<?php
    $value = file_get_contents('php://input');

    $f = fopen('file.txt', 'a+');
    fwrite($f, "Заявка: ".$value."\n");
    fclose($f);
?>