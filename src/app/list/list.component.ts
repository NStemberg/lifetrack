import { Component } from '@angular/core';
import {Post} from '../post.model';
import {PostService} from '../post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public _posts: Post[] = [];
  public commentInput = '';
  constructor(private postService: PostService) {
    postService.posts.subscribe((posts: Post[]) => {
      this._posts = posts;
    });
    this.postService.loadPosts();
  }

  public onClick(post) {
    window.open(`https://www.google.de/maps/@${post.lat},${post.lng},15z`, '_blank');
  }

  public onPostComment(post: Post) {
    post.comments.push(this.commentInput);
    this.commentInput = '';
    this.postService.updatePost(post);
  }
}
