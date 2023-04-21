import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  fileselected = false;

  constructor(private http: HttpClient, private router:Router) {}

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

    const uploadUrl = 'https://example.com/upload'; // it is the url of the data base
    this.http.post(uploadUrl, formData).subscribe(
      (response: any) => {
        console.log('File uploaded successfully');
      },
      (error: any) => {
        console.error('Error uploading file', error);
      }
    );
  }

  onNext() {
    alert('File uploaded successfully');
    this.router.navigate(['/admin/home'])
    // Add additional logic here, such as routing to a new page or performing other actions
  }
}
