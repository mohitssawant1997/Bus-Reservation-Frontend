import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: '[app-update-route]',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.css']
})
export class UpdateRouteComponent implements OnInit {
  
  bus: Bus = new Bus();
  public msg: string="";
  public showMsg: boolean=false;
  public success: boolean=false;
 
  constructor(private busService: BusService,
    private router: Router) { }

  ngOnInit(): void {
  }

updateRoute(){
  this.busService.updateRoute(this.bus).subscribe(data =>{
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

  this.router.navigate(["/updateRoute"]);
}

 onSubmit(){
  this.updateRoute();
 }
}
