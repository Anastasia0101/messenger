import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNotSelectedComponent } from './chat-not-selected.component';

describe('ChatNotSelectedComponent', () => {
  let component: ChatNotSelectedComponent;
  let fixture: ComponentFixture<ChatNotSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatNotSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatNotSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
