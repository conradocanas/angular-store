import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
