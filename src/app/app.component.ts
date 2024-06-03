import { Component } from '@angular/core';
import { RideService } from './service/ride.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'rideassistantfrontend';
  isLoggedIn:boolean=false

  constructor(private service:RideService){
    this.isLoggedIn=this.service.isAuthenticated()
  }
  

}
