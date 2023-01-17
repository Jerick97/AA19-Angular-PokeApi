import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    TablaComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TablaComponent,
    BuscarComponent
  ]
})
export class ComponentsModule { }
