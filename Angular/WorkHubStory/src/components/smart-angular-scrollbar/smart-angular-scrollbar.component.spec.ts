import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAngularScrollbarComponent } from './smart-angular-scrollbar.component';

describe('SmartAngularScrollbarComponent', () => {
  let component: SmartAngularScrollbarComponent;
  let fixture: ComponentFixture<SmartAngularScrollbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartAngularScrollbarComponent]
    });
    fixture = TestBed.createComponent(SmartAngularScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
