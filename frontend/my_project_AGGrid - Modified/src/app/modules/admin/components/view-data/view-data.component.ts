import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent {
  // Define a FormGroup to hold the data
  dataForm!: FormGroup;

  // Hold the data of the selected row
  selectedRowData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Subscribe to the query parameters to get the selected row data
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        this.selectedRowData = JSON.parse(params['data']);
      }

      // Define the dataForm with the selectedRowData values as defaults
      this.dataForm = this.fb.group({
        sl_no: [this.selectedRowData.sl_no],
        usn: [this.selectedRowData.usn],
        name: [this.selectedRowData.name],
        batch: [this.selectedRowData.batch],
        company: [this.selectedRowData.company],
        address: [this.selectedRowData.address],
        PROEmail: [this.selectedRowData.PROEmail],
        OFFEmail: [this.selectedRowData.OFFEmail],
        contact_no: [this.selectedRowData.contact_no],
        designation: [this.selectedRowData.designation],
        domain: [this.selectedRowData.domain],
        willing_contribution: [this.selectedRowData.willing_contribution],
      });
    });
  }
  
  onSubmit() {
    // Send an HTTP POST request to update the row in the backend
    
    const url = 'http://127.0.0.1:8000/api/update/' + this.selectedRowData.sl_no+'/';
    const data = this.dataForm.value;
    console.log(data)
    this.http.put(url, data).subscribe(
      response => {
        // Handle the response from the backend
        console.log('Update successful');
        alert('Update successful');
        this.router.navigate(['/admin/edit']);
      },
      error => {
        console.log(error);
        alert('Update failed');
      }
    );
  } 
}
