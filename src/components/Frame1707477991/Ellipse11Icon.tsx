import { memo, SVGProps } from 'react';

const Ellipse11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8.18395} cy={8.45885} r={8.18981} fill='white' stroke='#FEBF00' strokeWidth={4} />
  </svg>
);

const Memo = memo(Ellipse11Icon);
export { Memo as Ellipse11Icon };
