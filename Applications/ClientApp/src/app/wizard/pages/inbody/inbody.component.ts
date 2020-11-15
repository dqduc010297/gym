import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormState } from 'src/app/core/interfaces/iform-state.interface';
import { IForm } from 'src/app/core/interfaces/iform.interface';
import { IWizard } from 'src/app/core/interfaces/iwizard.interface';

@Component({
  selector: 'app-inbody',
  templateUrl: './inbody.component.html',
  styleUrls: ['./inbody.component.scss']
})
export class InbodyComponent implements OnInit, IForm, IWizard, IFormState {
  isCreate: boolean;
  state: string;
  form: FormGroup;

  constructor() { }

  generateForm(): void {

  }
  resetForm(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
