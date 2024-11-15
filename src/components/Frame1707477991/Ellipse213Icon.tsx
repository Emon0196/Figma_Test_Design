import { memo, SVGProps } from 'react';

const Ellipse213Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={45} cy={45} r={45} fill='white' />
  </svg>
);

const Memo = memo(Ellipse213Icon);
export { Memo as Ellipse213Icon };
