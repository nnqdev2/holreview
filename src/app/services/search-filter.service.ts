import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LustSearchFilter } from '../models/lust-search-filter';

@Injectable()
export class SearchFilterService {

  private searchFilterSource = new BehaviorSubject<LustSearchFilter>(new LustSearchFilter());
  searchFilterSubmitted$ = this.searchFilterSource.asObservable();
  submittedSearchFilter(lustSearchFilter: LustSearchFilter) {
    console.log('****SearchFilterService.submittedSearchFilter');
    console.log(lustSearchFilter);
    this.searchFilterSource.next(lustSearchFilter);
  }

}
