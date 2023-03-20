import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HysComponent } from './hys.component';

describe('HysComponent', () => {
  let component: HysComponent;
  // constructor(private HttpClient)
  let fixture: ComponentFixture<HysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
