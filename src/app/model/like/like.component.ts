import { Component, OnInit, ViewChild } from '@angular/core';
import { LikeService } from 'src/app/service/like-service';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit{
  likeList: any[] = [];
  addLikeForm!: FormGroup;
  

  constructor(private likeService: LikeService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.likeService.getAllLikes().subscribe(data => {
      this.likeList = data;
    });
  }

  deleteItem(likeId: number) {
    this.likeService.deleteLike(likeId).subscribe(data => {
      let response: any = data;
      console.log(response);
      this.loadUsers();
    });
    
  }

  onSubmit() {
    if (this.addLikeForm.invalid) {
      return;
    }
    const formData = this.addLikeForm.value;
    this.likeService.addLike(formData).subscribe(data => {
      console.log('Like added successfully.');
      this.loadUsers();
    });
  }
}