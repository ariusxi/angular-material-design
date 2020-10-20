import { Component } from '@angular/core';

import { Client } from './model/Client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public clientsList: Client[] = [];

    onClientRegistered(client: Client): void {
        this.clientsList.push(client);
    }

 }
