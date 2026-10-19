import type { ReactNode } from 'react';
import './SectionHeading.css';

interface Props {
  id: string;
  children: ReactNode;
}

export default function SectionHeading({ id, children }: Props) {
  return (
    <h2 id={id} className="section-heading">
      <span className="accent-underline">{children}</span>
    </h2>
  );
}
