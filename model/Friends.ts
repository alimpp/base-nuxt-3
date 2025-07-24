import { BaseApp } from "../core/BaseApp";
import type { IServerResponse } from "@/types/Friends";

const userStore = useUserStore();

export class FriendsDataModel extends BaseApp<any> {
  constructor() {
    super("friends");
  }

  async friendsListParsed(apiResponse: IServerResponse) {
    if (!Array.isArray(apiResponse)) {
      throw new Error("Invalid list data format");
    }
    let list = [];
    const currentUser = userStore.getUser();
    for (let elem of apiResponse) {
      let result = {};
      if (currentUser.id == elem.friendRequestedBy.id) {
        result = {
          friendListId: elem.id,
          ...(await useUserGenerator(elem.to)),
        };
      } else {
        result = {
          friendListId: elem.id,
          ...(await useUserGenerator(elem.from)),
        };
      }
      list.push(result);
    }
    this.saveAllItems(list);
    return list;
  }
}
