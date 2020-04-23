import { SquareRootPipe } from './../pipes/square-root.pipe';
import { HighlighterDirective } from './../directives/highlighter.directive';
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
@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductCardComponent,
    SquareRootPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [MatCardModule, MatButtonModule, MatInputModule],
})
export class FeatureModule {}
