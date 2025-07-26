import { RequestDataModel } from "~/model/Request";
import { usersController } from "@/controllers/Users";

import type { IServerResponse, IRequestList } from "../types/Request";

export class RequestController extends RequestDataModel {
  constructor(private readonly UsersController: typeof usersController) {
    super();
  }

  private requestStore = useRequestStore();

  private getCacheData() {
    const list = this.getAllItems();
    if (list) {
      this.requestStore.setRequestList(list);
    }
  }

  public async getRequestList() {
    this.requestStore.setModuleState('Updating . . . ')
    this.getCacheData();
    const requestResponse = (await this.Get(
      "/api/request/list"
    )) as IServerResponse;
    const parsedList: IRequestList[] = await this.requestListParsed(
      requestResponse
    );
    this.requestStore.setRequestList(parsedList);
    this.requestStore.setModuleState('')
  }

  public async sendRequest(request: number | string) {
    await this.Post("/api/request/send", { to: Number(request) });
    await this.UsersController.allUsers();
  }

  public async reject(id: number | string) {
    await this.Delete(`/api/request/${id}`);
    await this.getRequestList();
  }
}

export const requestController = new RequestController(usersController);
