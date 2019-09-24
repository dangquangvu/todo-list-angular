import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreatedComponent } from './button-created.component';

describe('ButtonCreatedComponent', () => {
  let component: ButtonCreatedComponent;
  let fixture: ComponentFixture<ButtonCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
