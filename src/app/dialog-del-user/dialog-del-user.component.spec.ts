import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDelUserComponent } from './dialog-del-user.component';

describe('DialogDelUserComponent', () => {
  let component: DialogDelUserComponent;
  let fixture: ComponentFixture<DialogDelUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDelUserComponent]
    });
    fixture = TestBed.createComponent(DialogDelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
