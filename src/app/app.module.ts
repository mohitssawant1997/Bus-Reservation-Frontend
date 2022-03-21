import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateRouteComponent,
    AddBusComponent,
    DeleteBusComponent,
    UpdateBusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
