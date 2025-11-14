import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavComponent } from './menu-nav/menu-nav.component';



@NgModule({
  declarations: [
    MenuNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    MenuNavComponent
  ]
})
export class SharedModule { }
