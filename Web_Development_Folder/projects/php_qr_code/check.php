<?php
require 'phpspreadsheets/vendor/autoload.php';
$spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load("entries.xlsx");
$sheet = $spreadsheet->getActiveSheet();
$i = 2;


echo "<table class='table table-striped table-dark table-bordered'>";

while($sheet->getCell('A'.$i)->getValue() != "") {
    $code = $sheet->getCell('B'.$i)->getValue();
    $name = $sheet->getCell('C'.$i)->getValue();
    $inno = $sheet->getCell('D'.$i)->getValue();
    $conf = $sheet->getCell('E'.$i)->getValue();
    echo "
    <tr>
    <td>".$code."</td>
    <td>".$name."</td>
    <td>".$inno."</td>
    <td>".$conf."</td>
    </tr>";
    $i++;
}
?>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Ordin@trix 19.0 | Participating Schools</title>
    <link rel="icon" href="https://yuvrajsharma07.github.io/ordin/lib/favicon.png" sizes="26x26" type="image/png">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
</html>