import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfiltersComponent } from './dfilters.component';

describe('DfiltersComponent', () => {
  let component: DfiltersComponent;
  let fixture: ComponentFixture<DfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
