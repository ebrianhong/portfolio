export interface JobProps {
  company: string;
  startDate: string;
  endDate: string;
  role: string;
  description: Array<string>;
}

export interface SkillProps {
  skillName: string;
  skillList: Array<string>;
}
