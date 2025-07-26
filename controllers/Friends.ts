import { FriendsDataModel } from "~/model/Friends";
import { requestController } from "~/controllers/Request";

import type { IServerResponse, IFriendList } from "../types/Friends";

export class FriendsController extends FriendsDataModel {
  constructor(private readonly RequestController: typeof requestController) {
    super();
  }

  private friendsStore = useFriendsStore();

  private getCacheData() {
    const list = this.getAllItems();
    if (list) {
      this.friendsStore.setFriendsList(list);
    }
  }

  public async getFriendsList() {
    this.friendsStore.setModuleState('Data Updating . . . ')
    this.getCacheData();
    const requestResponse = (await this.Get(
      "/api/friends/list"
    )) as IServerResponse;
    const parsedList = (await this.friendsListParsed(
      requestResponse
    )) as IFriendList[];
    this.friendsStore.setFriendsList(parsedList);
    this.friendsStore.setModuleState('')
  }

  public async accept(data: {
    requestId: number | string;
    friend: number | string;
  }) {
    await this.Post("/api/friends/add", data);
    await this.RequestController.getRequestList();
  }

  // public async reject(id: number | string) {
  //   await this.Delete(`/api/request/${id}`);
  //   await this.getRequestList();
  // }
}

export const friendsController = new FriendsController(requestController);
