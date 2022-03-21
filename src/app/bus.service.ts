import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private obs: Observable<string> | undefined;
  private str:string="";

  constructor(private httpClient: HttpClient) { }

  updateRoute(bus: Bus): Observable<string>{
    var baseURL:string ="http://localhost:8181/admin/updateRoute?id=" +bus.bus_Id +"&src=" + bus.source + "&dest=" + bus.destination;
    this.obs=this.httpClient.post(baseURL,bus,{responseType:'text'});
    return this.obs;
  }

  addBus(bus: Bus): Observable<string>{
    var baseURL:string ="http://localhost:8181/admin/addBus?bus_Name="+bus.bus_Name+"&bus_Number="+bus.bus_Number+"&bus_type="+bus.bus_type+"&source="+bus.source+"&destination="+bus.destination+"&total_seats="+bus.total_seats;
    this.obs=this.httpClient.post(baseURL,bus,{responseType:'text'});
    return this.obs;
  }
  
   deleteBus(bus: Bus): Observable<string>{
    var baseURL:string ="http://localhost:8181/admin/deleteBus?id="+bus.bus_Id;
    this.obs=this.httpClient.post(baseURL,bus,{responseType:'text'});
    return this.obs;
  }

  updateBus(bus: Bus): Observable<string>{
    var baseURL:string ="http://localhost:8181/admin/updateBus?id="+bus.bus_Id+"&name="+bus.bus_Name+"&num="+bus.bus_Number+"&type="+bus.bus_type+"&totalSeats="+bus.total_seats;
    this.obs=this.httpClient.post(baseURL,bus,{responseType:'text'});
    return this.obs;
  }
}
