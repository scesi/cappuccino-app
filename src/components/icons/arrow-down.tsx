import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export function ArrowDown(props: Props) {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.43 0.292969L6.82052 4.58597L2.21105 0.292969L0.69281 1.70697L6.82052 7.41397L12.9482 1.70697L11.43 0.292969Z"
        fill="black"
      />
    </svg>
  )
}
