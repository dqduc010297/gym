import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-inbody-summarize',
  templateUrl: './inbody-summarize.component.html',
  styleUrls: ['./inbody-summarize.component.scss']
})
export class InbodySummarizeComponent implements OnInit, OnChanges {
  @Input() inbodys: any;

  constructor(
    public loaderService: LoaderService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inbodys?.currentValue) {
      if (this.inbodys.length > 1) {
        this.inbodys.forEach((inbody, index) => {
          if (index < this.inbodys.length - 1) {
            inbody.isIncreaseWeight = inbody.weight > this.inbodys[index + 1].weight;
            inbody.isIncreaseSMM = inbody.skeletalMuscleMass > this.inbodys[index + 1].skeletalMuscleMass;
            inbody.isIncreaseBFM = inbody.bodyFatMass > this.inbodys[index + 1].bodyFatMass;
          } else {
            inbody.isIncreaseWeight = true;
            inbody.isIncreaseSMM = true;
            inbody.isIncreaseBFM = true;
          }
        });
        console.log(this.inbodys);
      }
    }
  }

  ngOnInit(): void {
  }

  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }
}
