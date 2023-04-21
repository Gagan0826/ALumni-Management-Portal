import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent {
  
  private apiUrl = 'http://127.0.0.1:8000/alumni/?format=json';
  columnDefs = [
    { field: 'sl_no', headerName: 'ID',filter:'agTextColumnFilter'},
      { field: 'usn', headerName: 'Usn',filter:'agTextColumnFilter'},
      { field: 'name', headerName: 'Name',filter:'agTextColumnFilter'},
      { field: 'batch', headerName: 'Batch',filter:'agTextColumnFilter'},
      { field: 'company', headerName: 'Company',filter:'agTextColumnFilter' },
      { field: 'address', headerName: 'Address',filter:'agTextColumnFilter' },
      { field: 'PROEmail', headerName: 'Email',filter:'agTextColumnFilter'},
      { field: 'OFFEmail', headerName: 'OpEmail',filter:'agTextColumnFilter'},
      { field: 'contact_no', headerName: 'Contact',filter:'agTextColumnFilter'},
      { field: 'designation', headerName: 'Designetion',filter:'agTextColumnFilter'},
      { field: 'domain', headerName: 'Domain',filter:'agTextColumnFilter'},
      { field: 'willing_contribution', headerName: 'WC',filter:'agTextColumnFilter'},
  ];
  rowData!: any[];
  
  
 
  
  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.rowData = data;
      
    });
    
  }

  

  onRowDoubleClicked(event: any) {
    const selectedRowData = event.data;
    this.router.navigate(['/admin/view'], { queryParams: { data: JSON.stringify(selectedRowData) } });
  }
  
  
  
}
