import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public posts = [
    {
      title: 'Wandern durch die Fjorde',
      date: Date.now(),
      content: 'Hey ihr lieben ich wandere gerade in Norwegen durch die Fjorde!',
      lat: 64.00,
      lng: 19.00,
    },
  ];
  public onClick() {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(this.writeGPS));
    }
  }

  public writeGPS(position) {
    console.log(position.coords);
    window.open(`https://www.google.de/maps/@${position.coords.latitude},${position.coords.longitude},15z`, '_blank');
  }
}
