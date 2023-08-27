import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDataTableComponent } from './header-data-table.component';

describe('HeaderDataTableComponent', () => {
  let component: HeaderDataTableComponent;
  let fixture: ComponentFixture<HeaderDataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDataTableComponent]
    });
    fixture = TestBed.createComponent(HeaderDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
