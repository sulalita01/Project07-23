import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

//เพิ่มเอง
import { DataapiService } from '../dataapi.service';


@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {
  //ประกาศตัวแปรเพื่อรับค่าจากหน้า html
  txtid: any;
  txtname: any;
  txtflour: any;
  txtsauce: any;
  txtnote: any;
  txtquantity: any;
  txtcreate_at: any;

  //ตัวแปรที่ส่งไปยัง api
  id:any;
  name:any;
  flour:any;
  sauce:any;
  note:any;
  quantity:any;
  create_at:any;

  item : any;

  constructor(private navCtrl: NavController,private route: Router,public dataapi:DataapiService,) {

    const navigation = this.route.getCurrentNavigation();
    this.item = navigation?.extras?.state?.['i'];
  }

  //function เพิ่มข้อมูล
  addproduct(){
    let data = {
      id:this.txtid,
      name:this.txtname,
      flour:this.txtflour,
      sauce:this.txtsauce,
      note:this.txtnote,
      quantity:this.txtquantity,
      create_at:this.txtcreate_at,
    }

    this.dataapi.addproduct(data).subscribe({
      next:(res:any)=>{
        console.log ("เพิ่มข้อมูลสำเร็จ",res);
        this.route.navigateByUrl('/details');
      },
      error:(err) =>{
        console.log("เพิ่มข้อมูลไม่สำเร็จ",err);
      }
  });
  this.clearForm();
}

  //function สำหรับล้างข้อมูล
  clearForm(){
    this.txtid = "",
    this.txtname = "",
    this.txtflour = "",
    this.txtsauce = "",
    this.txtnote = "",
    this.txtquantity = "",
    this.txtcreate_at = ""
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToqueue() {
    this.navCtrl.navigateForward('/queue');
  }

    showdata(){
      this.route.navigate(['/details']);
    }



  }
