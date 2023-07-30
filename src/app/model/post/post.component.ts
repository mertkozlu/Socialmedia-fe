import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostService } from 'src/app/service/post-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit{
  postList: any[] = [];
  addPostForm!: FormGroup;
  

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe(data => {
      this.postList = data
    });
  }

  deleteItem(postId : number) {
    this.postService.deletePost(postId).subscribe(data => {
      let response: any = data;
      console.log(response);
      this.loadPosts();
    })
  }

}
