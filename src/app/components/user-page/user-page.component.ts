import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  userData: any;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.clientService.getUserData(1).subscribe(data => {
      this.userData = data;
      console.log(this.userData);
    });
  }

}
