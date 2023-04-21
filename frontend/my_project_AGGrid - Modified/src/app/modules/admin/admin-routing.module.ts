import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './components/add-data/add-data.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { HomeComponent } from './components/home/home.component';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { ViewNewComponent } from './components/view-new/view-new.component';

const routes: Routes = [
  {path:'' , component:AdminDashComponent,children:[
    //these are the chidren components of admin-dash component
    {path:'home',component:HomeComponent},
    {path:'edit',component:EditDataComponent},
    {path:'add',component:AddDataComponent},
    {path:'view', component:ViewDataComponent},
    {path:'view-new',component:ViewNewComponent},
    {path:'' , redirectTo:'/admin/home',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
