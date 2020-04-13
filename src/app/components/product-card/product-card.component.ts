import { BrandModel } from 'src/app/models/brand.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hp-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() childBrand: BrandModel;
  @Output() express = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  expressHate(feeling: string) {
    this.express.emit(feeling);
  }
}
