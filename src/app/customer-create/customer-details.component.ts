import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms"
import { RideService } from '../service/ride.service';
import {Router,ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  cId:any
  isEdit:boolean=false
  constructor(private service:RideService,private route:Router,private router:ActivatedRoute){
    console.log(this.router.snapshot.queryParams["cId"]);
    this.cId=this.router.snapshot.queryParams["cId"]
    if (this.cId){
      this.isEdit=true
      console.log(this.isEdit);
      this.initializeForm()
    }
  }

  initializeForm(){
    this.service.retrieveCustomer(this.cId).subscribe(data=>{
      this.customerForm.patchValue(data)
    })
  }

  customerForm=new FormGroup(
    {"name":new FormControl("",Validators.required),
    "phone":new FormControl("",Validators.required),
    "email":new FormControl("",Validators.required),
    "vehicle_no":new FormControl("",Validators.required),
    "running_km":new FormControl("",Validators.required),
  })

  handleSubmit(){
    let formData=this.customerForm.value
    if(this.isEdit){
      this.service.updateCustomer(this.cId,formData).subscribe(data=>{
        this.route.navigateByUrl("customers")
      })
    }
    else{
      this.service.createCustomer(formData).subscribe(data=>{console.log(data)
        this.route.navigateByUrl("customers")
        })
    }


    // console.log(formData);
    
  }

}
