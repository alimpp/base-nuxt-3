import { NoteDataModel } from "~/model/Note";

import type { INote, IServerResponse } from "@/types/note";

const { info, error } = useToast()

class NoteController extends NoteDataModel {
  constructor() {
    super();
  }

  private noteStore = useNoteStore();

  private getCacheData() {
    const list = this.getAllItems();
    if (list) {
      this.noteStore.setList(list);
    }
  }

  public async getList() {
    this.noteStore.setModuleState('Data Updating . . . ')
    this.getCacheData();
    const requestResponse : IServerResponse[] = await this.Get("/api/note/all")
    const list: INote[] = await this.listParsed(requestResponse);
    this.noteStore.setList(list);
    this.noteStore.setModuleState('')
  }

   public async addNote(data: string) {
    return this.Post("/api/note/add", { note: data }).then( async () => {
      info(`${data} shared in notes`)
      setTimeout( async () => {
        await this.getList()
      }, 1000);
    });
  }
}

export const noteController = new NoteController();
