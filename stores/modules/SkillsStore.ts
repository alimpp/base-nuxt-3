import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";

import type { ISkill } from "@/types/Skills";

interface ISkillsState {
  skills: ISkill[];
  moduleState: string
}

export class SkillsStore extends BaseStore<ISkillsState> {
  private static _instance: SkillsStore;

  public static getInstance(): SkillsStore {
    if (!SkillsStore._instance) {
      SkillsStore._instance = new SkillsStore();
    }
    return SkillsStore._instance;
  }

  private constructor() {
    super("skills", {
      skills: [],
      moduleState: ''
    });

    StoreManager.register(this);
  }

  public setSkills(skills: ISkill[]) {
    this._state.skills = skills;
  }

  public reset() {
    this._state.skills = [];
    this._state.moduleState = ''
  }
}
