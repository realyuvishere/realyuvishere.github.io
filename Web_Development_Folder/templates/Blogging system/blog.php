<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Blog Editor</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="lib/blog_editor.css">
    </head>
    <body class="jumbotron p-0">
        <div class="container">

            <nav aria-label="breadcrumb" style="font-size: 1.3rem">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.php"><i class="fa fa-home"></i></a></li>
                    <li class="breadcrumb-item active" aria-current="page">Blog Editor</li>
                </ol>
            </nav>

            <h1 class="text-center p-5">Blog Editor</h1>
            <div class="text-right m-5">
                <a href="posts.php" class="btn btn-outline-primary">View your posts</a>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <form method="post" action="process_blog.php">
                        <div class="modal fade" id="html_container_modal" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <textarea class="form-control" name="html_container" id="html_container" readonly></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accord">
                            <div class="card p-3">
                                <div class="card-header bg-warning text-white" style="cursor: pointer;">
                                    <h3 class="text-center" data-toggle="collapse" data-target="#coll1" aria-expanded="false" aria-controls="coll1"><i class="fa fa-edit"></i> Meta Data</h3>
                                </div>
                                <div id="coll1" class="collapse" data-parent="#accord">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="document_meta_description">Description of the page</label>
                                            <input class="form-control" id="document_meta_description" name="document_meta_description" placeholder="This will describe the article, keep it like a short summary">
                                        </div>
                                        <div class="form-group">
                                            <label for="document_meta_keywords">Keywords for the page</label>
                                            <input class="form-control" id="document_meta_keywords" name="document_meta_keywords" placeholder="Keywords for SEO">
                                            <div class="text-muted">Comma separated words to be entered here</div>
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Name of the file</span>
                                            </div>
                                            <input type="text" class="form-control" id="document_name" name="document_name" placeholder="Name of the document" value="">
                                            <div class="input-group-append">
                                                <span class="input-group-text">.html</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card p-3">
                                <div class="card-header bg-warning text-white" style="cursor: pointer;">
                                    <h3 class="text-center" data-toggle="collapse" data-target="#coll2" aria-expanded="false" aria-controls="coll2"><i class="fa fa-edit"></i> Blog details</h3>
                                </div>
                                <div id="coll2" class="collapse" data-parent="#accord">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="document_title">Title of the page</label>
                                            <input class="form-control" id="document_title" name="document_title" placeholder="This will be displayed on the URL bar and the heading of the page">
                                        </div>
                                        <div class="form-group">
                                            <label for="document_author">Author of the page</label>
                                            <input class="form-control" id="document_author" name="document_author" placeholder="This will be displayed on the page">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card p-3">
                                <div class="card-header bg-warning text-white" style="cursor: pointer;">
                                    <h3 class="text-center" data-toggle="collapse" data-target="#coll3" aria-expanded="false" aria-controls="coll3"><i class="fa fa-edit"></i> Main content</h3>
                                </div>
                                <div id="coll3" class="collapse" data-parent="#accord">
                                    <div class="card-body">
                                        <h4 class="px-3">Sub-heading options:</h4>
                                        <div class="btn-group m-2" role="group" id="headings_group">
                                            <button type="button" class="btn btn-outline-secondary" id="add_h2">H2</button>
                                            <button type="button" class="btn btn-outline-secondary" id="add_h3">H3</button>
                                            <button type="button" class="btn btn-outline-secondary" id="add_h4">H4</button>
                                            <button type="button" class="btn btn-outline-secondary" id="add_h5">H5</button>
                                            <button type="button" class="btn btn-outline-secondary" id="add_h6">H6</button>
                                        </div>
                                        <h4 class="px-3">Text options:</h4>
                                        <div class="btn-group m-2" role="group">
                                            <button type="button" class="btn btn-outline-success" id="new_para"><i class="fa fa-plus"></i> Paragraph</button>
                                        </div>
                                        <div class="btn-group m-2" role="group" id="align_group">
                                            <button type="button" class="btn btn-outline-secondary text-left"><i class="fa fa-align-left"></i></button>
                                            <button type="button" class="btn btn-outline-secondary text-center"><i class="fa fa-align-center"></i></button>
                                            <button type="button" class="btn btn-outline-secondary text-justify"><i class="fa fa-align-justify"></i></button>
                                            <button type="button" class="btn btn-outline-secondary text-right"><i class="fa fa-align-right"></i></button>
                                        </div>
                                        <div class="btn-group m-2" role="group">
                                            <button type="button" class="btn btn-outline-primary" data-toggle="collapse" data-target="#link_collapse" aria-expanded="false" aria-controls="link_collapse"><i class="fa fa-link"></i> Link</button>
                                        </div>
                                        <div class="collapse mb-2" id="link_collapse">
                                            <div class="card card-body">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Text for the link" id="link_text">
                                                </div>
                                                <div class="form-group">
                                                    <input type="url" class="form-control" placeholder="URL" id="link_url">
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" name="a_color" type="radio" id="a_text-primary" value="">
                                                    <label class="form-check-label" for="a_text-primary"><a></a></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" name="a_color" type="radio" id="a_text-secondary" value="">
                                                    <label class="form-check-label" for="a_text-secondary"><a></a></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" name="a_color" type="radio" id="a_text-info" value="">
                                                    <label class="form-check-label" for="a_text-info"><a></a></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" name="a_color" type="radio" id="a_text-danger" value="">
                                                    <label class="form-check-label" for="a_text-danger"><a></a></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" name="a_color" type="radio" id="a_text-dark" value="">
                                                    <label class="form-check-label" for="a_text-dark"><a></a></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" name="a_color" type="radio" id="a_text-warning" value="">
                                                    <label class="form-check-label" for="a_text-warning"><a></a></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" name="a_color" type="radio" id="a_text-success" value="">
                                                    <label class="form-check-label" for="a_text-success"><a></a></label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" name="a_color" type="radio" id="a_text-black-50" value="">
                                                    <label class="form-check-label" for="a_text-black-50"><a></a></label>
                                                </div>
                                                <div class="btn-group m-2" role="group">
                                                    <button type="button" class="btn btn-outline-success">Add with text</button>
                                                    <button type="button" class="btn btn-outline-success">Add separately</button>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="px-3">Media options:</h4>
                                        <div class="btn-group m-2" role="group">
                                            <a role="button" class="btn btn-outline-info" href="image_upload.php" target="_blank" onclick="document.getElementById('image_uploaded_details').style.display = 'block'"><i class="fa fa-upload"></i> Upload an image</a>
                                        </div>
                                        <div class="row m-2" id="image_uploaded_details" style="display: none;">
                                            <div class="col">
                                                <h6>Uploaded details here:</h6>
                                                <div class="form-group">
                                                    <input class="form-control" type="text" id="image_url" placeholder="File URL">
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" type="text" id="image_alt" placeholder="Alt">
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" type="text" id="image_title" placeholder="Title">
                                                </div>
                                                <div class="btn-group">
                                                    <button class="btn btn-outline-info" id="paste_image_changes" type="button"><i class="fa fa-paste"></i> Paste</button>
                                                    <button class="btn btn-outline-success" id="save_image_changes" type="button"><i class="fa fa-save"></i> Save</button>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="px-3">Code options:</h4>
                                        <div class="btn-group m-2">
                                            <button type="button" class="btn btn-outline-info" id="html_output"><i class="fa fa-code"></i> View HTML Output</button>
                                        </div>
                                        <div class="mainConEditor"></div>
                                    </div>
                                    <button class="btn btn-lg btn-block btn-outline-info" type="submit" id="submit" name="submit" value="submit"><i class="fa fa-pencil"></i> Publish</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-title">
                            <h1 class="text-center p-5">Output:</h1>
                        </div>
                        <div class="card-body">
                            <main class="p-3" id="output_OHTML">
                                <div class="jumbotron">
                                    <h1 class="p-1" id="title">(Title)</h1>
                                    <div class="text-muted text-right" id="author"> - (Author)</div>
                                </div>
                                <img class="img-fluid w-100" src="lib/dummy_img.png" alt="">
                                <p class="p-3 m-0 date"></p>
                                <hr class="m-0">
                                <div class="lead p-5">

                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="lib/blog_editor.js"></script>
    </body>
</html>