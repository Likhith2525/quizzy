import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  message:any;
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.us.currentApprovalStageMessage.subscribe(msg => this.message = msg)
    console.log(this.message);
  }

}
