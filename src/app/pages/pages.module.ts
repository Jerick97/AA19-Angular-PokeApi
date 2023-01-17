import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    DetalleComponent
  ]
})
export class PagesModule { }
