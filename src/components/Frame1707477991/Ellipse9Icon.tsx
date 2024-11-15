import { memo, SVGProps } from 'react';

const Ellipse9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 95 95' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M94.2081 47.104C94.2081 73.1189 73.1189 94.2081 47.104 94.2081C21.0892 94.2081 0 73.1189 0 47.104C0 21.0892 21.0892 0 47.104 0C73.1189 0 94.2081 21.0892 94.2081 47.104ZM4.71041 47.104C4.71041 70.5174 23.6907 89.4977 47.104 89.4977C70.5174 89.4977 89.4977 70.5174 89.4977 47.104C89.4977 23.6907 70.5174 4.71041 47.104 4.71041C23.6907 4.71041 4.71041 23.6907 4.71041 47.104Z'
      fill='#F1F1F1'
    />
  </svg>
);

const Memo = memo(Ellipse9Icon);
export { Memo as Ellipse9Icon };
