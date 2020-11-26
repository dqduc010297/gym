import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbodySummarizeComponent } from './inbody-summarize.component';

describe('InbodySummarizeComponent', () => {
  let component: InbodySummarizeComponent;
  let fixture: ComponentFixture<InbodySummarizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbodySummarizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InbodySummarizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
