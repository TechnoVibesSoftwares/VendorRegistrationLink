import { Component, OnInit ,ViewChild } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { CartService } from 'src/app/services/cart.service';
 import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  UserData:any=[];
  isModalOpen = false;
  index:any=[];
  setopens!: boolean;
  public products:any=[];
  @ViewChild(IonModal)
  modal!: IonModal;
  constructor(private http:HttpClient, private cartService: CartService  ) { }

  ngOnInit() {
    this.http.get('http://demo2421825.mockable.io/vendorList').subscribe((Data: any=[])=>{
    console.log(Data);
    this.UserData=Data;

    });

    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;

    });
  }


  addtocart(item:any){
    this.cartService.addtoCart(item);
  }

  removeitem(item:any){
    this.cartService.removeCartItem(item)  ;
    this.modal.dismiss(null,'cancel');
  }

 setOpen(isOpen: boolean) {

  this.isModalOpen = isOpen;

  }



}


