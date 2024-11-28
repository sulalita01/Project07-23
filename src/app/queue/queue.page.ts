import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {

  productshow:any=[];

  constructor(public dataapi:DataapiService) {
  }

  ngOnInit() {
    this.showproduct()
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
