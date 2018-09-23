import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbNavComponent } from './bread-crumb-nav.component';

describe('BreadCrumbNavComponent', () => {
  let component: BreadCrumbNavComponent;
  let fixture: ComponentFixture<BreadCrumbNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCrumbNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
