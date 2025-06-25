import { UserStore } from "./modules/UserStore";
import { TaskStore } from "./modules/TaskStore";

export const initializeStores = () => {
  UserStore.getInstance();
  TaskStore.getInstance();
};

initializeStores();

export const useUserStore = () => UserStore.getInstance();
export const useTaskStore = () => TaskStore.getInstance();
