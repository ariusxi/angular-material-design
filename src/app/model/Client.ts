export class Client {

    public name: string;
    public email: string;
    public telephone: string;

    constructor(props: Partial<Client>) {
        Object.assign(this, props);
    }

}
