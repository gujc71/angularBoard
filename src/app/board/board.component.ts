import { Component, OnInit } from '@angular/core';
import { BoardVO } from '../BoardVO';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

	constructor(private boardService: BoardService) { }
 
	ngOnInit() {
	}
 
	boardForm = new BoardVO();
	
	getBoardList():BoardVO[] {
		return this.boardService.getBoardList();
	}
	
	removeBoard(id: number):void {
        if (!id) return;
		this.boardService.removeBoard(id);
    }
	
	addBoard(): void {
		this.boardService.addBoard(this.boardForm);
    }
}
