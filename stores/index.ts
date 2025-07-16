import { ApplicationStore } from "./modules/ApplicationStore"
import { UserStore } from "./modules/UserStore";
import { UsersStore } from "./modules/UsersStore";
import { SkillsStore } from "./modules/SkillsStore"

export const initializeStores = () => {
  ApplicationStore.getInstance();
  UserStore.getInstance();
  UsersStore.getInstance();
  SkillsStore.getInstance();
};

initializeStores();

export const useApplicationStore = () => ApplicationStore.getInstance()
export const useUserStore = () => UserStore.getInstance();
export const useUsersStore = () => UsersStore.getInstance();
export const useSkillsStore = () => SkillsStore.getInstance();

