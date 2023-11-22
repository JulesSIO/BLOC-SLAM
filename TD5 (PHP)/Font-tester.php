<?php
$message = isset($_GET['message']) ? $_GET['message'] : "ERROR : TEXT NO INSERT";
$color= isset($_GET['color']) ? $_GET['color'] : "black";
$size= isset($_GET['size']) ? $_GET['size']: "12";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP (TEST)</title>
</head>
<body>
<p>




<ul>
    <li>
        <a href="?message=Test rouge&color=red&size=15">ROUGE</a>
    </li>
    <li>
        <a href="?message=Test Vert&color=green&size=30">VERT</a>
    </li>
    <li>
        <a href="?message=Test Bleu&color=blue&size=50">BLEU</a>
    </li>
</ul>

<p style="color : <?php echo $color?>;font-size: <?php echo $size?>px"><?php echo $message?></p>



</body>
</html>