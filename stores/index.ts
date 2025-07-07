import { UserStore } from "./modules/UserStore";
import { TaskStore } from "./modules/TaskStore";
import { ApplicationStore } from "./modules/ApplicationStore"

export const initializeStores = () => {
  UserStore.getInstance();
  TaskStore.getInstance();
  ApplicationStore.getInstance()
};

initializeStores();

export const useUserStore = () => UserStore.getInstance();
export const useTaskStore = () => TaskStore.getInstance();
export const useApplicationStore = () => ApplicationStore.getInstance()
