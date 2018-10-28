import {Injectable} from '@angular/core';
import {Post} from './post.model';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class PostService {
  public posts: BehaviorSubject<Post[]>;
  constructor(private http: HttpClient) {
    this.posts = new BehaviorSubject<Post[]>([]);
  }
  public loadPosts() {
    this.http.get(`https://rocky-woodland-19657.herokuapp.com/posts`).subscribe((posts: Post[]) => {
      this.posts.next(posts);
    });
  }
  public postPost(newPost: Post) {
    this.http.post(`https://rocky-woodland-19657.herokuapp.com/posts`, { post: newPost }).subscribe((posts: Post[]) => {
      this.posts.next(posts);
    });
  }
  public updatePost(newPost: Post) {
    this.http.post(`https://rocky-woodland-19657.herokuapp.com/posts/${newPost._id}`, { post: newPost }).subscribe((posts: Post[]) => {
      console.log(posts);
      this.posts.next(posts);
    });
  }
}
