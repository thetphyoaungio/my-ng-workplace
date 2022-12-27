import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgSearchGamesTpaService {

  constructor() { }

  searchGames(evt:any, source:Array<object>, selectedLanguage:string) : Array<any>|any {
    if(evt.target.value.trim()) {
      switch (selectedLanguage) {
          case 'en' : {
            const tmp = source.filter((x:any) => x.name.toLowerCase().includes(evt.target.value.toLowerCase()));

            if(tmp && tmp.length > 0) return [...tmp];

            break;
          }
          case 'zh' : {
            evt.target.value = evt.target.value.trim();
            
            const tmp = source.filter((x:any) => x.name.includes(evt.target.value));

            if(tmp && tmp.length > 0) return [...tmp];

            break;
          }
          case 'my' : {
            const tmp = source.filter((x:any) => x.name.includes(evt.target.value));

            if(tmp && tmp.length > 0) return [...tmp];

            break;
          }
        }
    } else {
        return [...source];
    }
  }
}
