import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircullumComponentComponent } from './circullum-component.component';

describe('CircullumComponentComponent', () => {
  let component: CircullumComponentComponent;
  let fixture: ComponentFixture<CircullumComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircullumComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircullumComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
