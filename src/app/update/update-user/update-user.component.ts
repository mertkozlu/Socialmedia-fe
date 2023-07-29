import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user-service';
import { UpdateUserRequest } from 'src/app/dto/UpdateUserRequest';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  updateUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.updateUserForm = this.formBuilder.group({
      userName: '',
      password: '',
      userId: 0
    });
  }

  onSubmit(): any {
    let updateUserRequest: UpdateUserRequest = new UpdateUserRequest();
    updateUserRequest.userName = this.updateUserForm.value.userName;
    updateUserRequest.userId = this.updateUserForm.value.userId;
    updateUserRequest.password = this.updateUserForm.value.password;
    console.log(updateUserRequest);
    this.userService.updateUser(updateUserRequest.userId, updateUserRequest).subscribe(
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