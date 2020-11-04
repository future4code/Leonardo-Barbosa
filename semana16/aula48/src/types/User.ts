enum LabenuTypes {
  TEACHER = "Teacher",
  OPERATIONS = "Operations",
  CX = "Cx"
}


export type User = {
  id: number,
  name: string,
  email: string,
  type: LabenuTypes
}

