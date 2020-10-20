import { Component, Input } from '@angular/core';

import { Client } from '../../model/Client';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent{

    @Input() clientsList: Client[];

}
