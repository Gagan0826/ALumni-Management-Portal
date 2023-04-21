import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  fileselected = false;
  jsonData: any;

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const filesTypes = ['text/csv', 'application/vnd.ms-excel'];
      if (!filesTypes.includes(file.type)) {
        alert('Invalid file type. Please select a CSV file.');
        event.target.value = null;
        this.fileselected = false; // reset the fileselected state
        return;
      }
      this.uploadFile(file);
      this.fileselected = true;
    }
  }

  uploadFile(file: File) {
    const allowedTypes = ['text/csv', 'application/vnd.ms-excel'];
    if (!allowedTypes.includes(file.type)) {
      console.error('Invalid file type. Please select a CSV file.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file, file.name);
  
    const uploadUrl = 'https://example.com/upload';
    this.http.post(uploadUrl, formData).subscribe(
      (response: any) => {
        console.log('File uploaded successfully');
        this.convertToJSON(response);
        this.sendDataToBackend(this.jsonData);
      },
      (error: any) => {
        console.error('Error uploading file', error);
      }
    );
  }

  convertToJSON(data: any) {
    const lines = data.split('\n');
    const result = [];
    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
      const obj: { [key: string]: any } = {};
      const currentLine = lines[i].split(',');
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }
      result.push(obj);
    }
    console.log(result);
    this.jsonData = result;
    alert('File uploaded successfully');
    this.router.navigate(['/admin/home']);
  }

  sendDataToBackend(data: any) {
    const backendUrl = 'https://example.com/save-data';
    this.http.post(backendUrl, data).subscribe(
      (response: any) => {
        console.log('Data saved successfully');
      },
      (error: any) => {
        console.error('Error saving data', error);
      }
    );
  }

  onNext() {
    
  }
}
