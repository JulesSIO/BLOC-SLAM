<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP (TEST)</title>
</head>
<body>


<form method="POST">
    <input type="number" name="number" value="<?php echo $_POST['number']??""?>">
    <input type="color" name="color" value="<?php echo $_POST['color']??""?>">
    <textarea name="message" value="<?php echo $_POST['message']??""?>"></textarea>
    <button type="submit">VALIDER</button>
</form>
<p style="color : <?php echo $_POST["color"]??""?>;font-size: <?php echo $_POST["number"]??""?>px"><?php echo $_POST["message"]??""?></p>



</body>
</html>