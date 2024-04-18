
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { ModelsListComponent } from './features/models/components/models-list/models-list.component';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { BrandComponent } from './features/brands/components/brand/brand.component';

export const routes: Routes = [
  { path:'',
    pathMatch:'full',
    redirectTo:'home'
  ,},
  {
    path:'home', //  /home
    //pathMatch:'prefix', defaultta zaten böyle
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        component:HomePageComponent
      },
      {
        path:"models", // home/models
        component:ModelsListComponent
      },
      {
        path:"brands",
        component:BrandComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'not-found'
  },
  {
    path:'not-found', // bu sayfa en sona yazılmalı ki hiçbiri bulunamazsa açılsın
    component:NotFoundPageComponent
  }
];
