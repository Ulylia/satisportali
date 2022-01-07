import { Kisi } from './../../models/kisi';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  secKisi: Kisi = new Kisi();
  baslik: string= "Yeni Kayıt";
  kisiler: Kisi[]= [
    {
      "AdSoyad": "Sariye Yücetaş",
      "Yas": 28,
      "Mail": "risus@Integer.cv",
      "Id": 70
    },
    {
      "AdSoyad": "Önal Öztürk mavi",
      "Yas": 48,
      "Mail": "Integer@faucibus.km",
      "Id": 72
    },
    {
      "AdSoyad": "Kotuz Hocaoğlu",
      "Yas": 42,
      "Mail": "nec@risus.mt",
      "Id": 47
    },
    {
      "AdSoyad": "Özden Kimsesizoğlu",
      "Yas": 39,
      "Mail": "sapien@ut.qa",
      "Id": 94
    },
    {
      "AdSoyad": "Define Özkaya",
      "Yas": 30,
      "Mail": "amet@tortor.lb",
      "Id": 39
    
    }];



  constructor() { }

  ngOnInit(): void {
  }

  KisiSil(k: Kisi) {
    var index=this.kisiler.indexOf(k);
    this.kisiler.splice(index, 1);
   // veri tabanı silme kodları servis vb.
  }


}
