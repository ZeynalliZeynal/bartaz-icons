import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSetting1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M10.393 21.537a3.47 3.47 0 0 0 3.465 0l5.66-3.268a3.48 3.48 0 0 0 1.734-3.001V8.73a3.47 3.47 0 0 0-1.734-3l-5.66-3.268a3.48 3.48 0 0 0-3.466 0L4.733 5.73A3.48 3.48 0 0 0 3 8.73v6.538c0 1.233.664 2.383 1.733 3.001z'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12.125 15.17a3.169 3.169 0 1 0 0-6.338 3.169 3.169 0 0 0 0 6.337'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSetting1;
