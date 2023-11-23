<?php
extract($_GET);
$message = isset($message) ? $message : "";
$color= isset($color) ? $color : "black";
$size= isset($size) ? $size: "12";

if(isset($sizeVar)){
    $up=($sizeVar=='+')?+10:-10;
    $size+=$up;
};
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

<form method="GET">
        <input type="text" name="message" value="<?=$message?>">
        <input type="color" name="color" value="<?=$color?>">
        <input type="number" name="size" value="<?=$size?>">
        <button type="submit" name="sizeVar" value="+">+</button>
        <button type="submit" name="sizeVar" value="-">-</button>
        <button type="submit" name="send">ENVOYER</button>

</form>

<p style="color : <?php echo $color?>;font-size: <?php echo $size?>px"><?php echo $message?></p>

</body>
</html>