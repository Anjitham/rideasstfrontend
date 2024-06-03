import { Component } from '@angular/core';
import{RideService} from "../service/ride.service"

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers:any

  constructor(private service:RideService){
    this.ngOnInit()
  }
  
  ngOnInit(){
    
  this.service.getCustomers().subscribe(data=>this.customers=data)

  }
  handeleDelete(id:any){
    this.service.deleteCustomers(id).subscribe(data=>{
      this.ngOnInit()
      
    })
  }

}
