import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponentComponent } from './slider-component.component';

describe('SliderComponentComponent', () => {
  let component: SliderComponentComponent;
  let fixture: ComponentFixture<SliderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
