import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../shared/shared.module';

import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    RecuperarPassComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule
  ]
})
export class PagesModule { }
