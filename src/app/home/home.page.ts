import { DataapiService } from './../dataapi.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataMember: any = {};

  txtidstu:string|undefined;
  txtname:string|undefined;
  txtnname:string|undefined;
  txtage:string|undefined;
  txtphone:string|undefined;
  txtaddress:string|undefined;
  txtstatus:string|undefined;

  postidstu:any;
  postname:any;
  postnname:any;
  postage:any;
  postphone:any;
  postaddress:any;
  poststatus:any;


  constructor(
    public dataapi: DataapiService,
    private route:Router
  ) {}

  //ฟังก์ชันสำหรับเพิ่มข้อมูล
  addmember(){
    let data = {
    id_stu:this.txtidstu,
    name:this.txtname,
    nname:this.txtnname,
    age:this.txtage,
    phone:this.txtphone,
    address:this.txtaddress,
    status:this.txtstatus
    }

    this.dataapi.addMember(data).subscribe({
      next: (res) => {
        console.log("ข้อมูลถูกเพิ่ม",res);
        this.route.navigate(['/show']);
      },
      error: (err) => {
        console.log("ข้อมูลไม่ถูกเพิ่ม",err);
      }
    });

    this.clearForm();

  }

  //ฟังชันสำหรับล้างข้อมูล
  clearForm(){
    this.txtidstu = "";
    this.txtname = "";
    this.txtnname = "";
    this.txtage = "";
    this.txtphone = "";
    this.txtaddress = "";
    this.txtstatus = "";
  }

  showdata(){
    this.route.navigate(['/show']);
  }

}
