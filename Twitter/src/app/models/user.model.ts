

export class User {
    public username: string;
    public postCount: number;

    constructor(username: string, password: string) {
        this.username = username;
        this.postCount = 0;
    }
}