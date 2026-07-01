export const MEMBERSHIP_WHATSAPP_PHONE = '919258410701';

export type MembershipWhatsAppPayload = {
  type: string;
  price?: string;
  period?: string;
  ownerName: string;
  companyName: string;
  email: string;
  phone: string;
  address: string;
  industryType: string;
  panNumber: string;
  gstNumber?: string;
  udyamNumber?: string;
  website?: string;
  message?: string;
};

function optionalLine(label: string, value?: string) {
  return value?.trim() ? `*${label}:* ${value.trim()}` : null;
}

export function buildMembershipApplicationMessage(data: MembershipWhatsAppPayload) {
  return [
    '*MSE Chamber Membership Application*',
    '',
    `*Membership Tier:* ${data.type}`,
    data.price ? `*Membership Fee:* ${data.price}${data.period ? ` (${data.period})` : ''}` : null,
    `*Owner / Contact Name:* ${data.ownerName}`,
    `*Company / Business Name:* ${data.companyName}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*Business Address:* ${data.address}`,
    `*Industry Sector:* ${data.industryType}`,
    `*PAN Number:* ${data.panNumber}`,
    optionalLine('GST Number', data.gstNumber),
    optionalLine('Udyam Number', data.udyamNumber),
    optionalLine('Website', data.website),
    optionalLine('Business Details', data.message),
  ]
    .filter(Boolean)
    .join('\n');
}

export function openMembershipWhatsApp(data: MembershipWhatsAppPayload) {
  const text = encodeURIComponent(buildMembershipApplicationMessage(data));
  const url = `https://wa.me/${MEMBERSHIP_WHATSAPP_PHONE}?text=${text}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
