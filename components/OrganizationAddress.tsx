import { organization } from '@/lib/siteContent';

type OrganizationAddressProps = {
  className?: string;
};

export default function OrganizationAddress({ className = '' }: OrganizationAddressProps) {
  return (
    <span className={`inline-block whitespace-nowrap leading-snug ${className}`.trim()}>
      {organization.address}
    </span>
  );
}
