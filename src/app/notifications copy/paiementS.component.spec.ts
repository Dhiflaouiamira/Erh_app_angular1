import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementSComponent } from './paiementS.component';

describe('PaiementSComponent', () => {
  let component: PaiementSComponent;
  let fixture: ComponentFixture<PaiementSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
