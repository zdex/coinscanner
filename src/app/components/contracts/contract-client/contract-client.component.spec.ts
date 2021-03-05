import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractClientComponent } from './contract-client.component';

describe('ContractClientComponent', () => {
  let component: ContractClientComponent;
  let fixture: ComponentFixture<ContractClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
