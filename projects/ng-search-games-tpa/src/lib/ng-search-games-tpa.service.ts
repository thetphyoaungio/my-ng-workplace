import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgSearchGamesTpaService {

  constructor() { }

  searchGames(evt:any, source:Array<object>, selectedLanguage:string) {
    let result:Array<object> = [];
    
    if(evt.target.value.trim()) {
        
        /* if(selectedLanguage==='en') {
            const tmp = source.filter((x:any) => x.name.toLowerCase().includes(evt.target.value.toLowerCase()));

            if(tmp && tmp.length > 0) result = [...tmp];

        } else if(selectedLanguage==='zh') {
            evt.target.value = evt.target.value.trim();
            
            const tmp = source.filter((x:any) => x.name.includes(evt.target.value));

            if(tmp && tmp.length > 0) result = [...tmp];
            
        } else if(selectedLanguage==='my') {
            const tmp = source.filter((x:any) => x.name.includes(evt.target.value));

            if(tmp && tmp.length > 0) result = [...tmp];
            
        } */

        switch (selectedLanguage) {
          case 'en' : {
            const tmp = source.filter((x:any) => x.name.toLowerCase().includes(evt.target.value.toLowerCase()));

            if(tmp && tmp.length > 0) /* result = */return [...tmp];

            break;
          }
          case 'zh' : {
            evt.target.value = evt.target.value.trim();
            
            const tmp = source.filter((x:any) => x.name.includes(evt.target.value));

            if(tmp && tmp.length > 0) /* result = */return [...tmp];

            break;
          }
          case 'my' : {
            const tmp = source.filter((x:any) => x.name.includes(evt.target.value));

            if(tmp && tmp.length > 0) /* result = */return [...tmp];

            break;
          }
        }

    } else {
        /* result = */return [...source];
    }

    //return result;
  }
}
