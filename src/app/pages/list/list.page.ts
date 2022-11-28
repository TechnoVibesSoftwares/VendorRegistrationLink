import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
   
  UserData:any=[];
  isModalOpen = false;
  
  constructor(private http:HttpClient  ) { }

  ngOnInit() {
    this.http.get('http://demo2421825.mockable.io/vendorList').subscribe((Data: any)=>{
    console.log(Data);
    this.UserData=Data;


    });
  }


 setOpen(isOpen: boolean) {
 
  this.isModalOpen = isOpen;
 
  }
}





