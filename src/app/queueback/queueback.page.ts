import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataapiService } from '../dataapi.service';


@Component({
  selector: 'app-queueback',
  templateUrl: './queueback.page.html',
  styleUrls: ['./queueback.page.scss'],
})
export class QueuebackPage implements OnInit {
  productshow:any[]=[];



  constructor(private navCtrl: NavController,public dataapi:DataapiService) {
    this.showproduct();
   }

  goTodetails(datadetail:any) {
    this.dataapi.data_detail_pd = datadetail;
    console.log(datadetail);
    this.navCtrl.navigateForward('/details');
}

  ngOnInit() {
    this.showproduct();
  }

  showproduct(){
    this.dataapi.listProduct().subscribe({
      next:(res:any)=>{
        console.log("แสดงผลข้อมูลได้",res);
        this.productshow = res;
      },
      error:(error:any)=>{
        console.log("แสดงผลข้อมูลไม่ได้",error);
      }
    });
  }
}
