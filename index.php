<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <?php
    
        if (!isset($_GET['section']) OR $_GET['section'] == 'index')
        {
            header("Location:acceuil.php");

        } 
        ?>
    </body>
</html>
