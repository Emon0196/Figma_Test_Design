import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M24 0.75H4C1.93 0.7525 0.2525 2.43 0.25 4.5V19.5C0.2525 21.57 1.93 23.2475 4 23.25H24C26.07 23.2475 27.7475 21.57 27.75 19.5V4.5C27.7475 2.43 26.07 0.7525 24 0.75ZM4 3.25H24C24.485 3.25375 24.9025 3.535 25.1037 3.94125L25.1075 3.94875L14 11.7238L2.8925 3.94875C3.0975 3.53375 3.515 3.25375 4 3.25ZM24 20.75H4C3.31 20.7487 2.75125 20.19 2.75 19.5V6.90125L13.2838 14.275C13.4838 14.4162 13.7325 14.5013 14 14.5013C14.2675 14.5013 14.5163 14.4162 14.72 14.2725L14.7162 14.275L25.25 6.90125V19.5C25.2487 20.19 24.69 20.7487 24 20.75Z'
      fill='#FEBF00'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
