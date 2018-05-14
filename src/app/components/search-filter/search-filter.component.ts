import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { DatePipe} from '@angular/common';
import { environment } from '../../../environments/environment';

import { LustSearchFilter } from '../../models/lust-search-filter';
import { LustDataService } from '../../services/lust-data.service';
import { SearchFilterService } from '../../services/search-filter.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  providers: [ LustDataService, SearchFilterService ]
})

export class SearchFilterComponent implements OnInit {

  lustSearchFilter: LustSearchFilter = new LustSearchFilter();
  lustSearchFilterForm: FormGroup;
  showErrors = false;
  errorMsg: string;
  closeResult: string;
  closed = true;
  validForm = false;
  showResults = false;

  constructor(private lustDataService: LustDataService, private formBuilder: FormBuilder,
    private searchFilterService: SearchFilterService) {}

  ngOnInit() {
    this.createLustSearchFilterForm();
  }



  submitLustSearch() {
    if (this.isEmptyFilters()) {
      console.log('** Search Filters NOT NOT entered:');
      this.showErrors = true;
      this.errorMsg = 'No search criteria entered ....';
      this.closed = false;
      this.validForm = false;
      this.showResults = true;
    } else {
      this.closed = true;
      this.showErrors = false;
      this.errorMsg = '';
      console.log('** Search Filters entered:');
      console.log(this.lustSearchFilterForm);
      const p = Object.assign({}, this.lustSearchFilter, this.lustSearchFilterForm.value);
      this.searchFilterService.submittedSearchFilter(p);
      this.validForm = true;
      this.showResults = true;
      // this.query = '';
      // this._router.navigate(["/search"]);
    }
  }



  private resetForm() {
    this.lustSearchFilterForm.reset();
    console.log('***after resetForm()**');
  }

  private isEmptyFilters(): boolean {

    // if (((typeof this.lustSearchFilterForm.controls.logCounty.value !== 'undefined')
    //       && (this.lustSearchFilterForm.controls.logCounty.value !== ' ' ))
    // || ((typeof this.lustSearchFilterForm.controls.logYear.value !== 'undefined')
    //       && (this.lustSearchFilterForm.controls.logYear.value !== ' ' ))
    // || ((typeof this.lustSearchFilterForm.controls.logSeqNbr.value !== 'undefined')
    //       && (this.lustSearchFilterForm.controls.logSeqNbr.value !== ' ' ))
    // || ((typeof this.lustSearchFilterForm.controls.facilityId.value !== 'undefined')
    //         && (this.lustSearchFilterForm.controls.facilityId.value !== ' ' ))
    // || ((typeof this.lustSearchFilterForm.controls.siteName.value !== 'undefined')
    //         && (this.lustSearchFilterForm.controls.siteName.value !== ' ' )) )    {

    console.log('***this.lustSearchFilterForm.controls.siteName.value****');
    console.log(this.lustSearchFilterForm.controls.siteName.value);

    if ((typeof this.lustSearchFilterForm.controls.siteName.value === 'undefined')
    || (this.lustSearchFilterForm.controls.siteName.value === null)) {
    // if ((typeof this.lustSearchFilterForm.controls.logCounty.value !== 'undefined')
    //     && (typeof this.lustSearchFilterForm.controls.logYear.value !== 'undefined')
    //     && (typeof this.lustSearchFilterForm.controls.logSeqNbr.value !== 'undefined')
    //     && (typeof this.lustSearchFilterForm.controls.facilityId.value !== 'undefined')
    //     && (typeof this.lustSearchFilterForm.controls.siteName.value !== 'undefined')) {
   // if (this.lustSearchFilterForm.controls.siteName.value.length === 0) {
      console.log('ok im  null');
        return true;
    } else {
      console.log('ok im not null');
        return false;
    }
  }



  createLustSearchFilterForm() {
    this.lustSearchFilterForm = this.formBuilder.group({
      // logNumber:  [''],
      logCounty:  [''],
      logYear:  [''],
      logSeqNbr:  [''],
      facilityId:  [''],
      siteName:  [''],
      siteAddress:  [''],
      siteCity:  [''],
      siteZipcode:  [''],
      regionName:  [''],
      regionCode:  [''],
      regInd:  [''],
      hotInd:  [''],
      hotAuditReject:  [''],
      siteType:  [''],
      siteStatus:  [''],
      compareDt1Idx:  [''],
      fromDate1:  [''],
      toDate1:  [''],
      compareDt2Idx:  [''],
      fromDate2:  [''],
      toDate2:  [''],
      projectManager:  [''],
      contactFirstName:  [''],
      contactLastName:  [''],
      contactOrgName:  [''],
      lustId:  [''],
      releaseType:  [''],
      active:  [''],
      closed:  [''],
      siteCounty:  [''],
    }  );
    this.lustSearchFilterForm.patchValue({
      logYear: '18'
    });
  }

  private findInvalidControls() {
    const invalid = [];
    const controls = this.lustSearchFilterForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            console.error('********** offending element ===>' + name);
            invalid.push(name);
        }
    }
    return invalid;
  }

}
