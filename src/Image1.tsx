import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImage1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M5.88 15.809c1.318-1.09 2.71-.503 3.827-.033.646.272 1.313.553 1.932.553.59 0 1.298-.998 1.924-1.878.89-1.254 1.81-2.55 3.2-2.55 1.47 0 2.81.863 3.856 1.763.191.164.495.032.495-.22V7.997c.006-1.572-.514-2.962-1.463-3.914-.907-.912-2.151-1.392-3.598-1.392h-8.1c-3.031 0-5.067 2.132-5.067 5.304v7.626c0 .92.18 1.746.501 2.462.087.194.35.209.475.036a17.3 17.3 0 0 1 2.019-2.311'
      clipRule='evenodd'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      d='M9.084 6.54a2.285 2.285 0 0 1 2.28 2.278v.002a2.284 2.284 0 0 1-2.28 2.282 2.283 2.283 0 0 1-2.28-2.282 2.283 2.283 0 0 1 2.28-2.28M14.737 15.283c.646-.91 1.38-1.943 2.028-1.943 1.65 0 3.03 1.437 4.12 2.571l.1.104c.057.06.086.14.079.221-.25 2.824-2.19 4.69-5.017 4.69H7.953c-1.29 0-2.388-.401-3.235-1.093a.273.273 0 0 1-.05-.365 15.8 15.8 0 0 1 2.17-2.584c.546-.452 1.123-.281 2.31.22.741.311 1.58.664 2.491.664 1.333 0 2.23-1.263 3.097-2.484'
    />
  </svg>
);
export default SvgImage1;
