<?php  

    function tableur(){
    $line=$_POST['lignes']??"";
    $column=$_POST['colonnes']??"";
    $i=0;
    $u=0;

    echo "<table><tr>";
    while($u<$column){
        echo "<td><input type='checkbox'>/</td>";
        $u++;
    };
    echo "</tr>";
    while($i<$line){
        echo "<tr>";
        echo str_repeat("<td><input type='checkbox'>*</td>",$u);
        echo "</tr>";
        $i++;
    }; 
    echo "</table>";
    };
    
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="StyleSheet" href="assets/css/main.css">
    <title>PHP (TEST)</title>
</head>

<body>
<form method="POST" action="">
    <input type="number" name="lignes" placeholder="lignes">
    <input type="number" name="colonnes" placeholder="colonnes">
    <button type="submit" name="send">CRÉER</button>
</form>

<textarea readonly="readonly"><?=tableur()?></textarea>
<?=tableur()?>
</body>
</html>