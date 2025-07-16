import { SkillsDataModel } from "~/model/Skills";

import { baseHttp } from './BaseHttp'

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
    this.getCacheData()
    const requestResponse = await baseHttp.Get('/api/skills/list')
    const parsedList: ISkill[] = this.generateSkills(requestResponse as ISkill[])
    skillsStore.setSkills(parsedList)
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