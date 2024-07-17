import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Injectable({ providedIn: 'root' })
export class DataBaseService {
  private _initStorage: Storage | null = null

  constructor(private storage: Storage) {
    this.init()
  }

  async init() {
    // sem await
    //const storage = this.storage.create()
    // promise
    //this.storage.create()
    //  .then(storageCriado => this._storage = storageCriado)
    const storage = await this.storage.create()
    this._initStorage = storage;
  }

  /**
   * Save any element in database
   * @param key A ID representing the key of the value
   * @param value Value to save in database
   * @param autoIncrement If true will cancatenate an autoIncrement value to the key
   *  if the value has the key the autoIncrement will not create a new one even if true.
   *  For example: saveOrUpdate('cat', {name: "Name"}) -> creates the cat-1 key
   *  saveOrUpdate('cat-1', {name: "Name 2"}) -> updates cat-1 key (it will not create a new one)
   */
  async saveOrUpdate(key: string, value: any, autoIncrement = false) {
    if (autoIncrement) {
      const all = await this.findAllByKey(key)
      all.push(value)
      this._initStorage?.set(key, all)
    } else {
      // if false
      this._initStorage?.set(key, [value])
    }
  }

  getByKey(key: string): any {
    return this._initStorage?.get(key)
  }

  async findAllByKey(key: string): Promise<any[]> {
    const value = await this._initStorage?.get(key)
    if(value === null || value === undefined) {
      return []
    }
    const values = value as any[]
    return values
  }

}