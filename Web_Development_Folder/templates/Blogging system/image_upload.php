<?php
$file_name = $_FILES['image']['name'];
$file_size =$_FILES['image']['size'];
$file_tmp =$_FILES['image']['tmp_name'];
$file_type=$_FILES['image']['type'];
$file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
$file_alt = $_POST["image_alt"];
$file_title = $_POST["image_title"];
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Blog Editor | Image Upload</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="lib/blog_editor.css">
    </head>
    <body>
        <div class="container">
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="blog.php"><i class="fa fa-home"></i> Blog Editor</a></li>
                    <li class="breadcrumb-item active">Image Upload</li>
                </ol>
            </nav>
            <form class="p-5 my-5" method="post" enctype="multipart/form-data">
                <div class="form-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="image" name="image">
                        <label class="custom-file-label" for="image">Image</label>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" name="image_alt" id="image_alt" class="form-control" placeholder="Alt">
                </div>
                <div class="form-group">
                    <input type="text" name="image_title" id="image_title" class="form-control" placeholder="Title">
                </div>
                <button class="btn btn-outline-success" type="submit"><i class="fa fa-upload"></i> Upload</button>
            </form>
            <div class="alert alert-info fade show" role="alert" id="output">
                <h3>Your file:</h3>
                <ul style="list-style-type: none">
                </ul>
            </div>
            <?php
            if(isset($_FILES['image'])){
                $errors= array();
                $expensions= array("jpeg","jpg","png");
                if(in_array($file_ext,$expensions)=== false){
                    $errors[]="extension not allowed, please choose a JPEG or PNG file.";
                }
                if(empty($errors)==true){
                    move_uploaded_file($file_tmp,"blog/pages/resources/".$file_name);
                    ?>
            <div class="alert alert-success fade show" role="alert" id="upload_alert">
                <h3>Details:</h3>
                <div class="form-group">
                    <input class="form-control readonly" id="details_url" placeholder="URL" readonly>
                </div>
                <div class="form-group">
                    <input class="form-control readonly" id="details_alt" placeholder="Alt" value="<?php echo $file_alt; ?>" readonly>
                </div>
                <div class="form-group">
                    <input class="form-control readonly" id="details_title" placeholder="Title" value="<?php echo $file_title; ?>" readonly>
                </div>
                <script>
                    function saveLocally() {
                    var imgurl = document.getElementById('details_url').value;
                        var imgalt = document.getElementById('details_alt').value;
                        var imgtitle = document.getElementById('details_title').value;
                        window.localStorage.setItem('image_url', imgurl);
                        window.localStorage.setItem('image_alt', imgalt);
                        window.localStorage.setItem('image_title', imgtitle);
                    }
                </script>
                <button class="btn btn-outline-primary" type="button" onclick="saveLocally()"><i class="fa fa-copy"></i> Copy data</button>
            </div>
            <?php
                } else {
                    print_r($errors);
                }
            }
            ?>
        </div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script>
            $(document).ready(function(){
                var checkFor = Boolean($(this).find('div#upload_alert').length);
                if (checkFor == true) {
                    document.getElementById("details_url").value = window.location.origin + "/blog/pages/resources/<?php echo $file_name; ?>";
                }
            });
            $("#image").on('input', function(){
                var name = $(this).val().replace(/.*(\/|\\)/, '');
                var size = document.getElementById("image").files[0].size;
                $("#output ul").html('<li>File name: ' + name + '</li>' + '<li>File size: ' + size + ' bytes (' + Math.floor(size/1000) + ' KB)</li>');
            });
        </script>
    </body>
</html>