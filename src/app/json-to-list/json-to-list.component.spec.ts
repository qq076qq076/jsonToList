import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToListComponent } from './json-to-list.component';

describe('JsonToListComponent', () => {
  let component: JsonToListComponent;
  let fixture: ComponentFixture<JsonToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
