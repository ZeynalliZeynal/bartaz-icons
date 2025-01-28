import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d='M10.675 7.829a.29.29 0 0 1 .404-.064l4.826 3.547a.29.29 0 0 1 .063.4l-4.21 5.837a3.9 3.9 0 0 1-2.122 1.516l-1.59.47h-.009l-.01.002-.542.162a1.41 1.41 0 0 1-1.795-1.344v-.364l-.003-.04c-.006-.06-.006-.112-.006-.172l-.01-1.7a3.94 3.94 0 0 1 .71-2.303z'
      clipRule='evenodd'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m17.892 9.043-.742 1.031a.29.29 0 0 1-.404.064l-4.837-3.549a.285.285 0 0 1-.06-.399l.734-1.016a2.257 2.257 0 0 1 3.149-.5l1.67 1.22a2.245 2.245 0 0 1 .49 3.149'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPencil;
