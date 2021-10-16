import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';

import * as _ from 'lodash';

import { Thread } from './thread.model';
import { Message } from '../message/message.model';

import { MessagesService } from '../message/messages.service';

@Injectable()
export class ThreadsService {
  // Observable that contains the most up to date list of threads
  threads: Observable<{ [key: string]: Thread }>;

  // Contains the newest-first chronological list of threads
  orderedThreads: Observable<Thread[]>;

  // Contains the currently selected thread
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());

  // Contains set of messages for the currently selected thread
  currentThreadMessages: Observable<Message[]>;

  constructor(public messagesService: MessagesService) {
    this.threads = messagesService.messages.map((messages: Message[]) => {
      const threads: { [key: string]: Thread } = {};
      // Store the message's thread in our accumulator `threads`
      messages.map((message: Message) => {
        threads[message.thread.id] =
          threads[message.thread.id] || message.thread;

        // Cache the most recent message for each thread
        const messageThread: Thread = threads[message.thread.id];

        if (
          !messageThread.lastMessage ||
          messageThread.lastMessage.sentAt < message.sentAt
        ) {
          messageThread.lastMessage = message;
        }
      });

      return threads;
    });

    this.orderedThreads = this.threads.map(
      (threadGroups: { [key: string]: Thread }) => {
        const threads: Thread[] = _.values(threadGroups);
        return _.sortBy(threads, (t: Thread) => t.lastMessage.sentAt).reverse();
      }
    );

    this.currentThreadMessages = this.currentThread.combineLatest(
      messagesService.messages,
      (currentThread: Thread, messages: Message[]) => {
        if (currentThread && messages.length > 0) {
          return _.chain(messages)
            .filter(
              (message: Message) => message.thread.id === currentThread.id
            )
            .map((message: Message) => {
              message.isRead = true;
              return message;
            })
            .value();
        } else {
          return [];
        }
      }
    );

    this.currentThread.subscribe(this.messagesService.markThreadAsRead);
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }
}

export const threadServiceInjectables: Array<any> = [ThreadsService];
