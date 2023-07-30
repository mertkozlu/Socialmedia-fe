import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateCommentRequest } from 'src/app/dto/CreateCommentRequest';
import { CommentService } from 'src/app/service/comment-service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit{
addCommentForm! : FormGroup

constructor(private formBuilder: FormBuilder, private commentService: CommentService) {}

ngOnInit(): void {
    this.addCommentForm = this.formBuilder.group({
      userId: 0,
      postId: 0,
      text: '',

    })

}

onSubmit(): any {
  let createCommentRequest: CreateCommentRequest = new CreateCommentRequest()
  createCommentRequest.userId = this.addCommentForm.value.userId
  createCommentRequest.postId = this.addCommentForm.value.postId
  createCommentRequest.text = this.addCommentForm.value.text
  console.log(Response)
  this.commentService.addComment(createCommentRequest).subscribe(data => {
    let response: any=data
  })

}

}
