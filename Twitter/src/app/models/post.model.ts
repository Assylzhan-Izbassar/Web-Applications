import { User } from "./user.model";

export class Post {
    public content: string;
    public likeCount?: number;
    public disLikeCount?: number;
    public user: User;

    constructor(user: User, content: string) {
        this.user = user;
        this.content = content;
        this.likeCount = 0;
        this.disLikeCount = 0;
    }
}