import { BaseHttp } from "../core/BaseHttp";

import type { ISkill } from "~/types/Skills";

export class SkillsDataModel extends BaseHttp {
  constructor() {
    super("skills");
  }

  public generateSkills(apiResponse: ISkill[]): (ISkill & { id: string })[] {
    if (!Array.isArray(apiResponse)) {
      throw new Error("Invalid skills data format");
    }

    const skills = apiResponse.map((skill) => ({
      ...skill,
      id: String(skill.id),
    })) as (ISkill & { id: string })[];

    this.saveAllItems(skills);
    return skills;
  }
}
