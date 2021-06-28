import { Component, OnInit } from '@angular/core';
import { DbServiceService } from './core/services/DBService/db-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DemoApp';
  constructor(private dexiService: DbServiceService) {}
  ngOnInit(): void {
    this.dexiService.makeDatabase();
  }
}
