import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M1.955 6a3.84 3.84 0 0 1 3.84-3.84h6.043A3.84 3.84 0 0 1 15.678 6v11.518a3.84 3.84 0 0 1-3.84 3.84H5.795a3.84 3.84 0 0 1-3.84-3.84z'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      d='m18.034 8.599 3.708 2.483.011.01a.91.91 0 0 1 0 1.337l-.01.01-3.709 2.483a.912.912 0 0 1-1.506-.515l-.003-.017.006-1.717h-5.362a.912.912 0 0 1 0-1.824h5.361l-.013-1.653.001-.01a.912.912 0 0 1 1.516-.587'
    />
  </svg>
);
export default SvgLogout;
