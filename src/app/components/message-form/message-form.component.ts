import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Chat } from 'src/app/models/chat.model';
import { Message } from 'src/app/models/message.model';
import { ChatsService } from 'src/app/services/chats.service';
import { UserService } from 'src/app/services/users.service';
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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.chatsService.activeChat = this.chatId;
    this.chatsService.chats$.subscribe(data => this.chats = data)
  }

  onFormSubmit(): void {
    console.log(this.messageForm.value);
    const messageText = this.messageForm.value.text as string;
    const date = new Date();
    console.log(this.chat)
    // const newChat = { ...ch/at, messages: [...chat.messages, { text: text, sender: sender, dateOfSending: this.currDate }]};
    this.chatsService.sendMessage(this.chat, { text: messageText, sender: this.userService.currentUser, dateOfSending: date });
  }
}

