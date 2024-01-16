export interface JobProps {
  company: string,
  startDate: string,
  endDate: string,
  role: string
  description: Array<string>
}

export interface SkillsProps {
  languages: Array<string>,
  frontend: Array<string>,
  backend: Array<string>
  tools: Array<string>
}
