<?php
    class HargaTiketWisata{
        public function Batu(){
            return "Objek Wisata Batu, Harga: 50.000";
        } 

        public function Paralayang(){
            return "Onjek Wisata Paralayang, Harga: 30.000";
        } 
    }
    
    abstract class Pemesanan{
        abstract public function pesanTiket($harga);
        abstract public function cetakTiket($harga);
    }



    class PesanTiketWisata extends Pemesanan{
        

        public function pesanTiket($harga){   
            echo "Kamu Berhasil memesan tiket, ". $harga. "<br>";
        }

        public function cetakTiket($harga){
            echo "Tiket Berhasil Dicetak. Total Pembayaran : ". $harga. "<br>";
        }
    }

    $Tempat = new HargaTiketWisata();
    $DO = new PesanTiketWisata();
    $DO->pesanTiket($Tempat->Batu());
    $DO->pesanTiket($Tempat->Paralayang());

    trait PesanDouble{
        public function pesanTiket($harga){
            echo "Kamu Berhasil memesan 2 tiket, Harga: ". 2*$harga. "<br>";
        }

        public function cetakTiket($harga){
            echo "Tiket Berhasil Dicetak.Total Pembayaran : ". $harga. "<br>" ;
        }
    }

    class Beli2{
        use PesanDouble;
    }

    
    class BeliDua{
        use PesanDouble;
    }


    $GimnasMauKeBatu = new Beli2();
    $GimnasMauKeBatu->pesanTiket(20000);
    $GimnasMauKeBatu->cetakTiket(20000);

    $GimnasMauKeBatu = new BeliDua();
    $GimnasMauKeBatu->pesanTiket(20000);
    $GimnasMauKeBatu->cetakTiket(20000);

?>