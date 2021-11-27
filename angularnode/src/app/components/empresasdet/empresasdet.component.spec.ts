import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmpresasdetComponent } from './empresasdet.component';

describe('EmpresasdetComponent', () => {
  let component: EmpresasdetComponent;
  let fixture: ComponentFixture<EmpresasdetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
