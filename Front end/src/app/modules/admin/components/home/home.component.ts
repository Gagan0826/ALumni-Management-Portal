import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef,GridOptions } from 'ag-grid-community';
import { RowDoubleClickedEvent } from 'ag-grid-community';
import { GridApi, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  private apiUrl = 'http://127.0.0.1:8000/alumni/';
  columnDefs = [
    { field: 'sl_no', headerName: 'ID',filter:'agTextColumnFilter' },
      { field: 'usn', headerName: 'Usn',filter:'agTextColumnFilter' },
      { field: 'name', headerName: 'Name',filter:'agTextColumnFilter' },
      { field: 'batch', headerName: 'Batch',filter:'agTextColumnFilter' },
      { field: 'company', headerName: 'Company',filter:'agTextColumnFilter' },
      { field: 'address', headerName: 'Address',filter:'agTextColumnFilter' },
      { field: 'PROEmail', headerName: 'Email',filter:'agTextColumnFilter' },
      { field: 'OFFEmail', headerName: 'OpEmail',filter:'agTextColumnFilter' },
      { field: 'contact_no', headerName: 'Contact',filter:'agTextColumnFilter' },
      { field: 'designation', headerName: 'Designetion',filter:'agTextColumnFilter' },
      { field: 'domain', headerName: 'Domain',filter:'agTextColumnFilter' },
      { field: 'willing_contribution', headerName: 'WC',filter:'agTextColumnFilter' },
  ];
  rowData!: any[];
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.rowData = data;
      
    });
  
}
selectedRowData: any;

onRowClicked(event: { data: any; }) {
  this.selectedRowData = event.data;
}

}
