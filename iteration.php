<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Mahasiswa</title>
</head>

<body>
    <h2>Daftar Mahasiswa</h2>
    <br>
        <?php 
            for($i = 1; $i <= 11; $i++){
                echo " <li> Nama Mahasiswa ke ". $i ." </li>";
            }

            echo "percobaan menampilkan dengan php <br>";
            echo "ini adalah baris 1 <br>";
            echo "testing <br>";

            $buah = array("Mangga", "Nanas", "Gimnas");
            echo "Nama Buah: ". $buah[0] ." ". $buah[1]." ". $buah[2] ;
        ?>
        

</body>

</html>