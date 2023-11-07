import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent  {
constructor(public postservice: PostServiceService) {}

onaddPost(postform:NgForm){
  if(postform.invalid)
  {
    alert("Invalid!")
    return
  }
  alert(postform.value.department+':'+postform.value.issue)
  this.postservice.addpost_service(postform.value.department,postform.value.issue)
  postform.resetForm()
}

}
