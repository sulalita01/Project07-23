import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenudetailPage } from '../menudetail/menudetail.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
filteredItem: any;
menudetail(_t28: { name: string; price: number; ImageURL: string; }) {
throw new Error('Method not implemented.');
}

  constructor(private detail: NavController) {}

    items=[
      {
        id: 1,
        name:'นูเทล่าฝอยทอง โกโก้ครั้นเยลลี่',
        price: 45,
        ImageURL:'../../assets/pic/product/นูเทล่าฝอยทอง โกโก้ครั้นเยลลี่.jpg'
      },
      {
        id: 2,
        name:'ไข่สองใบ แฮมปูอัดไข่กุ้งดับเบิ้ลชีส',
        price: 95,
        ImageURL:'../../assets/pic/product/ไข่สองใบ แฮมปูอัดไข่กุ้งดับเบิ้ลชีส.jpg'
      },
      {
        id: 3,
        name:'ช็อกโกแลตคอป ช็อกเม็กช็อก',
        price: 30,
        ImageURL:'../../assets/pic/product/ช็อกโกแลตคอป ช็อกเม็กช็อก.jpg'
      },
      {
        id: 4,
        name:'ไข่ไก่หยองแฮมน้ำสลัดโบราณ',
        price: 55,
        ImageURL:'../../assets/pic/product/ไข่ไก่หยองแฮมน้ำสลัดโบราณ.jpg'
      },
      {
        id: 5,
        name:'พิซซ่าไข่กุ้ง ปูอัดดับเบิ้ลชีส',
        price: 70,
        ImageURL:'../../assets/pic/product/พิซซ่าไข่กุ้ง ปูอัดดับเบิ้ลชีส.jpg'
      },
      {
        id: 6,
        name:'พิซซ่าผักขม ไข่กุ้งดับเบิ้ลชีส',
        price: 70,
        ImageURL:'../../assets/pic/product/พิซซ่าผักขม ไข่กุ้งดับเบิ้ลชีส.jpg'
      },
      {
        id: 7,
        name:'ไข่แฮมทูน่าสาหร่าย ไข่กุ้งดับเบิ้ลชีส',
        price: 95,
        ImageURL:'../../assets/pic/product/ไข่แฮมทูน่าสาหร่าย ไข่กุ้งดับเบิ้ลชีส.jpg'
      },
      {
        id: 8,
        name:'พริกเผาแฮมปูอัดสาหร่าย ไข่กุ้งกับเบิ้ลชีส',
        price: 90,
        ImageURL:'../../assets/pic/product/พริกเผาแฮมปูอัดสาหร่ายไข่กุ้งกับเบิ้ลชีส.jpg'
      },
      {
        id: 9,
        name:'นูเทลล่าฝอยทอง เม็ดเรนโบว์มะม่วงหิมพานต์เยลลี่',
        price: 55,
        ImageURL:'../../assets/pic/product/นูเทลล่าฝอยทอง เม็ดเรนโบว์มะม่วงหิมพานต์เยลลี่.jpg'
      },
      {
        id: 10,
        name:'ไข่พิซซ่าไส้กรอก แฮมสาหร่ายไข่กุ้งดับเบิ้ลชีส',
        price: 100,
        ImageURL:'../../assets/pic/product/ไข่พิซซ่าไส้กรอก แฮมสาหร่ายไข่กุ้งดับเบิ้ลชีส.jpg'
      },
      {
        id: 11,
        name:'ไข่พริกเผา ปูอัดแฮมดับเบิ้ลชีส',
        price: 75,
        ImageURL:'../../assets/pic/product/ไข่พริกเผา ปูอัดแฮมดับเบิ้ลชีส.jpg'
      },
      {
        id: 12,
        name:'ไข่พิซซ่าแฮมผักขมชีสธรรมดา',
        price: 60,
        ImageURL:'../../assets/pic/product/ไข่พิซซ่าแฮมผักขมชีสธรรมดา.jpg'
      },
      {
        id: 13,
        name:'ไข่พริกเผาแฮมไก่หยอง ปูอัดไข่กุ้งดับเบิ้ลชีส',
        price: 100,
        ImageURL:'../../assets/pic/product/ไข่พริกเผาแฮมไก่หยอง ปูอัดไข่กุ้งดับเบิ้ลชีส.jpg'
      },
      {
        id: 14,
        name:'นูเทลล่าฝอยทอง ลูกเกดบราวนี่คอปช็อก',
        price: 60,
        ImageURL:'../../assets/pic/product/นูเทลล่าฝอยทอง ลูกเกดบราวนี่คอปช็อก.jpg'
      },
      {
        id: 15,
        name:'นูเทลล่ากล้วยฝอยทอง เม็ดมะม่วงอัลมอนด์เรนโบว์เยลลี่',
        price: 75,
        ImageURL:'../../assets/pic/product/นูเทลล่ากล้วยฝอยทอง เม็ดมะม่วงอัลมอนด์เรนโบว์เยลลี่.jpg'
      },
      {
        id: 16,
        name:'นูเทลล่าฝอยทองเม็ดมะม่วง เยลลี่เรนโบว์ ไมโล',
        price: 60,
        ImageURL:'../../assets/pic/product/นูเทลล่าฝอยทองเม็ดมะม่วง เยลลี่เรนโบว์ ไมโล.jpg'
      },
      {
        id: 17,
        name:'กล้วยช็อกวิปครีม',
        price: 59,
        ImageURL:'../../assets/pic/product/กล้วยช็อกวิปครีม.jpg'
      },
      {
        id: 18,
        name:'สตรอว์เบอร์รี่วิปครีม',
        price: 69,
        ImageURL:'../../assets/pic/product/สตรอว์เบอร์รี่วิปครีม.jpg'
      },
      {
        id: 19,
        name:'โอริโอ้ผงโอวันตินวิปครีม',
        price: 69,
        ImageURL:'../../assets/pic/product/โอริโอ้ผงโอวันตินวิปครีม.jpg'
      },
      {
        id: 20,
        name:'ฝอยทองวิปครีม',
        price: 59,
        ImageURL:'../../assets/pic/product/ฝอยทองวิปครีม.jpg'
      }
  ]

  ngOnInit() {}

  gotomenudetail(i:any){
    this.detail.navigateForward('/menudetail',{state:{i}});
  }

}
