<?php
extract ($_POST);
$message=isset($message)? $message:"";
$color=isset($color)? $color:"black";
$size=isset($size)? $size:"12";

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


<form method="POST">
    <input type="number" name="size" value="<?php echo $size??""?>">
    <input type="color" name="color" value="<?php echo $color??""?>">
    <textarea name="message" ><?php echo $message??'Insérer votre texte'?></textarea>
    <button type="submit" name="sizeVar" value="+">+</button>
    <button type="submit" name="sizeVar" value="-">-</button>
    <button type="submit">VALIDER</button>
</form>
<p style="color : <?php echo $color??""?>;font-size: <?php echo $size??""?>px"><?php echo $message??""?></p>



</body>
</html>