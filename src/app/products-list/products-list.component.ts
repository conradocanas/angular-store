import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      title: "Bici montana",
      description: "Bla blasbas as asdasdasdas das asdasdasdas asd asd ",
      price: 500,
      types: ["Mountain", "Outdoor"]
    },
    {
      title: "Bici montana",
      description: "Bla blasbas as asdasdasdas das asdasdasdas asd asd ",
      price: 500,
      types: ["Mountain", "Outdoor"]
    },
    {
      title: "Bici montana",
      description: "Bla blasbas as asdasdasdas das asdasdasdas asd asd ",
      price: 500,
      types: ["Mountain", "Outdoor"]
    }
  ]

}
