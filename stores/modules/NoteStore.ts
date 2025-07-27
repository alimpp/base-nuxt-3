import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";

import type { INote } from "@/types/note";

interface INoteState {
  list: INote[];
  moduleState: string
}

export class NoteStore extends BaseStore<INoteState> {
  private static _instance: NoteStore;

  public static getInstance(): NoteStore {
    if (!NoteStore._instance) {
      NoteStore._instance = new NoteStore();
    }
    return NoteStore._instance;
  }

  private constructor() {
    super("note", {
      list: [],
      moduleState: ''
    });

    StoreManager.register(this);
  }

  get getModuleState(): string {
    return this._state.moduleState
  }

  public setModuleState(moduleState: string) {
    this._state.moduleState = moduleState
  }

  public setList(list: INote[]) {
    this._state.list = list;
  }

  get getList() {
    return this._state.list;
  }


  public reset() {
    this._state.list = [];
    this._state.moduleState = ''
  }
}
