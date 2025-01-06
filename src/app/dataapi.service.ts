import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DataapiService {
  delMember(id: any) {
    throw new Error('Method not implemented.');
  }
  data_detail_pd: any=[];
  constructor(
    public http:HttpClient,
  ) {}

  addproduct(data: any){
    console.log("ข้อมูลที่ส่งไปยัง API",data);
    return this.http.post('http://127.0.0.1/Project07_API_Update/Project07_API/insert.php',data);
   }

   //ฟังก์ชันแสดงผลข้อมูล
  listProduct(){
    return this.http.get('http://127.0.0.1/Project07_API_Update/Project07_API/list_product.php');
  }

   //ฟังก์ชันลบผลข้อมูล
  delproduct(id: any){
    return this.http.delete('http://127.0.0.1/Project07_API_Update/Project07_API/Delete.php?id='+id);
  }



}

