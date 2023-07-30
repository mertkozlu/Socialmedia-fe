import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateLikeRequest } from 'src/app/dto/CreateLikeRequest';
import { LikeService } from 'src/app/service/like-service';

@Component({
  selector: 'app-add-like',
  templateUrl: './add-like.component.html',
  styleUrls: ['./add-like.component.css']
})
export class AddLikeComponent implements OnInit{
addLikeForm! : FormGroup

constructor(private formBuilder: FormBuilder, private likeService: LikeService) {}

ngOnInit(): void {
    this.addLikeForm = this.formBuilder.group({
      userId: 0,
      postId: 0,
      text: '',

    })

}

onSubmit(): any {
  let createLikeRequest: CreateLikeRequest = new CreateLikeRequest()
  createLikeRequest.userId = this.addLikeForm.value.userId
  createLikeRequest.postId = this.addLikeForm.value.postId
  console.log(Response)
  this.likeService.addLike(createLikeRequest).subscribe(data => {
    let response: any=data
  })

}

}