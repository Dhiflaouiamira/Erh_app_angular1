import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseInfoComponent } from './entreprise-info.component';

describe('EntrepriseInfoComponent', () => {
  let component: EntrepriseInfoComponent;
  let fixture: ComponentFixture<EntrepriseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
