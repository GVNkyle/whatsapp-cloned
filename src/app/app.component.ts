import { Component } from '@angular/core';
import { conversation } from './models/conversation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // conversation: conversation = {
  //   latestMessage: '',
  //   messages: []
  // };
  conversation: any;

  onConversationSelected(conversation: conversation) {
    this.conversation = conversation;
  }
}
