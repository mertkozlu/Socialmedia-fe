import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/service/post-service';
import { UpdatePostRequest } from 'src/app/dto/UpdatePostRequest';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit{
  updatePostForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit() {
    this.updatePostForm = this.formBuilder.group({
      title: '',
      text: '',
      postId: 0
    });
  }

  onSubmit(): any {
    let updatePostRequest: UpdatePostRequest = new UpdatePostRequest();
    updatePostRequest.postId = this.updatePostForm.value.postId;
    updatePostRequest.title = this.updatePostForm.value.title;
    updatePostRequest.text = this.updatePostForm.value.text;
    console.log(updatePostRequest);
    this.postService.updatePost(updatePostRequest.postId, updatePostRequest).subscribe(
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