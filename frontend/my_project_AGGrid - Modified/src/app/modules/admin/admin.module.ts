import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ViewNewComponent } from './components/view-new/view-new.component';


@NgModule({
  declarations: [
    AdminDashComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddDataComponent,
    EditDataComponent,
    ViewDataComponent,
    ViewNewComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    AgGridModule,
    ReactiveFormsModule
    
    
  ]
})
export class AdminModule { }
