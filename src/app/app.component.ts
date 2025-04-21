import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Made by Nirakash';
  question = 'Will you go out with me?';
  response = '';
  noClickCount = 0;

  noMessages = [
    'I really mean it!',
    'Please reconsider 🥺',
    'Think about it...',
    'Think again...',
    'You’re breaking my heart 💔',
    'Why not? 😢',
    'Just give me a chance...',
    'I brought flowers 🌹',
    'Don’t make me beg 😩',
    'You’re too cute to say no 😘',
    'I asked nicely... 🥲',
    'This hurts more than leg day 💀',
    'Come on, it’ll be fun 🎉',
    'Last chance! 😬',
    'I’m running out of messages 😵',
    'Okay but seriously... please? 🧎',
    'What if I bring snacks? 🍕',
    'Free hugs included 🤗',
    'You’ll regret saying no! 😤',
    'My mom already knows about you 😳',
    'We could be the main characters 🎬',
    'Imagine the couple selfies 📸',
    'Please... 😞'
  ];

  onYesClick() {
    this.response = 'Yay! I’m so happy! 💖';
  }

  onNoClick() {
    this.response = this.noMessages[Math.min(this.noClickCount, this.noMessages.length - 1)];
    this.noClickCount++;
  }

  getYesButtonSize() {
    return 1 + this.noClickCount * 0.1;
  }

  getNoButtonSize() {
    return Math.max(1 - this.noClickCount * 0.045, 0);
  }

  shouldShowNoButton() {
    return this.noClickCount < this.noMessages.length;
  }
  
}
