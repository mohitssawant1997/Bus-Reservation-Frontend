import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  bus: Bus=new Bus();
  public msg: string="";
  public showMsg: boolean=false;
  public success: boolean=false;

  constructor(private busService: BusService,
    private router: Router) { }

  ngOnInit(): void {
  }

  updateBus(){
    this.busService.updateBus(this.bus).subscribe(data =>{
      this.displayData(data);
    },
    error => console.log(error));
  }

  displayData(data: string){
    this.msg=data;
    this.showMsg=true;
    
    if(this.msg.match("success")){
    this.success=true;
    }
    else{
      this.success=false;
    }
  
    this.router.navigate(["/updateBus"]);
  } 
  
  onSubmit(){
      this.updateBus();
  }
}
