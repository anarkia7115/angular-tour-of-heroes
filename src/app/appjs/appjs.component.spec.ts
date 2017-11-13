import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppjsComponent } from './appjs.component';

describe('AppjsComponent', () => {
  let component: AppjsComponent;
  let fixture: ComponentFixture<AppjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
