import { MEMBERSHIP_WHATSAPP_PHONE } from '@/lib/membershipWhatsApp';

export const PARTICIPATION_FORM_TITLE = 'Student And Industry Participation Form';

export type StudentRegistrationPayload = {
  fullName: string;
  guardianName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  qualification: string;
  courseInterested: string;
  preferredBatch: string;
  aadharNumber?: string;
  message?: string;
};

function optionalLine(label: string, value?: string) {
  return value?.trim() ? `${label}: ${value.trim()}` : null;
}

export function buildStudentRegistrationMessage(data: StudentRegistrationPayload) {
  return [
    'MSE Chamber — Student And Industry Participation Form',
    '',
    `Student Name: ${data.fullName}`,
    `Father / Guardian Name: ${data.guardianName}`,
    `Date of Birth: ${data.dateOfBirth}`,
    `Gender: ${data.gender}`,
    `Email: ${data.email}`,
    `Mobile / WhatsApp: ${data.phone}`,
    `Address: ${data.address}`,
    `City: ${data.city}`,
    `State: ${data.state}`,
    `Pin Code: ${data.pinCode}`,
    `Qualification: ${data.qualification}`,
    `Course Interested: ${data.courseInterested}`,
    `Preferred Batch: ${data.preferredBatch}`,
    optionalLine('Aadhar Number', data.aadharNumber),
    optionalLine('Additional Message', data.message),
  ]
    .filter(Boolean)
    .join('\n');
}

export function submitStudentRegistration(data: StudentRegistrationPayload) {
  const message = buildStudentRegistrationMessage(data);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${MEMBERSHIP_WHATSAPP_PHONE}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
