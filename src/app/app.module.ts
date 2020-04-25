import { BrandService } from './services/brand.service';
import { GetService } from './services/get.service';
import { FeatureModule } from './feature/feature.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './generics/header/header.component';
import { FooterComponent } from './generics/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTransferService } from './services/data-transfer.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [GetService, BrandService, DataTransferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
