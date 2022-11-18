import { Component, Input, OnInit } from '@angular/core';
import { Memo } from 'src/data/memo';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  @Input() memo: Memo | null = null

  constructor() { }

  ngOnInit(): void {
    
  }
 
}
