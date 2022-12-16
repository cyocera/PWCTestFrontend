import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from 'src/app/components';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutComponent
  ]
})
export class HomeModule { }
