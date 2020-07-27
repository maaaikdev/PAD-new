import { Component, OnInit } from '@angular/core';
import { DebtsService } from '../../../core/services/debts.service';
import { CustomerDebts } from '../../../core/models/customerDebts.model';

@Component({
  selector: 'app-dfilters',
  templateUrl: './dfilters.component.html',
  styleUrls: ['./dfilters.component.scss']
})
export class DfiltersComponent implements OnInit {


  constructor(public debts: DebtsService) {
  }

  ngOnInit() {
  }
}
