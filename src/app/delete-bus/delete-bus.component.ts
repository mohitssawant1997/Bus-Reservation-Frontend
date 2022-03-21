import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-delete-bus',
  templateUrl: './delete-bus.component.html',
  styleUrls: ['./delete-bus.component.css']
})
export class DeleteBusComponent implements OnInit {

  bus: Bus = new Bus();
  public msg: string="";
  public showMsg: boolean=false;
  public success: boolean=false;
 
  constructor(private busService: BusService,
    private router: Router) { }

  ngOnInit(): void {
  }

deleteBus(){
  this.busService.deleteBus(this.bus).subscribe(data =>{
    this.displayData(data);
  },
  error => console.log("errorgh="+error));
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

  this.router.navigate(["/deleteBus"]);
}

 onSubmit(){
  this.deleteBus();
 }

}
