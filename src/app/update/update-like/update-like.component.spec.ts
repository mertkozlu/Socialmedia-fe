import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLikeComponent } from './update-like.component';

describe('UpdateLikeComponent', () => {
  let component: UpdateLikeComponent;
  let fixture: ComponentFixture<UpdateLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLikeComponent]
    });
    fixture = TestBed.createComponent(UpdateLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
