export class AuthorModel {
    id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Avatar: string;
    constructor(id: number, firstName: string, lastName: string, email: string, avatar: string) {
        this.id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.Avatar = avatar;
    }
}
