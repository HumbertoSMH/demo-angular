export class AuthorModel {
    constructor(id: number, firstName: string, lastName: string, email: string) {
        this.id = id;
        this.Firstname = firstName;
        this.LastName = lastName;
        this.email = email;
    }

    id: number;
    Firstname: string;
    LastName: string;
    email: string;

}
