import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  addForm!: FormGroup;
  formData: any = {};
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      usn: ['', Validators.required],
      name: ['', Validators.required],
      batch: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required],
      PROEmail: ['', Validators.required],
      OFFEmail: ['', Validators.required],
      contact_no: ['', Validators.required],
      designation: ['', Validators.required],
      domain: ['', Validators.required],
      willing_contribution: ['', Validators.required]
    });
  }

  onSubmit() {
    alert('hia sanju');
    if (this.addForm.valid) {
      this.formData = this.addForm.value; // Assign form data to formData object
      console.log(this.formData);
      this.http.post('http://127.0.0.1:8000/alumni/', this.formData).subscribe(response => {
        // Handle response from backend
      });
    }
    this.addForm.reset();
  }
}
