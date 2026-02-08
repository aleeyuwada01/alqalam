
import { StudentData, Course, ExamRules } from './types';

export const INITIAL_STUDENT_DATA: StudentData = {
  admNo: "CIS/CSC/22/1170",
  name: "ABUBAKAR SADIQ IBRAHIM",
  programme: "B.Sc. Computer Science",
  level: "400",
  phone: "08030402324",
  photoUrl: "https://i.ibb.co/tpZq3nfr/Screenshot-2026-02-08-210201.png",
  session: "2025/2026",
  semester: "FIRST SEMESTER",
  generatedDate: "2024-02-01 02:01:01 pm"
};

export const INITIAL_COURSES: Course[] = [
  { id: '1', code: 'GSP3211', title: 'ARABIC & QURAN MEMORIZATION', unit: 2 },
  { id: '2', code: 'PHY1213', title: 'Practical Physics I', unit: 1 },
  { id: '3', code: 'CSC3313', title: 'NET-CENTRIC COMPUTING', unit: 3 },
  { id: '4', code: 'CSC3218', title: 'COMPILER CONSTRUCTION', unit: 2 },
  { id: '5', code: 'CSC4211', title: 'HUMAN COMPUTER INTERFACE', unit: 2 },
  { id: '6', code: 'CSC4212', title: 'Software Engineering II', unit: 2 },
  { id: '7', code: 'CSC4215', title: 'COMPUTER SYSTEM PERFORMANCE AND EVALUATION', unit: 3 },
  { id: '8', code: 'CSC4216', title: 'FORMAL MODEL OF COMPUTATION', unit: 2 },
  { id: '9', code: 'CSC4217', title: 'Java Programming II', unit: 2 },
  { id: '10', code: 'CSC4214', title: 'Organization of Programming Languages', unit: 2 }
];

export const EXAM_RULES: ExamRules[] = [
  { id: 1, text: "Candidates should be in the vicinity of the Examination Hall at least 30 minutes before the commencement of examination." },
  { id: 2, text: "No candidate will be allowed into the Examination Hall without a valid Examination Card and University Identity Card." },
  { id: 3, text: "Candidates are NOT allowed to write anything on Examination Card." },
  { id: 4, text: "No candidate will be permitted to:" }, // Text for parent 4
  { id: 5, text: "Candidates are NOT permitted to give or receive assistance from fellow candidates on any matter related to the Examination." },
  { id: 6, text: "Candidates are NOT allowed to come into the examination hall with lecture notes, textbooks, mobile phones, or anything incriminating." },
  { id: 7, text: "Candidate who wishes to attract the attention of the invigilator shall do so by raising his/her hand only." },
  { id: 8, text: "Candidates MUST personally hand in their scripts to an invigilator before leaving Examination Hall." },
  { id: 9, text: "Candidates MUST ensure that they duly sign the attendance register by providing their Name, Admission Number, Booklet Number and Signature." },
  { id: 10, text: "Violation of any examination rule is liable to disciplinary action." }
];
