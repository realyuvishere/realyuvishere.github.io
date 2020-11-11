<?php
if(isset($_GET['delete'])) {
    unlink($_GET['delete']);
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Blog Editor | Posts</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style>
            .table img {
                cursor: pointer;
                padding: 1px;
                border: 1px solid rgba(0,0,0,0.3);
            }
        </style>
    </head>
    <body class="full">
        <div class="container">
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="blog.php"><i class="fa fa-home"></i> Blog Editor</a></li>
                    <li class="breadcrumb-item active">Posts</li>
                </ol>
            </nav>
            <div class="modal fade" id="image_full" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <h1 class="text-center p-5">Pages</h1>
                    <center>
                        <?php
                        $handle = opendir('blog/pages/');
                        $dom    = new DOMDocument();
                        while (false !== ($file = readdir($handle))){ 
                            $extension = strtolower(substr(strrchr($file, '.'), 1));
                            if ($extension == 'html' || $extension == 'htm') {
                                $html = file_get_contents("blog/pages/".$file);
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
                                <div class="card w-100 mb-5">
                                    <div class="card-body">
                                        <h2 class="card-title">'.$title.'</h2>
                                        <p class="card-text">'.$description.'</p>
                                        <div class="btn-group" role="group">
                                            <a role="button" class="btn btn-outline-info" href="/blog/pages/'.$file.'"><i class="fa fa-eye"></i> View</a>
                                            <a role="button" class="btn btn-outline-danger" href="?delete=blog/pages/'.$file.'"><i class="fa fa-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>';
                            }
                        }
                        ?>
                    </center>
                </div>
                <div class="col-md-7">
                    <h1 class="text-center p-5">Images</h1>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th style="width: 10%;text-align: center"><i class="fa fa-file-image-o"></i></th>
                                <th>File name</th>
                                <th>Size</th>
                                <th style="width: 10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php
                        if ($image_handle = opendir('blog/pages/resources/')) {
                            while (false !== ($entry = readdir($image_handle))) {
                                if( $entry !== '.' && $entry !== '..' && $entry !== '.DS_Store') {
                                    $file_size = filesize($entry);
                                    echo "<tr>";
                                    echo "<td><img class='img-fluid' src='blog/pages/resources/".$entry."' data-toggle='modal'></td>";
                                    echo "<td>".$entry."</td>";
                                    echo "<td>".$file_size."</td>";
                                    echo "<td class='text-center'><a role='button' href='?delete=blog/pages/resources/".$entry."' class='btn btn-outline-danger'><i class='fa fa-trash'></i></a></td>";
                                    echo "</tr>";
                                }
                            }
                            closedir($image_handle);
                        }
                        ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script>
            $('.table img').on('click', function(){
                $("#image_full").modal('show');
                $('#image_full div.modal-body').html('<img class="img-fluid" src="' + $(this)[0].src + '">');
            });
        </script>
    </body>
</html>