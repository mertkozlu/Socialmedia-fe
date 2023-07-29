import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user-service';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  userList: any[] = [];
  addUserForm!: FormGroup;
  

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
    });
  }

  deleteItem(userId: number) {
    this.userService.deleteUser(userId).subscribe(data => {
      let response: any = data;
      console.log(response);
      this.loadUsers();
    });
    
  }

  onSubmit() {
    if (this.addUserForm.invalid) {
      return;
    }
    const formData = this.addUserForm.value;
    this.userService.addUser(formData).subscribe(data => {
      console.log('User added successfully.');
      this.loadUsers();
    });
  }
}