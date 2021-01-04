import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {
  
  @Input() cantidad = 0;
  @Input() texto = 'Titulo';

  constructor() { }

  ngOnInit(): void {
  }

}
