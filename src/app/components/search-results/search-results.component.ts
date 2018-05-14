import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LustSearchResult } from '../../models/lust-search-result';
import { LustSearchFilter } from '../../models/lust-search-filter';
import { LustDataService } from '../../services/lust-data.service';
import { SearchFilterService } from '../../services/search-filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [ LustDataService, SearchFilterService ]
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  lustSearchResults: LustSearchResult[] = [];
  lustSearchFilter: LustSearchFilter;
  lustSearchResultForm: FormGroup;
  subscription: Subscription;

  constructor(private lustDataService: LustDataService, private formBuilder: FormBuilder,
    private searchFilterService: SearchFilterService) {}



  ngOnInit() {
    this.getLustSearchFilter();
    this.getLustSearchResults();
  }

  getLustSearchFilter() {
    this.subscription = this.searchFilterService.searchFilterSubmitted$.subscribe(
      lustSearchFilter => {
        this.lustSearchFilter = lustSearchFilter;
    });
  }

  getLustSearchResults() {
    this.lustDataService.search(this.lustSearchFilter).subscribe(
      data => { this.lustSearchResults = data; },
      err => console.error(err)
    );
  }

  // createLustSearchResultForm() {
  //   this.lustSearchResultForm = this.formBuilder.group({
  //     lustId:  [''],
  //     logNumber:  [''],
  //     siteName:  [''],
  //     siteAddress:  [''],
  //     firDt:  [''],
  //     closedDt:  [''],
  //     facilityId:  [''],
  //     siteScore:  ['']
  //   });
  //   Object.assign(this.lustSearchResultForm, this.lustSearchResult);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
