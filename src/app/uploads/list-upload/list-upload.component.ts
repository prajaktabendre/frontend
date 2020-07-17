import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { UploadFileService } from '../upload-file.service';
import{UploadFileService} from 'src/app/upload-file.service';
@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;
  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  }
  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
}