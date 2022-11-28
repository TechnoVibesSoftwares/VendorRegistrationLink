import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { VendorRegistrationService } from 'src/app/services/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vregister',
  templateUrl: './vregister.page.html',
  styleUrls: ['./vregister.page.scss'],
})
export class VregisterPage implements OnInit {
  
  public errorMessage: string | undefined;

  data={
    gstNo:'',
    storeName:'',
    storeAddress:'',
    emailId:'',
    name:'',
    dob:'',
    gender:'',
    homeAddress:'',
    password:'',
    mobileNo:'',
    alternateMobileNo:'',
    storeType:'',
    storeCategory:'',
    aadharNo:'',
    sale:'',
    store:'',
    pan:'',
    revenue :'',
    bankName:'',
    accountNo:'',
    ifscCode:'',
    branch:''
   };

  constructor(private toastController: ToastController,private vendorRegistrationService:VendorRegistrationService, private router: Router,
    ) { }

  ngOnInit() {
  }
  doSubmitForm(){
    
console.log("Try to submit form");
console.log("Data",this.data);

 
    if(this.data.emailId==='' || this.data.password==='')
    {
      this.presentToast('Fields can not be empty');

    }else{
      this.vendorRegistrationService.VendorService(this.data).subscribe(
        response=>{
          console.log(response);
          this.presentToast('successfully');
        },error=>{
    console.log("Error form server :"+ error);
    this.presentToast(error);
        }
      )
      // alert(' registration successfully');
      // this.router.navigateByUrl('/home');

    }

} 
async presentToast(msg: string) {
  const toast = await this.toastController.create({
   message: msg,
   duration: 2000,
  });
 await toast.present();
}
}