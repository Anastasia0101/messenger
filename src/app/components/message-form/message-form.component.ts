import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChatsService } from 'src/app/services/chats.service';
import { checkMessageNotEmptyValidator } from 'src/app/validators/not-empty-message.validator';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  messageForm = this.formBuilder.group({
    text: ['', [
      checkMessageNotEmptyValidator()
    ]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private chatsService: ChatsService
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    console.log(this.messageForm.value);
  }
}

