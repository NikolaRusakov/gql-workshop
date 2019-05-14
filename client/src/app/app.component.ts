import { Component, OnInit } from '@angular/core';
import { JeVedroGQL} from './generated/graphql';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'client';
  constructor(private  ss: JeVedroGQL){
  }
  ngOnInit(): void {
    this.ss.watch().valueChanges.subscribe(console.log);
  }
}
