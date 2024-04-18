import { ModelsListComponent } from './../../features/models/components/models-list/models-list.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { BrandComponent } from '../../features/brands/components/brand/brand.component';
import { NavbarComponent } from '../../shared/componenets/navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,RouterModule,MainLayoutComponent,ModelsListComponent,BrandComponent,NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  counter:number=0;

  setCounter(sum:number){
  console.log('butona basıldı')
  this.counter+=sum;
  }

  get isCounterZero(): boolean{
    return this.counter===0;
  }
}
