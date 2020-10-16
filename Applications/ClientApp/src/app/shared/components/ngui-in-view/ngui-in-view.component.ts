import { isPlatformBrowser } from '@angular/common';
import { Component, ContentChild, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID, Renderer2, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ngui-in-view',
  templateUrl: './ngui-in-view.component.html',
  styleUrls: ['./ngui-in-view.component.scss']
})
export class NguiInViewComponent implements OnInit, OnDestroy {

  observer: IntersectionObserver;
  inView: boolean = false;
  once50PctVisible: boolean = false;

  @ContentChild(TemplateRef) template: TemplateRef<any>;
  @Input() options: any = { threshold: [.1, .2, .3, .4, .5, .6, .7, .8] };
  @Output('inView') inView$: EventEmitter<any> = new EventEmitter();
  @Output('notInView') notInView$: EventEmitter<any> = new EventEmitter();

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
      this.observer.observe(this.element.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  handleIntersect(entries, observer): void {
    console.log(entries.length)
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.inView = true;
        this.defaultInViewHandler(entry);
        this.inView$.emit(entry);
      } else {
        this.notInView$.emit(entry);
      }
    });
  }

  defaultInViewHandler(entry) {
    console.log('defaultInViewHandler', entry.intersectionRatio);
    if (this.once50PctVisible)
      return false;
    if (this.inView$.observers.length)
      return false;

    if (entry.intersectionRatio < 0.8) {
      let opacity = entry.intersectionRatio * (1 / 0.8);
      let blur = 20 - Math.floor(entry.intersectionRatio * 10) * 4;
      let filter = `blur(${blur}px)`;
      Object.assign(entry.target.style, { opacity, filter });
    } else {
      entry.target.style.opacity = 1;
      entry.target.style.filter = 'unset';

      this.once50PctVisible = true;
    }
  }

}
