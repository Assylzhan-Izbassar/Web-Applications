import { Post } from "./post.model";
import { User } from "./user.model";

const _users = [
    {
        username: 'Assylzhan',
        postCount: 1,
    },
    {
        username: 'Nurislam',
        postCount: 1,
    },
]

const _posts = [
    {
        content: 'All ΔE* formulae are originally designed to have the difference of 1.0 stand for a JND. This convention is generally followed by other perceptual distance functions such as the aforementioned ΔEITP.[11] However, further experimentation may invalidate this design assumption, the revision of CIE76 ΔE*ab JND to 2.3 being an example',
        user: _users[1],
        likeCount: 0,
        disLikeCount: 0,
    },
    {
        content: 'Remove node 3 from the front of queue and visit the unvisited neighbours and push them into queue. ',
        user: _users[0],
        likeCount: 0,
        disLikeCount: 0,
    }
]

export class DBContext {
    public static posts: Post[] = _posts;
    public static users: User[] = _users;

    public static currentUser = this.users[0];

    constructor() {
    }
}