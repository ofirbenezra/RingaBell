import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
// import { MatDialog } from '@angular/material/dialog';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  stateGroupOptions: Observable<StateGroup[]>;
  reviews = [];
  showData = false;
  searchTerm: string;

  constructor(private _formBuilder: FormBuilder, private reviewService: ReviewService) {
    // this.items.push({name:'ofir', location: 'Tel Aviv Yaffo'});
    // this.items.push({name:'ofir', location: 'Tel Aviv Yaffo'});
    // this.items.push({name:'ofir', location: 'Tel Aviv Yaffo'});
    // this.items.push({name:'ofir', location: 'Tel Aviv Yaffo'});
    // this.items.push({name:'ofir', location: 'Tel Aviv Yaffo'});
    // this.items.push({name:'ofir', location: 'Tel Aviv Yaffo'});
    // this.items.push({name:'ofir', location: 'Tel Aviv Yaffo'});
  }

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });




  ngOnInit() {
  }

  onSearchClick() {   
    this.getResults();
  }

  getResults() {
    this.reviewService.getReviews(this.searchTerm).subscribe(data => {
      this.showData = true;
      // this.reviews = data.map(e => {
      //   return {
      //     id: e.payload.doc.id,
      //     ...e.payload.doc.data() as Review
      //   } as Review;
      // }) 
      this.reviews = data.map(x => x as Review);
    });
  }
}
