
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { StudentData, Course } from '../types';

interface ExamCardProps {
  student: StudentData;
  courses: Course[];
}

const ExamCard: React.FC<ExamCardProps> = ({ student, courses }) => {
  return (
    <div className="relative bg-[#fffdfd] print:bg-white mx-auto overflow-hidden text-black font-sans shadow-2xl print:shadow-none border border-black print:border-none flex flex-col" 
         style={{ width: '20.5cm', height: '26cm' }}>
      
      {/* 1. TOP HEADER SECTION */}
      <div className="p-[0.6cm] pb-3 flex items-start justify-between">
        <div className="w-20">
          <img 
            src="https://i.ibb.co/Q7Z0LwF2/03082020024806-auk852316-removebg-preview.png" 
            alt="AUK Logo" 
            className="w-14 h-14 object-contain"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/auk/64/64"; }}
          />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-[1.25rem] font-bold uppercase tracking-tight text-black leading-tight">Al-Qalam University Katsina</h1>
          <h2 className="text-[0.85rem] font-bold uppercase mt-1 text-black">Examination Card</h2>
          <p className="text-[0.7rem] font-semibold uppercase text-black">{student.semester} {student.session} Academic Session</p>
          <p className="text-[8px] mt-0.5 font-mono text-black">Date & Time: {student.generatedDate}</p>
        </div>
        <div className="w-20"></div>
      </div>

      {/* HORIZONTAL LINE (TOP) */}
      <div className="border-t border-black w-full"></div>

      {/* 2. MIDDLE CONTENT SECTION */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT COLUMN: Student Info + Table */}
        <div className="flex-[1.25] flex flex-col p-[0.6cm] pr-4">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 space-y-1.5">
              <InfoRow label="ADM. NO" value={student.admNo} />
              <InfoRow label="NAME" value={student.name} />
              <InfoRow label="PROGRAMME" value={student.programme} />
              <InfoRow label="LEVEL" value={student.level} />
              <InfoRow label="PHONE NUMBER" value={student.phone} />
            </div>
            {/* Student Photo */}
            <div className="w-[3.2cm] h-[3.8cm] border border-black bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={student.photoUrl} 
                alt="Student" 
                className="w-full h-full object-cover grayscale contrast-[1.1]" 
              />
            </div>
          </div>

          {/* Courses Table */}
          <div className="border border-black overflow-hidden flex-1">
            <table className="w-full text-left text-[8.5px] border-collapse text-black">
              <thead className="border-b border-black">
                <tr className="h-7 bg-slate-50">
                  <th className="p-1 border-r border-black w-5 text-center font-bold">#</th>
                  <th className="p-1 border-r border-black w-14 font-bold">Code</th>
                  <th className="p-1 border-r border-black font-bold">Title</th>
                  <th className="p-1 border-r border-black w-7 text-center font-bold">Unit</th>
                  <th className="p-1 w-20 text-center font-bold leading-none text-[7px]">Invigilator Sign & Date</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, idx) => (
                  <tr key={course.id} className="border-b border-black h-[1cm] text-black">
                    <td className="px-1 border-r border-black text-center font-bold">{idx + 1}</td>
                    <td className="px-1 border-r border-black font-bold">{course.code}</td>
                    <td className="px-1 border-r border-black uppercase font-bold text-[7px] leading-tight">{course.title}</td>
                    <td className="px-1 border-r border-black text-center font-bold">{course.unit}</td>
                    <td className="px-1"></td>
                  </tr>
                ))}
                {/* Pad out the table to fill space */}
                {Array.from({ length: Math.max(0, 10 - courses.length) }).map((_, i) => (
                  <tr key={`empty-${i}`} className="border-b border-black h-[1cm]">
                    <td className="p-1 border-r border-black"></td>
                    <td className="p-1 border-r border-black"></td>
                    <td className="p-1 border-r border-black"></td>
                    <td className="p-1 border-r border-black"></td>
                    <td className="p-1"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* VERTICAL LINE */}
        <div className="border-l border-black h-full"></div>

        {/* RIGHT COLUMN: Rules + Signatures */}
        <div className="flex-1 p-[0.6cm] pl-4 flex flex-col">
          <div className="border-b border-black mb-3 text-center">
            <h3 className="text-[0.95rem] font-bold uppercase tracking-[0.1em] py-1">Examination Rules</h3>
          </div>
          
          <div className="text-[8px] leading-[1.3] space-y-1.5 text-black font-medium text-justify">
            <p>1. Candidates should be in the vicinity of the Examination Hall at least 30 minutes before the commencement of examination.</p>
            <p>2. No candidate will be allowed into the Examination Hall without a valid Examination Card and University Identity Card.</p>
            <p>3. Candidates are NOT allowed to write anything on Examination Card.</p>
            <div className="pl-0">
              <p>4. No candidate will be permitted to;</p>
              <p className="pl-3">i. Enter Examination Hall 45 minutes after commencement of the Examination.</p>
              <p className="pl-3">ii. Leave the Examination Hall without having spent at least an hour into the Examination.</p>
            </div>
            <p>5. Candidates are NOT permitted to give or receive assistance from fellow candidates on any matter related to the Examination.</p>
            <p>6. Candidates are NOT allowed to come into the examination hall with lecture notes, textbooks, mobile phones, or anything incriminating.</p>
            <p>7. Candidate who wishes to attract the attention of the invigilator shall do so by raising his/her hand only.</p>
            <p>8. Candidates MUST personally hand in their scripts to an invigilator before leaving Examination Hall.</p>
            <p>9. Candidates MUST ensure that they duly sign the attendance register by providing their Name, Admission Number, Booklet Number and Signature.</p>
            <p>10. Violation of any examination rule is liable to disciplinary action.</p>

            <div className="pt-6 space-y-10">
              <p className="italic text-[9px] font-bold">I hereby agree to abide by the rules above;</p>
              
              <div className="flex items-end">
                <span className="text-[8px] mr-2 uppercase font-bold w-28 flex-shrink-0">Student's Signature</span>
                <div className="flex-1 border-b border-black h-4"></div>
              </div>
              
              <div className="flex items-end">
                <span className="text-[8px] mr-2 uppercase font-bold w-28 flex-shrink-0 leading-tight">Level Coordinator's Sign & Date</span>
                <div className="flex-1 border-b border-black h-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL LINE (BOTTOM) */}
      <div className="border-t border-black w-full"></div>

      {/* 3. FOOTER SECTION: Stamp and QR */}
      <div className="h-[3.8cm] p-[0.4cm] flex items-center justify-between relative bg-white">
        
        {/* Stamp Area */}
        <div className="relative w-28 h-28 ml-4">
          <div className="absolute top-0 left-0 w-full h-full border border-blue-600/20 rounded-full flex items-center justify-center rotate-[-12deg]">
             <div className="text-center text-blue-700/30 font-bold uppercase text-[6.5px]">
               <p>Al-Qalam University</p>
               <div className="h-px bg-blue-700/20 w-3/4 mx-auto my-0.5"></div>
               <p className="text-[5.5px]">Computer Science Dept</p>
               <p className="mt-1">Date: ................</p>
             </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none">
             <span className="text-blue-500/20 font-serif italic text-2xl font-bold uppercase tracking-widest">STAMP</span>
          </div>
        </div>

        {/* QR CODE - Contained inside the line-defined footer */}
        <div className="flex flex-col items-center">
          <div className="p-1 border border-black bg-white shadow-sm">
            <QRCodeSVG 
              value={`AUK-EXAM-${student.admNo}-${student.session}`} 
              size={75} 
              level="H"
              fgColor="#000000"
            />
          </div>
          <p className="text-[7px] mt-1 font-bold font-mono text-black uppercase tracking-[0.1em]">Verification Scan</p>
        </div>

        {/* Right side spacer */}
        <div className="w-28 flex justify-end items-end mr-4">
           <div className="w-6 h-6 opacity-10 border-r border-b border-black" />
        </div>
        
        {/* Final footer text */}
        <div className="absolute bottom-1.5 left-0 right-0 text-center">
          <p className="text-[7px] text-slate-400 font-bold tracking-[0.3em] uppercase">Valid for examination purpose only</p>
        </div>
      </div>
    </div>
  );
};

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-end mb-0.5">
    <span className="text-[8px] font-bold uppercase w-24 flex-shrink-0 text-black leading-none pb-0.5">{label}:</span>
    <span className="text-[10px] font-bold uppercase border-b border-black flex-1 ml-1 pb-0.5 text-black truncate">{value}</span>
  </div>
);

export default ExamCard;
