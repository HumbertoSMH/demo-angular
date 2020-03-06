export class AuthorModel {
    constructor(id: number, firstName: string, lastName: string, email: string) {
        this.id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.email = email;
    }

    id: number;
    FirstName: string;
    LastName: string;
    email: string;
    avatar: string;

}
