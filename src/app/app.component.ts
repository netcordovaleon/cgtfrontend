import { Component } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SGTFrontEnd';
  listOfRequestTypes: any[] = []; // Variable datos
  listRequest: any[] = []; // Variable datos


  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.requestService.getAllRequestTypes().subscribe((data) => {
      this.listOfRequestTypes = data;
    });

    this.requestService.getAllRequest('').subscribe((data) => {
      this.listRequest = data;
    });
  }

  chooseRequestType(requestType : string) {
    this.requestService.getAllRequest(requestType).subscribe((data) => {
      this.listRequest = data;
    });
  }

}
