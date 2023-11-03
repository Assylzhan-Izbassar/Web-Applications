import { Component } from '@angular/core';
import { DBContext } from '../models/db-context.model';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: Array<Post>;

  constructor() {
    this.posts = DBContext.posts;
  }
}
