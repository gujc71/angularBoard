import { Injectable } from '@angular/core';

import { BoardVO } from './BoardVO';

var BoardList: BoardVO[] = [
  { id: 1, title: 'Title 1', writer: 'Mr. Nice' },
  { id: 2, title: 'Title 2', writer: 'Narco' }
];

@Injectable()
export class BoardService {

  constructor() { }

	boardlist = BoardList;

	getBoardList(): BoardVO[] {
		return this.boardlist;
	}
	
  	removeBoard(id: number):void {
        var idx = this.boardlist.findIndex(function (item) {
            return item.id === id;
        });
        if (idx === -1) return;
        this.boardlist.splice(idx, 1);
    }
	
	addBoard(boardForm: BoardVO): void {
        var newId = ! this.boardlist.length ? 1 : this.boardlist[this.boardlist.length - 1].id + 1;
        
        var newItem = {
            id: newId,
            title: boardForm.title,
            writer: boardForm.writer 
        };
        this.boardlist.push(newItem);
    }  
}
