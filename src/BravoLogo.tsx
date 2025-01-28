import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBravoLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='#17B26A'
      fillRule='evenodd'
      d='m24.003 12-6.001 10.395H5.998L-.004 12 5.998 1.604h12.004zM8.5 5.938 5 12l3.5 6.062h7L19 12l-3.5-6.062z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBravoLogo;
