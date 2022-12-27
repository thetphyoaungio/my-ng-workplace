import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSearchGamesTpaComponent } from './ng-search-games-tpa.component';

describe('NgSearchGamesTpaComponent', () => {
  let component: NgSearchGamesTpaComponent;
  let fixture: ComponentFixture<NgSearchGamesTpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSearchGamesTpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSearchGamesTpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
