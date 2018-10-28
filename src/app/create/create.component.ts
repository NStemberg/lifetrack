import { Component } from '@angular/core';
import {Post} from '../post.model';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public newPost: Post;
  public self: this = this;
  constructor(
    private postService: PostService,
    private router: Router,
  ) {
    this.newPost = new Post();
    console.log(this.newPost);
    navigator.geolocation.getCurrentPosition((position) => {
      this.newPost.lat = position.coords.latitude.toString();
      this.newPost.lng = position.coords.longitude.toString();
    });
  }
  public onCreate() {
    this.newPost.date = this.formatDate(new Date());
    this.postService.postPost(this.newPost);
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

  public formatDate(date) {
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const time = date.getHours();

    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' at ' + time + ' o\'clock';
  }
}
