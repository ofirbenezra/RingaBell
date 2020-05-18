import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
// import { MatDialog } from '@angular/material/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ref: DynamicDialogRef;

  constructor(public dialogService: DialogService, private router: Router) { }

  ngOnInit(): void {
  }

  addReview() {
    this.router.navigate(['add-review']);
    // this.ref = this.dialogService.open(AddReviewDialogComponent, {
    //   header: 'Add Review',
    //   footer: 'Add',
    //   closable: true,
    //   width: '50%'
    // });


    // this.ref.onClose.subscribe(() => {
    //   // if (car) {
    //     // this.messageService.add({severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin});
    //   // }
    // });
  }

  searchReview() {
    this.router.navigate(['search']);
  }

}
