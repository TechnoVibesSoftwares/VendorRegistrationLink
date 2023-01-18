 
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  ngOnInit() {
    
  }
  @ViewChild(IonModal) modal: IonModal;

  message = ' ';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  submit() {
    this.modal.dismiss(this.name, 'submit');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'submit') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}