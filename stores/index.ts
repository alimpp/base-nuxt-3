import { ApplicationStore } from "./modules/ApplicationStore";
import { UserStore } from "./modules/UserStore";
import { UsersStore } from "./modules/UsersStore";
import { SkillsStore } from "./modules/SkillsStore";
import { RequestStore } from './modules/RequestStore'
import { FriendsStore } from './modules/FriendsStore'
import { NoteStore } from "./modules/NoteStore";
export const initializeStores = () => {
  ApplicationStore.getInstance();
  UserStore.getInstance();
  UsersStore.getInstance();
  SkillsStore.getInstance();
  RequestStore.getInstance();
  FriendsStore.getInstance();
  NoteStore.getInstance();
};

initializeStores();

export const useApplicationStore = () => ApplicationStore.getInstance();
export const useUserStore = () => UserStore.getInstance();
export const useUsersStore = () => UsersStore.getInstance();
export const useSkillsStore = () => SkillsStore.getInstance();
export const useRequestStore = () => RequestStore.getInstance();
export const useFriendsStore = () => FriendsStore.getInstance();
export const useNoteStore = () => NoteStore.getInstance();