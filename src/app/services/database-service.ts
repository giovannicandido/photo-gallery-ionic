import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DataBaseService {
    
    /**
     * Save any element in database
     * @param key A ID representing the key of the value
     * @param value Value to save in database
     * @param autoIncrement If true will cancatenate an autoIncrement value to the key
     *  if the value has the key the autoIncrement will not create a new one even if true.
     *  For example: saveOrUpdate('cat', {name: "Name"}) -> creates the cat-1 key
     *  saveOrUpdate('cat-1', {name: "Name 2"}) -> updates cat-1 key (it will not create a new one)
     */
    saveOrUpdate(key: string, value: any, autoIncrement = false) {

    }

    getByKey(key: string): any {
        return {}
    }

    findAllByKey(key: string): any[] {
        return [{
            name: 'Mila',
            color: "white"
          }, {
            name: 'Mel',
            color: 'yellow'
          }]
    }

}