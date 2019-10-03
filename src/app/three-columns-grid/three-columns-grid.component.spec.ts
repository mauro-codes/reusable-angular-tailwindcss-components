import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnsGridComponent } from './three-columns-grid.component';

describe('ThreeColumnsGridComponent', () => {
  let component: ThreeColumnsGridComponent;
  let fixture: ComponentFixture<ThreeColumnsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColumnsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColumnsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
