import { ProductCardComponent } from './../components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';


 
@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductCardComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    
  ],
  exports: [MatCardModule, MatButtonModule, MatInputModule, MatTooltipModule],
})
export class FeatureModule {}
