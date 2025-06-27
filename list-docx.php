<?php
$files = glob("doc/*.docx");
$files = array_map("basename", $files);
header('Content-Type: application/json');
echo json_encode($files);
?>
