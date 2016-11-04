<?php

$file = $_GET['guess'];

function getJson($file) {
    $jsonUrl = file_get_contents("data/".$file.".json");

    return $jsonUrl;
}

echo getJson($file);

exit;