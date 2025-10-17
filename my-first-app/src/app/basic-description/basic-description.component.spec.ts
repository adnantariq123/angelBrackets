import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDescriptionComponent } from './basic-description.component';

describe('BasicDescriptionComponent', () => {
  let component: BasicDescriptionComponent;
  let fixture: ComponentFixture<BasicDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


    it('should render title', () => {
      const fixture = TestBed.createComponent(BasicDescriptionComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h4')?.textContent).toContain('Angular directives are instructions in the DOM that tell Angular to attach a specific behavior to a DOM element or to transform the DOM element itself. There are three main types of directives in Angular:');
    });
});
