import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmpresaslistComponent } from './empresaslist.component';

describe('EmpresaslistComponent', () => {
  let component: EmpresaslistComponent;
  let fixture: ComponentFixture<EmpresaslistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
