import { Component, OnInit } from '@angular/core';
import { Memo } from 'src/data/memo';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css']
})
export class MemosComponent implements OnInit {
public memos: Memo[] = [
  new Memo('message 1', null, 'sender 1','subject 1'), 
  new Memo('message 2', null, 'sender 2','subject 2'),
]
  constructor() { }

  ngOnInit(): void {
  }

}
