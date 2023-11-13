import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSComponent } from './sidebarS.component';

describe('SidebarSComponent', () => {
  let component: SidebarSComponent;
  let fixture: ComponentFixture<SidebarSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
