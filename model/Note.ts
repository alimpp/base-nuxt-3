import { BaseApp } from "../core/BaseApp";
import type { IServerResponse, INote } from '@/types/note'

export class NoteDataModel extends BaseApp<any> {
    constructor(){
        super('notes')
    }

    public async listParsed(apiResponse: IServerResponse[]): Promise<INote[]> {
        if (!Array.isArray(apiResponse)) {
            throw new Error("Invalid list data format");
        }
        let list = [];
        for (let elem of apiResponse) {
            const obj = {
                ...elem,
                author: await useUserGenerator(elem.author),
            };
            list.push(obj);
        }
        this.saveAllItems(list);
        return list;
    }
}
