import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-upload-settings',
  templateUrl: './upload-settings.component.html',
  styleUrls: ['./upload-settings.component.css']
})
export class UploadSettingsComponent implements OnInit {
  @Output() fileTypeEvent = new EventEmitter<string>();
  @Output() fileSizeEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: any) {
    this.fileTypeEvent.emit(event.target.value);
  }

  handleSize(event: any) {
    this.fileSizeEvent.emit(event.target.value);
  }

}
