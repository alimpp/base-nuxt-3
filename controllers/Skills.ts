import { SkillsDataModel } from "~/model/Skills";

import type { ISkill } from "@/types/Skills";

const skillsStore = useSkillsStore();

class SkillsController extends SkillsDataModel {
  constructor() {
    super();
  }

  private getCacheData() {
    const list = this.getAllItems();
    if (list) {
      skillsStore.setSkills(list);
    }
  }

  public async addSkill(skill: string) {
    return this.Post("/api/skill/add", { skill });
  }

  public async getSkills() {
    this.getCacheData();
    const requestResponse = await this.Get("/api/skill/list");
    const parsedList: ISkill[] = this.generateSkills(
      requestResponse as ISkill[]
    );
    skillsStore.setSkills(parsedList);
  }

  public async removeSkill(id: number | string) {
    return await this.Delete(`/api/skill/${id}`);
  }
}

export const skillsController = new SkillsController();
