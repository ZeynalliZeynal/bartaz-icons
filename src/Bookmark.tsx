import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d='M4.671 21.094a1.38 1.38 0 0 0 1.657.229l5.697-3.194 5.642 3.187a1.37 1.37 0 0 0 1.052.128 1.386 1.386 0 0 0 1.013-1.332l-.005-13.526c0-2.635-1.694-4.086-4.77-4.086H9.04c-3.033 0-4.772 1.427-4.772 3.915v13.701a1.37 1.37 0 0 0 .403.978'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M13.273 12.85h-2.548a.75.75 0 0 1 0-1.5h2.548a.75.75 0 0 1 0 1.5M14.625 8.906H9.373a.75.75 0 0 1 0-1.5h5.252a.75.75 0 0 1 0 1.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBookmark;
