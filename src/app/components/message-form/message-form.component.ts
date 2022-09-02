import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Chat } from 'src/app/models/chat.model';
import { ChatsService } from 'src/app/services/chats.service';
import { checkMessageNotEmptyValidator } from 'src/app/validators/not-empty-message.validator';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  @Input() chat!: Chat;
  chats!: Chat[];

  messageForm = this.formBuilder.group({
    text: ['', [
      checkMessageNotEmptyValidator()
    ]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private chatsService: ChatsService,
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    const messageText = this.messageForm.value.text as string;
    this.chatsService.sendMessage(messageText, this.chatsService.activeChat.currentUser);
    this.chatsService.getJokeAnswer();
    this.messageForm.patchValue({text: ''})
  }
}

