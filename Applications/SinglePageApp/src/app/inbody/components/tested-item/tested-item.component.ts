import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestedResult, Evaluation } from '../../core/models/tested-result';


@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-tested-item]',
  templateUrl: './tested-item.component.html',
  styleUrls: ['./tested-item.component.scss']
})

export class TestedItemComponent implements OnInit {
  @Input() isView = true;
  @Input() name: string;
  @Input() unit: string;
  @Input() maxDisabled = false;
  @Input() minDisabled = false;
  @Input() testedResult: TestedResult = new TestedResult();
  @Input() max: number;
  @Input() min: number;
  @Input() value: number;
  @Input() evaluation: Evaluation;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() minChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  valueOnChange() {
    this.valueChange.emit(this.value);
  }
  minOnChange() {
    this.minChange.emit(this.min);
  }
  maxOnChange() {
    this.maxChange.emit(this.max);
  }

  generateEvaluation(): string {
    if (!this.evaluation) {
      return Evaluation[this.evaluation];
    }
    return this.value < this.min ? Evaluation[Evaluation.Under] :
      this.value > this.min && this.value < this.max ? Evaluation[Evaluation.Normal] :
        this.value < this.max * 1.1 ? Evaluation[Evaluation.SlightlyOver] :
          Evaluation[Evaluation.Over];
  }
}
