import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataapiService } from '../dataapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

productshow:any=[];
  constructor(private navCtrl: NavController,
    public dataapi: DataapiService,
    private nav: NavController,
    private http: HttpClient
  ) {

  }

  goToqueueback() {
    this.navCtrl.navigateForward('/queueback');
  }

  ngOnInit() {
    this.productshow = this.dataapi.data_detail_pd;
  }

  deldata(id: any){
    this.dataapi.delproduct(id).subscribe({
      next: (res:any) => {
        console.log("ลบข้อมูลสำเร็จ", res);
        this.productshow = res;
      },
      error: (err: any) => {
        console.log("เกิดข้อผิดพลาดในการลบข้อมูล", err);
      }
    });
  }
}
