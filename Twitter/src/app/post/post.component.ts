import { DBContext } from './../models/db-context.model';
import { Component } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  posts: Array<Post>;
  tweetText?: string = '';

  constructor() {
    this.posts = DBContext.posts.reverse();
  }

  tweet() {
    DBContext.posts.push({
      content: this.tweetText!,
      user: DBContext.currentUser,
      likeCount: 0,
      disLikeCount: 0,
    });

    for(let i=0; i < DBContext.users.length; ++i) {
      if (DBContext.users[i].username == DBContext.currentUser.username) {
        DBContext.users[i].postCount++;
        break;
      }
    }

    this.posts = DBContext.posts.reverse();
    this.tweetText = '';
  }

  like(idx: number) {
    for (let i=0; i < DBContext.posts.length; ++i) {
      if(i == idx) {
        DBContext.posts[i].likeCount = DBContext.posts[i].likeCount! + 1;
      }
    }
  }

  dislike(idx: number) {
    for (let i=0; i < DBContext.posts.length; ++i) {
      if(i == idx) {
        DBContext.posts[i].disLikeCount = DBContext.posts[i].disLikeCount! + 1;
      }
    }
  }

  delete(idx: number) {
    for (let i=0; i < DBContext.posts.length; ++i) {
      if(i == idx) {
        if (DBContext.currentUser == DBContext.posts[i].user) {
          DBContext.posts.splice(idx, 1);
          DBContext.posts[i].user.postCount--;
          this.posts = DBContext.posts.reverse();
          break;
        }
      }
    }
  }
}
