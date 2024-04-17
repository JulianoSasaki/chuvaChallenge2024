import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  expandText() {
    const expandedText = document.querySelector('.expanded-text') as HTMLElement;
    const colapseText = document.querySelector('.colapsed-text') as HTMLElement;

    expandedText.style.display = 'block';
    colapseText.style.display = 'none';
  }

  colapseText() {
    const expandedText = document.querySelector('.expanded-text') as HTMLElement;
    const colapseText = document.querySelector('.colapsed-text') as HTMLElement;

    expandedText.style.display = 'none';
    colapseText.style.display = 'block';
  }

  showTopicForm() {
    const discussionContent = document.querySelector('.discussion-content') as HTMLElement;
    const form = document.querySelector('.form') as HTMLElement;

    discussionContent.style.display = 'none';
    form.style.display = 'block';
  }

  submitForm(event: MouseEvent) {
    if (event) event.preventDefault();

    const form = document.querySelector('.form') as HTMLElement;
    const topicCreated = document.querySelector('.topic-submited') as HTMLElement;

    form.style.display = 'none';
    topicCreated.style.display = 'block';
  }

  createNewTopic() {
    const form = document.querySelector('.form') as HTMLElement;
    const topicCreated = document.querySelector('.topic-submited') as HTMLElement;
    const inputReset = document.querySelector('form') as HTMLFormElement;

    inputReset.reset();
    form.style.display = 'block';
    topicCreated.style.display = 'none';
  }

  expandTopicCard() {
    const colapsedTopic = document.querySelector('#topic2') as HTMLElement;
    const expandedTopic = document.querySelector('.expanded-topic') as HTMLElement;

    colapsedTopic.style.display = 'none';
    expandedTopic.style.display = 'block';
  }

  colapseTopicCard() {
    const expandedTopic = document.querySelector('.expanded-topic') as HTMLElement;
    const colapsedTopic = document.querySelector('#topic2') as HTMLElement;

    expandedTopic.style.display = 'none';
    colapsedTopic.style.display = 'block';
  }
}
