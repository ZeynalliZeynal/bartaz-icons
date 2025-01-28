import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStepperStep = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill='#F1F3FA' />
    <path
      fill='currentColor'
      d='M8.674 17v-1.56l2.6-2.678q.767-.794 1.157-1.248.403-.468.546-.78a1.36 1.36 0 0 0 .156-.611q0-.533-.351-.832-.337-.312-.858-.312a1.54 1.54 0 0 0-.95.312q-.415.3-.61.923l-1.755-.572q.155-.754.65-1.313a3.3 3.3 0 0 1 1.196-.858 3.6 3.6 0 0 1 1.469-.312q.962 0 1.69.338t1.13.949q.405.61.404 1.43 0 .52-.182 1.027-.182.494-.56 1.014a10 10 0 0 1-.948 1.105l-2.223 2.288h4.004V17z'
    />
  </svg>
);
export default SvgStepperStep;
