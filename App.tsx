
import React, { useState } from 'react';
import { Download, Edit3, Eye, Printer, UserCircle, GraduationCap, ClipboardList, ShieldCheck } from 'lucide-react';
import ExamCard from './components/ExamCard';
import CardEditor from './components/CardEditor';
import { INITIAL_STUDENT_DATA, INITIAL_COURSES } from './constants';
import { StudentData, Course } from './types';

const App: React.FC = () => {
  const [student, setStudent] = useState<StudentData>(INITIAL_STUDENT_DATA);
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [viewMode, setViewMode] = useState<'view' | 'edit'>('view');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Controls */}
      <div className="w-full max-w-5xl mb-8 flex flex-col md:flex-row justify-between items-center gap-4 no-print">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-700 rounded-lg shadow-lg">
            <GraduationCap className="text-white w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Exam Portal</h1>
            <p className="text-slate-500 text-sm">Al-Qalam University Katsina</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-slate-200">
          <button 
            onClick={() => setViewMode('view')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${viewMode === 'view' ? 'bg-emerald-100 text-emerald-800 font-medium' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Eye className="w-4 h-4" />
            View Card
          </button>
          <button 
            onClick={() => setViewMode('edit')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${viewMode === 'edit' ? 'bg-emerald-100 text-emerald-800 font-medium' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Edit3 className="w-4 h-4" />
            Edit Info
          </button>
          <div className="w-px h-6 bg-slate-200 mx-1" />
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="w-full max-w-5xl flex flex-col items-center">
        {viewMode === 'view' ? (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ExamCard student={student} courses={courses} />
          </div>
        ) : (
          <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardEditor 
              student={student} 
              setStudent={setStudent} 
              courses={courses} 
              setCourses={setCourses} 
            />
          </div>
        )}
      </main>

      {/* Footer Branding */}
      <footer className="mt-12 text-slate-400 text-sm flex items-center gap-2 no-print">
        <ShieldCheck className="w-4 h-4" />
        <span>Official Digital Document Verification System • Al-Qalam University</span>
      </footer>
    </div>
  );
};

export default App;
