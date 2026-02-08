
export interface Course {
  id: string;
  code: string;
  title: string;
  unit: number;
}

export interface StudentData {
  admNo: string;
  name: string;
  programme: string;
  level: string;
  phone: string;
  photoUrl: string;
  session: string;
  semester: string;
  generatedDate: string;
}

export interface ExamRules {
  id: number;
  text: string;
}
