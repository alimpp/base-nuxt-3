import { FilesDataModel } from '~/model/Files'

export class FilesController extends FilesDataModel {

    constructor() {
        super()
    }

  public getCacheData() {}  

  public async uploadFile(file: FormData) {     
    console.log(file);
               
    const response = await $fetch(`http://localhost:4000/files/upload`, {
        method: "POST",
        body: file,
        "Content-Type": "application/json;",
        "Content-Length": "258"
    });    
    return response;
  }

  async downloadFileById(id: string) {
    const file = this.read(id)    
    if(!file) {
      this.updateByStorageKey({id: id})
    }
    return file ? `http://localhost:4000/files/${file.id}` : `http://localhost:4000/files/${id}`
  }

}

export const filesController = new FilesController()