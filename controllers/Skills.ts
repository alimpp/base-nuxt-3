import { SkillsDataModel } from "~/model/Skills";

import type { ISkill } from '@/types/Skills'

const skillsStore = useSkillsStore()

class SkillsController extends SkillsDataModel {

  constructor() {
    super()
  }

  public getCacheData() {
    const skills = this.getAllItems()
    if(skills) {
      skillsStore.setSkills(skills)
    }
  }  

  public async addSkill(skill: string) {
    const token = useCookie("token");
    try {
      await $fetch("/api/skills/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          skill,
        },
      })
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async getSkills() {
    const token = useCookie("token");
    this.getCacheData()
    try {
      const requestResponse : ISkill[] = await $fetch("/api/skills/list", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      const parsedList: ISkill[] = this.generateSkills(requestResponse)
      skillsStore.setSkills(parsedList)
    } catch (error) {
      console.error('Failed to fetch skills:', error);
      throw error;
    }
  }

  public async removeSkill(id: number | string) {
    const token = useCookie("token");
    const response = await $fetch(`/api/skills/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    return response;
  }
  
}

export const skillsController = new SkillsController()