import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { google } from 'google-maps';


declare const google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
   directionsDisplay: any;
    directionsService: any;

  bounds = null;
  map: any;
  @ViewChild('mapElement') mapElement: any;
  title = 'Angular-desafio';


  ngAfterViewInit(): void {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  ngOnInit(): void {

  }
}
