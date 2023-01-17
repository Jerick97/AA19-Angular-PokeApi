import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  icono:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  Menu(){
    this.icono=!this.icono;
  }
}
