import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulNoteComponent } from './colorful-note.component';

describe('ColorfulNoteComponent', () => {
  let component: ColorfulNoteComponent;
  let fixture: ComponentFixture<ColorfulNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfulNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfulNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
