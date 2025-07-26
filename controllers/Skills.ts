import { SkillsDataModel } from "~/model/Skills";

import type { ISkill } from "@/types/Skills";

const { info, error } = useToast()

class SkillsController extends SkillsDataModel {
  constructor() {
    super();
  }

  private skillsStore = useSkillsStore();

  private getCacheData() {
    const list = this.getAllItems();
    if (list) {
      this.skillsStore.setSkills(list);
    }
  }

  public async addSkill(skill: string) {
    return this.Post("/api/skill/add", { skill }).then(() => {info(`${skill} added to skills`)});
  }

  public async getSkills() {
    this.getCacheData();
    const requestResponse = await this.Get("/api/skill/list");
    const parsedList: ISkill[] = this.skillsParsed(requestResponse as ISkill[]);
    this.skillsStore.setSkills(parsedList);
  }

  public async removeSkill(skill: ISkill) {
    return await this.Delete(`/api/skill/${skill.id}`).then(() => {error(`${skill.skill} skill removed`)})
  }
}

export const skillsController = new SkillsController();
