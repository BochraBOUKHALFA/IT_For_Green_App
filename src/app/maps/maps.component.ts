import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var H: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  private platform: any;
  private map: any;
  private ui: any;

  constructor() {
    this.platform = new H.service.Platform({
      apikey: "VSegJgHf6QBqghl_Zr7AqelxvlWTL2h6Pck8nydrwXw"
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const defaultLayers = this.platform.createDefaultLayers();

    this.map = new H.Map(
      document.getElementById('map'),
      defaultLayers.vector.normal.map, {
        center: { lat: 50, lng: 5 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    window.addEventListener('resize', () => this.map.getViewPort().resize());

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);

    this.moveMapToBerlin(this.map);
    let s = this.addMarkersToMap();
    this.map.addObject(s);

  }

  moveMapToBerlin(map: any) {
    map.setCenter({ lat: 48.8566, lng: 2.3522 });
    map.setZoom(14);
  }

addMarkersToMap() {
    const locations = [
        { lat: 48.8566, lng: 2.3522, text: "Nombre d'arbre ", count: 10, maxCount: 20 },
        { lat: 48.8606, lng: 2.3376, text: "Nombre d'arbre ", count: 5, maxCount: 15 },
        { lat: 48.8584, lng: 2.2945, text: "Nombre d'arbre ", count: 9, maxCount: 18 }
    ];

    for (let loc of locations) {
        const marker = new H.map.Marker({lat: loc.lat, lng: loc.lng});
        marker.addEventListener('tap', (evt: H.mapevents.Event) => {
            let content = `${loc.text} ${loc.count}/${loc.maxCount} 
                          <button class="removeTree">-</button>
                          <button class="addTree">+</button>`;
            
            const bubble = new H.ui.InfoBubble({lat: loc.lat, lng: loc.lng}, {
                content: content
            });
            this.ui.addBubble(bubble);

            const updateContent = () => {
                bubble.setContent(`${loc.text} ${loc.count}/${loc.maxCount} 
                                   <button class="removeTree" ${loc.count <= 0 ? 'disabled' : ''}>-</button>
                                   <button class="addTree" ${loc.count >= loc.maxCount ? 'disabled' : ''}>+</button>`);
                attachEventsToButtons();
            }

            const attachEventsToButtons = () => {
                const addButton = bubble.getContentElement().querySelector('.addTree');
                const removeButton = bubble.getContentElement().querySelector('.removeTree');
                
                addButton?.addEventListener('click', () => {
                    if (loc.count < loc.maxCount) {
                        loc.count++;
                        updateContent();
                    }
                });

                removeButton?.addEventListener('click', () => {
                    if (loc.count > 0) {
                        loc.count--;
                        updateContent();
                    }
                });
            }

            attachEventsToButtons();
        });
        this.map.addObject(marker);
    }
}


}
