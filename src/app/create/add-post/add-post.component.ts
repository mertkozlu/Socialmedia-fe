import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreatePostRequest } from 'src/app/dto/CreatePostRequest';
import { PostService } from 'src/app/service/post-service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm! : FormGroup

  constructor(private formBuilder: FormBuilder, private postService: PostService) {}

  ngOnInit(): void {
      this.addPostForm = this.formBuilder.group({
        userId: 0,
        title: '',
        text: '',
      })
  }

  onSubmit(): any {
    let createPostRequest: CreatePostRequest = new CreatePostRequest()
    createPostRequest.userId = this.addPostForm.value.userId
    createPostRequest.title = this.addPostForm.value.title
    createPostRequest.text = this.addPostForm.value.text
    console.log(Response)
    this.postService.addPost(createPostRequest).subscribe(data => {
      let response: any=data
    })
  }



}
