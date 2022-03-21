import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  bus: Bus=new Bus();
  public msg: string="";
  public showMsg: boolean=false;
  public success: boolean=false;

  constructor(private busService: BusService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addBus(){
    this.busService.addBus(this.bus).subscribe(data =>{
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
  
    this.router.navigate(["/addBus"]);
  }  onSubmit(){
      this.addBus();
  }
}
