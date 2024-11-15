import { memo, SVGProps } from 'react';

const BackgroundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 635 396' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={634.176} height={395.973} rx={28} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(BackgroundIcon);
export { Memo as BackgroundIcon };
