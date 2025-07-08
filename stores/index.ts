import { ApplicationStore } from "./modules/ApplicationStore"
import { UserStore } from "./modules/UserStore";
import { UsersStore } from "./modules/UsersStore";

export const initializeStores = () => {
  ApplicationStore.getInstance();
  UserStore.getInstance();
  UsersStore.getInstance();
};

initializeStores();

export const useApplicationStore = () => ApplicationStore.getInstance()
export const useUserStore = () => UserStore.getInstance();
export const useUsersStore = () => UsersStore.getInstance();
