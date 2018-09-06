import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-proyects-hobbies',
  templateUrl: './proyects-hobbies.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 10000, noPause: true, showIndicators: true }}
  ],
  styleUrls: ['./proyects-hobbies.component.css']
})
export class ProyectsHobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
