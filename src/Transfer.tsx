import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTransfer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      d='M17.69 13.48a.78.78 0 0 0-.41-.41.7.7 0 0 0-.29-.06H7c-.41 0-.75.34-.75.75s.34.75.75.75h8.19l-1.67 1.67c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.95-2.95c.07-.07.12-.15.16-.24.08-.19.08-.39 0-.57M6.31 10.52c.08.18.22.33.41.41.09.04.18.06.28.06h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8.81l1.67-1.67c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L6.47 9.71c-.07.07-.12.15-.16.24-.08.19-.08.39 0 .57'
    />
  </svg>
);
export default SvgTransfer;
