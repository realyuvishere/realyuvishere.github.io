<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Blogs</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="lib/index.css">
    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top p-2">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navp" aria-controls="navp" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-md-center" id="navp">
                <div class="">
                    <ul class="navbar-nav" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="homa" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
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
        <div class="row full">
            <div class="col-md-1"></div>
            <div class="col-md-7">
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="homea">
                        <div class="jumbotron">
                            <h1 class="p-3">Welcome to my blog!</h1>
                            <div class="text-muted pl-5">Read on</div>
                        </div>
                        <table class="table table-borderless">
                        <?php
                        $handle = opendir('pages/');
                        $dom    = new DOMDocument();
                        while (false !== ($file = readdir($handle))){ 
                            $extension = strtolower(substr(strrchr($file, '.'), 1));
                            $file_modTime = filemtime("pages/".$file);
                            if ($extension == 'html' || $extension == 'htm') {
                                $html = file_get_contents('pages/'.$file);
                                if(@$dom -> loadHTML($html)) {
                                    $list = $dom->getElementsByTagName("title");
                                    $metas = $dom->getElementsByTagName("meta");
//                                    $display_img = $dom->getElementsByTagName("img");
                                    if ($list->length > 0) {
                                        $title = $list->item(0)->textContent;
                                        $description = $metas->item(1)->getAttribute('content');
//                                        $img_src = $display_img->item(1)->getAttribute('src');
//                                        $img_alt = $display_img->item(1)->getAttribute('alt');
                                    }
                                }
                                echo '
                                <tr id="'.$file_modTime.'">
                                    <td>
                                        <div class="card w-75 p-3 mb-5">
                                            <div class="card-body">
                                                <h2 class="card-title">'.$title.'</h2>
                                                <p class="card-text">'.$description.'</p>
                                                <a class="btn btn-outline-info stretched-link" href="pages/'.$file.'">Read this</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>';
                            }
                        }
                        ?>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-4"></div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="lib/index.js"></script>
        <script>
            $(document).ready(function(){
                $('.table').children().children().sort(function (a, b) {
                    return parseInt(b.id) - parseInt(a.id);
                }).each(function () {
                    var elem = $(this);
                    elem.remove();
                    $(elem).appendTo(".table");
                });
            })
        </script>
    </body>
</html>