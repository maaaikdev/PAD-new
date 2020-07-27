import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/core/services/sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor(public sign: SignService) { }

  ngOnInit() {
  }

  closeSignature() {
    this.sign.closeSign();
  }

  acceptSignature() {
    this.sign.acceptSign();
  }
}