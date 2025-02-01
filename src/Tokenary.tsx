import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTokenary = (props: SVGProps<SVGSVGElement>) => (
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
      d='M2.88 12.004c0-5.029 4.091-9.12 9.12-9.12v18.24c-5.029 0-9.12-4.092-9.12-9.12'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12 2.884v18.24c5.029 0 9.12-4.092 9.12-9.12 0-5.029-4.091-9.12-9.12-9.12'
      clipRule='evenodd'
      opacity={0.4}
    />
  </svg>
);
export default SvgTokenary;
