<?php
require_once './PHPExcel.php';
$excel = PHPExcel_IOFactory::load('quiz results.xlsx');
$excel->setActiveSheetIndex(0);
$i = 4;

while($excel->getActiveSheet()->getCell('A'.$i)->getValue() != "") {
    
    $user = $excel->getActiveSheet()->getCell('A'.$i)->getValue();
    $pass = $excel->getActiveSheet()->getCell('C'.$i)->getValue();
    $i++;
    
}

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Ordin@trix 19.0 | Prelim II</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
        <link rel="icon" href="https://yuvrajsharma07.github.io/ordin/lib/favicon.png" sizes="26x26" type="image/png">
        <link rel="stylesheet" href="crossword.min.css">
    </head>
    <body style="background-color: #333" class="text-white" onload="initializeScreen()">
        <div class="intro text-center">
            <a href="http://www.ordinatrix.tech/"><img style="padding: 5rem; background-color: #454d55" class="img-fluid" src="https://yuvrajsharma07.github.io/ordin/lib/logo.png" placeholder="Ordin@trix 19.0"></a>
            <div class="banner"></div>
            <ol class="container text-left">
                <li>This is the Second and FINAL Prelim for Quiz@trix. The top 6 scorers from this round would qualify for the Final on 6th August, 2019, at Ordin@trix 19.0.</li>
                <li>This round is a Crossword. Participants are supposed to complete the crossword within the given time frame, with the help of clues given at the end of the page.</li>
                <li>This round is for 30 minutes. For every 5 minutes used henceforth, 10 marks would be deducted.</li>
                <li>After filling in all the boxes, the participants are supposed to click the submit button to submit their entry to us.</li>
                <li>The top 6 would be notified by mail and a list of them would be uploaded to our Facebook page and website.</li>
            </ol>
            <div class="container">We wish all the participants best of luck! May the best 6 teams come forth for the Final Showdown.</div>
            <div class="banner"></div>
            <button class="btn timerbtn btn-lg btn-dark">Start</button>
            <div class="banner"></div>
        </div>
        <div class="main" style="display: none">
        <center>
            <a href="http://www.ordinatrix.tech/"><img style="padding: 5rem; background-color: #454d55" class="img-fluid" src="https://yuvrajsharma07.github.io/ordin/lib/logo.png" placeholder="Ordin@trix 19.0"></a>
            <div class="banner"></div>
            <form action="process.php" method="post">
                <nav class="navbar navbar-expand-lg fixed-top" style="background-color: rgba(0,0,0,0.4)">
            <input class="ml-auto mr-auto timer" id="timer" value="00:00:00" name="timer" readonly />
        </nav>
                <table id="puzzle">
                    
                </table>
                <div class="banner"></div>
                <div class="input-group col-md-2">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="usrmail">School Code</label>
                    </div>
                    <select class="custom-select" type="text" name="usermail" id="usrmail">
                    <?php
                    require_once './PHPExcel.php';
                    $excel = PHPExcel_IOFactory::load('quiz results.xlsx');
                    $excel->setActiveSheetIndex(0);
                    $i = 4;

                    while($excel->getActiveSheet()->getCell('A'.$i)->getValue() != "") {
    
                        $user = $excel->getActiveSheet()->getCell('A'.$i)->getValue();
                        $pass = $excel->getActiveSheet()->getCell('C'.$i)->getValue();
                        echo "
                        <option value='".$user."'>".$pass."</option>
                        ";
                        $i++;
                    }

                    ?>
                    </select>
                    <div class="text-muted">If not sure about your school code, <a href="confirm.php" target="_blank">check here</a>.</div>
                </div>
                <div class="banner"></div>
                
                <input class="btn btn-lg btn-outline-secondary"  type="submit" value="Clear All" onclick="clearAllClicked()">
                <input class="btn btn-lg btn-outline-secondary timerstop" id="submit" type="submit" value="Submit">
            </form>
            <div class="banner"></div>
            <div class="row">
                <div class="col-md-6">
                    <h1>Across</h1>
                    <ul class="text-left" style="list-style-type: none;">
                        <li>3) Confusion= { ++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>++++++++++++++.>++++++++++++++.<+++++++++++++.>----.+++++.<++++++++.>.+.-----.+++. }</li>
                        <li>5) Faster than Android and macOS</li>
                        <li>8) An Apple fell on the M68</li>
                        <li>9) Theory of Relativity</li>
                        <li>11) That's one small step for man, one giant leap for mankind</li>
                        <li>12) Pray for Me</li>
                        <li>13) Dr Dre</li>
                        <li>15) A Co-Founder who Cameoed in the Big Bang Theory</li>
                        <li>17) 43 72 65 61 74 6f 72 6f 66 49 6e 74 65 72 6e 65 74</li>
                        <li>18) Cheese Grater</li>
                        <li>19) Don't panic, it's organic!</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h1>Down</h1>
                    <ul class="text-left" style="list-style-type: none;">
                        <li>1) The reason to move on: courage</li>
                        <li>2) 氧气</li>
                        <li>4) We are under assault- The engines are dead, life support failing</li>
                        <li>6) Insomniac</li>
                        <li>7) That's all folks!</li>
                        <li>10) Jeremy Zucker</li>
                        <li>13) --- -. . .--. .-.. ..- ...</li>
                        <li>14) I love you, bro</li>
                        <li>16) A new kind of credit card</li>
                    </ul>
                </div>
                </div>
                <div class="banner"></div>
        </center>
            </div>
    <script src="easytimer.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="crossword.min.js"></script>
    </body>
</html>