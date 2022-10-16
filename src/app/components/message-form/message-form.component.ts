import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Chat } from 'src/app/models/chat.model';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent {
  @Input() chat!: Chat;
  chats!: Chat[];

  messageForm = this.formBuilder.group({
    text: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private chatsService: ChatsService,
  ) { }

  onFormSubmit(): void {
    const messageText = this.messageForm.value.text as string;
    this.messageForm.patchValue({text: ''});
    if(!messageText.trim()) {
      return;
    }
    this.chatsService.sendMessage(messageText, this.chatsService.activeChat.currentUser);
  }
}

