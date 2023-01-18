import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {
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