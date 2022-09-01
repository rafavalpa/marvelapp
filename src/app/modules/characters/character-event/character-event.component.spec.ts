import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEventComponent } from './character-event.component';

describe('CharacterEventComponent', () => {
  let component: CharacterEventComponent;
  let fixture: ComponentFixture<CharacterEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
