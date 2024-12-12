import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  //ประกาศตัวแปรแบบอาเรย์เพื่อรับข้อมูล
    data_detailMen: any=[]; //ใช้งานคู่กับหน้าแสดงรายละเอียด

  constructor(
    public http:HttpClient,
  ){ }

  //ฟังก์ชันการเพิ่มที่ส่งไปยัง api
  addMember(data:any){
    console.log("ข้อมูลที่ส่งไปยัง api",data);
    return this.http.post('http://localhost/class-23/api/insert.php', data);
  }

  //สร้างขึ้นมาเพื่อดึงข้อมุลมาจาก api
  listMember(){
    return this.http.get('http://localhost/class-23/api/list_member.php');
  }

//ฟังก์ชันสำหรับแก้ไขข้อมูล

editMember(dataEdit: any){
  return this.http.put('http://localhost/class-23/api/update.php',dataEdit);
}

delMember(id:any){
  return this.http.delete('http://localhost/class-23/api/delete.php?id='+id)
}

}
