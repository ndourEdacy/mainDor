<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'maindor');
define('DB_USER', 'root');
define('DB_PASS', '');

try
{
    $bdd = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);
}
catch(PDOException $e)
{
    die('Erreur : ' . $e->getMessage());
}
?>
