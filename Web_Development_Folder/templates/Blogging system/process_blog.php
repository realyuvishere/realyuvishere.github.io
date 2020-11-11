<?php
$contents = $_POST["html_container"];
$meta_keywords = $_POST["document_meta_keywords"];
$meta_description = $_POST["document_meta_description"];
$meta_title = $_POST["document_title"];
$file_name = $_POST["document_name"];
$document_author = $_POST["document_author"];
$pageContent = '<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="'.$meta_description.'">
        <meta name="author" content="'.$document_author.'">
        <meta name="keywords" content="'.$meta_keywords.'">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>'.$meta_title.'</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../lib/blog.css">
        <link rel="stylesheet" href="../lib/index.css">
    </head>
    <body style="overflow-x: hidden">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top p-2">
            <a class="navbar-brand"><img src="" class="img-fluid" alt=""></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navp" aria-controls="navp" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-md-center" id="navp">
                <div class="">
                    <ul class="navbar-nav" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link" href="../">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Archives</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="banner"></div>
        <div aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="../"><i class="fa fa-home"></i></a></li>
                <li class="breadcrumb-item active" aria-current="page">'.$meta_title.'</li>
            </ol>
        </div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-7">'.$contents.'</div>
            <div class="col-md-3 p-4"></div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="../lib/index.js"></script>
    </body>
</html>';
$newfile = fopen('blog/pages/'.$file_name.'.html','x');
fwrite($newfile, $pageContent);
fclose($newfile);
echo "Page is published. <a href='posts.php'>View it here.</a>";
?>