import { SKILLS } from "..";
import type { Skill } from "../types/index.type";

export class SkillGetByIdHandler {
  static handle(id: string): Skill {
    const skill = SKILLS.find((skill) => skill.id === id);

    if (!skill) {
      throw new Error(`Skill with id "${id}" not found`);
    }

    return skill;
  }
}
