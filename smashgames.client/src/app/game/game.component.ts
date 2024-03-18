import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Game } from '../Models/game';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  games$: BehaviorSubject<Game[]> = this.data.games$;

  constructor(private data: DataService) { }

}
