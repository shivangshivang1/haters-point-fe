import { BrandService } from '../../services/brand.service';
import { GetService } from '../../services/get.service';
import { Component, OnInit } from '@angular/core';
import { BrandModel } from 'src/app/models/brand.model';

@Component({
  selector: 'hp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brands: BrandModel[];
  isDataShown: boolean = true;
  buttonText: string = 'Hide Data';

  constructor(
    private service: GetService,
    private brandsService: BrandService
  ) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(result => {
      console.log(result);
    });

    this.brandsService.getBrands().subscribe(result => {
      this.brands = result;
      console.log(this.brands);
    });
  }

  toggleData() {
    this.isDataShown = !this.isDataShown;
    if (this.isDataShown) {
      this.buttonText = 'Hide Data';
    } else {
      this.buttonText = 'Show Data';
    }
  }
}
