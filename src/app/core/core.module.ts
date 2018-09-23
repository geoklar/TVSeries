import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BreadCrumbNavComponent } from './bread-crumb-nav/bread-crumb-nav.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    MenuComponent,
    BreadCrumbNavComponent,
    HomeComponent
  ],
  declarations: [
    HeaderComponent,
    LoginComponent,
    MenuComponent,
    BreadCrumbNavComponent,
    HomeComponent
  ]
})
export class CoreModule { }
