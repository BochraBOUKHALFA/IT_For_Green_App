import { Component, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { SigninComponentModal } from '../modals/signin_modal/signin-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-map',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(NgbModal) private modalService!: NgbModal;
  private platform: any;
  private map: any;

  constructor() {
    this.platform = new H.service.Platform({
      apikey: 'VSegJgHf6QBqghl_Zr7AqelxvlWTL2h6Pck8nydrwXw', // Replace with your HERE API key
    });
  }

  ngOnInit(): void {
    this.initializeMap();
  }
  initializeMap() {
    const defaultLayers = this.platform.createDefaultLayers();
    const mapContainer = document.getElementById('map-container')!; // Declare mapContainer here
  
    this.map = new H.Map(
      mapContainer, // Use mapContainer here
      defaultLayers.vector.normal.map,
      {
        center: { lat: 52.5, lng: 13.4 }, // Replace with your desired initial coordinates
        zoom: 10, // Adjust the zoom level as needed
      }
    );
  }

  openLoginModal(){
    const modalRef = this.modalService.open(SigninComponentModal, { size: 'lg' }); // Use your modal component

  }
}
