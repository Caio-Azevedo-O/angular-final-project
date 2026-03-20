export class UserContext{
    id: number;
    username: string;
    password: string;
    email: string;
    name: string;
    isLoggedIn: boolean;

    constructor(id: number, username: string, password: string, email: string, name: string, isLoggedIn: boolean) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.isLoggedIn = isLoggedIn;
    }
}