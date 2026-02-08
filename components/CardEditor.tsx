
import React from 'react';
import { Plus, Trash2, User, BookOpen } from 'lucide-react';
import { StudentData, Course } from '../types';

interface CardEditorProps {
  student: StudentData;
  setStudent: React.Dispatch<React.SetStateAction<StudentData>>;
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

const CardEditor: React.FC<CardEditorProps> = ({ student, setStudent, courses, setCourses }) => {
  const updateStudent = (field: keyof StudentData, value: string) => {
    setStudent(prev => ({ ...prev, [field]: value }));
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const removeCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  const addCourse = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setCourses(prev => [...prev, { id: newId, code: 'NEW000', title: 'New Course', unit: 3 }]);
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Student Details Section */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-6 text-emerald-800 border-b pb-4">
          <User className="w-5 h-5" />
          <h2 className="text-lg font-bold">Student Profile Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputGroup label="Full Name" value={student.name} onChange={(v) => updateStudent('name', v)} />
          <InputGroup label="Admission Number" value={student.admNo} onChange={(v) => updateStudent('admNo', v)} />
          <InputGroup label="Programme" value={student.programme} onChange={(v) => updateStudent('programme', v)} />
          <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Level" value={student.level} onChange={(v) => updateStudent('level', v)} />
            <InputGroup label="Phone" value={student.phone} onChange={(v) => updateStudent('phone', v)} />
          </div>
          <InputGroup label="Session" value={student.session} onChange={(v) => updateStudent('session', v)} />
          <InputGroup label="Semester" value={student.semester} onChange={(v) => updateStudent('semester', v)} />
          <InputGroup label="Photo URL" value={student.photoUrl} onChange={(v) => updateStudent('photoUrl', v)} />
        </div>
      </section>

      {/* Course List Section */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-6 border-b pb-4">
          <div className="flex items-center gap-2 text-emerald-800">
            <BookOpen className="w-5 h-5" />
            <h2 className="text-lg font-bold">Course Registration</h2>
          </div>
          <button 
            onClick={addCourse}
            className="flex items-center gap-1 px-3 py-1.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Add Course
          </button>
        </div>

        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 items-end">
              <div className="flex-1 w-full grid grid-cols-12 gap-3">
                <div className="col-span-3">
                  <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Code</label>
                  <input 
                    value={course.code} 
                    onChange={(e) => updateCourse(course.id, 'code', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-bold"
                  />
                </div>
                <div className="col-span-7">
                  <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Course Title</label>
                  <input 
                    value={course.title} 
                    onChange={(e) => updateCourse(course.id, 'title', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Units</label>
                  <input 
                    type="number"
                    value={course.unit} 
                    onChange={(e) => updateCourse(course.id, 'unit', parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm text-center"
                  />
                </div>
              </div>
              <button 
                onClick={() => removeCourse(course.id)}
                className="p-2.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          {courses.length === 0 && (
            <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
              <p>No courses added. Click "Add Course" to start.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const InputGroup: React.FC<{ label: string; value: string; onChange: (v: string) => void }> = ({ label, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
    <input 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 outline-none transition-all font-medium text-slate-700"
    />
  </div>
);

export default CardEditor;
