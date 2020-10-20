import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from 'src/app/model/Client';

@Component({
    selector: 'client-insert',
    templateUrl: './client-insert.component.html',
    styleUrls: ['./client-insert.component.css'],
})
export class ClientInsertComponent{

    @Output() clientRegister = new EventEmitter();

    public name: string;
    public email: string;
    public telephone: string;

    onRegisterClient(): void {
        const client: Client = new Client({
            name: this.name,
            email: this.email,
            telephone: this.telephone,
        })

        this.clientRegister.emit(client);
        Object.assign(this, {
            name: '',
            email: '',
            telephone: '',
        })
    }

}
