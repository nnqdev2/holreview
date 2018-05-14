import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LustSearchFilter } from '../models/lust-search-filter';

@Injectable()
export class SearchFilterService {

  private searchFilterSource = new BehaviorSubject<LustSearchFilter>(null);
  searchFilterSubmitted$ = this.searchFilterSource.asObservable();
  submittedSearchFilter(lustSearchFilter: LustSearchFilter) {
    this.searchFilterSource.next(lustSearchFilter);
  }

}
