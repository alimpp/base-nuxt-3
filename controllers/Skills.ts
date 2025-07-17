import { SkillsDataModel } from "~/model/Skills";

import type { ISkill } from "@/types/Skills";

const skillsStore = useSkillsStore();

class SkillsController extends SkillsDataModel {
  constructor() {
    super();
  }

  public getCacheData() {
    const skills = this.getAllItems();
    if (skills) {
      skillsStore.setSkills(skills);
    }
  }

  public async addSkill(skill: string) {
    this.Post("/api/skills/add", { skill });
  }

  public async getSkills() {
    this.getCacheData();
    const requestResponse = await this.Get("/api/skills/list");
    const parsedList: ISkill[] = this.generateSkills(
      requestResponse as ISkill[]
    );
    skillsStore.setSkills(parsedList);
  }

  public async removeSkill(id: number | string) {
    const response = await this.Delete(`/api/skills/${id}`);
    return response;
  }
}

export const skillsController = new SkillsController();
