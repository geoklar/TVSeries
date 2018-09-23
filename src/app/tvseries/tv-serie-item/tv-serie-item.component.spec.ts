/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TvSerieItemComponent } from './tv-serie-item.component';

describe('TvSerieItemComponent', () => {
  let component: TvSerieItemComponent;
  let fixture: ComponentFixture<TvSerieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSerieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSerieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
