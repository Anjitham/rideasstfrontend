import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { RideService } from '../service/ride.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  customer:any
  constructor(private router:ActivatedRoute,private service:RideService){
    let id=this.router.snapshot.params["id"]
    this.service.retrieveCustomer(id).subscribe(data=>{console.log(data)
    this.customer=data
  })
  }

}
