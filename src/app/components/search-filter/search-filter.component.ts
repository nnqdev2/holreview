import { Component, OnInit } from '@angular/core';
// import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { DatePipe} from '@angular/common';
import { environment } from '../../../environments/environment';
import { LustDataService } from '../../services/lust-data.service';
import { LustSearchFilter } from '../../models/lust-search-filter';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  providers: [ LustDataService ]
})
export class SearchFilterComponent implements OnInit {

  lustSearchFilter: LustSearchFilter = new LustSearchFilter();
  lustSearchFilterForm: FormGroup;

  constructor(private lustDataService: LustDataService, private formBuilder: FormBuilder
   ) {}


  ngOnInit() {
    this.createLustSearchFilterForm();
  }

  createLustSearchFilterForm() {
    this.lustSearchFilterForm = this.formBuilder.group({
      logNumber:  [''],
      logCounty:  [''],
      logYear:  [''],
      logSeqNbr:  [''],
      facilityId:  [''],
      siteName:  [''],
      siteAddress:  [''],
      siteCitye:  [''],
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
      projectMananger:  [''],
      contactFirstName:  [''],
      contactLastName:  [''],
      contactOrgName:  [''],
      lustId:  [''],
      releaseType:  [''],
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