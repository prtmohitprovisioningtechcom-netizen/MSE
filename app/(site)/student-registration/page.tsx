import StudentRegistrationClient from '@/components/StudentRegistrationClient';
import { PARTICIPATION_FORM_TITLE } from '@/lib/studentRegistrationSubmit';

export const metadata = {
  title: PARTICIPATION_FORM_TITLE,
  description:
    'Student And Industry Participation Form for MSE-CCIA skill development, training and industry programs.',
};

export default function StudentRegistrationPage() {
  return (
    <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      <StudentRegistrationClient />
    </div>
  );
}
