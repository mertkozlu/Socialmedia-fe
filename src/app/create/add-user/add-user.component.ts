import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user-service';
import { CreateUserRequest } from 'src/app/dto/CreateUserRequest';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  addUserForm!: FormGroup
 

  constructor(private formBuilder: FormBuilder, private userService: UserService ){
    
  }
  ngOnInit(){
    this.addUserForm=this.formBuilder.group({
      userName: '',
      password: '',
    })
  }
  onSubmit():any {
    let createUserRequest:CreateUserRequest = new CreateUserRequest()
    createUserRequest.userName = this.addUserForm.value.userName
    createUserRequest.password = this.addUserForm.value.password
    console.log(createUserRequest)
    this.userService.addUser(createUserRequest).subscribe(data=>{
      let response:any=data
    });
  }
  
}