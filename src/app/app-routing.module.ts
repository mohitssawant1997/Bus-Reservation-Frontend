import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { UpdateRouteComponent } from './update-route/update-route.component';

const routes: Routes = [
  { path:'updateRoute', component: UpdateRouteComponent},
  { path:'addBus', component: AddBusComponent},
  { path:'deleteBus', component: DeleteBusComponent},
  { path:'updateBus', component: UpdateBusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
