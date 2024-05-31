import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafetariaAdminComponent } from './cafetaria-admin.component';

describe('CafetariaAdminComponent', () => {
  let component: CafetariaAdminComponent;
  let fixture: ComponentFixture<CafetariaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CafetariaAdminComponent]
    });
    fixture = TestBed.createComponent(CafetariaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
