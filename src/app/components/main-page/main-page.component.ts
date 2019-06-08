import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  data: any;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.clientService.getPosts().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  goToUserPage(id) {
    this.router.navigate(['/users'], { queryParams: { authorId: id }});
  }

}
