import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBookmarkCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M14.957 3c2.52 0 4.27 1.024 4.27 3.586l.005 13.526a.884.884 0 0 1-1.318.77l-5.888-3.326-5.943 3.331a.882.882 0 0 1-1.315-.77V6.414C4.768 3.956 6.598 3 9.04 3z'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m8.896 10.597 2.069 2.067 4.136-4.135'
    />
  </svg>
);
export default SvgBookmarkCheck;
