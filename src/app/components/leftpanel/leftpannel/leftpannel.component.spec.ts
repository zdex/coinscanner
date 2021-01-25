import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftpannelComponent } from './leftpannel.component';

describe('LeftpannelComponent', () => {
  let component: LeftpannelComponent;
  let fixture: ComponentFixture<LeftpannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftpannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
