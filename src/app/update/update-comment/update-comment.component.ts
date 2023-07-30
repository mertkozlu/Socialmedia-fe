import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/service/comment-service';
import { UpdateCommentRequest } from 'src/app/dto/UpdateCommentRequest';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent implements OnInit{
  updateCommentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private commentService: CommentService) { }

  ngOnInit() {
    this.updateCommentForm = this.formBuilder.group({
      commentId: 0,
      text: '',
    });
  }

  onSubmit(): any {
    let updateCommentRequest: UpdateCommentRequest = new UpdateCommentRequest();
    updateCommentRequest.commentId = this.updateCommentForm.value.commentId;
    updateCommentRequest.text = this.updateCommentForm.value.text;
    console.log(updateCommentRequest);
    this.commentService.updateComment(updateCommentRequest.commentId, updateCommentRequest).subscribe(
      (data) => {
        console.log('Kullanıcı güncellendi:', data);
        // Başarılı işlemler için yapılacaklar
      },
      (error) => {
        console.error('Güncelleme hatası:', error);
        // Hata durumunda yapılacaklar ve hatayı göstermek için kullanabilirsiniz
      }
    );
  }

}
