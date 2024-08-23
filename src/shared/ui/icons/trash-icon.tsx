import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const TrashIcon = (props: Props) => (
  <svg
    width="53"
    height="55"
    viewBox="0 0 53 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="0.5" y="0.5" width="52" height="54" rx="26" fill="#FEF3F2" />
    <rect x="7.5" y="7.5" width="38" height="40" rx="19" fill="#FEE4E2" />
    <path
      d="M30.5 21.5V20.7C30.5 19.5799 30.5 19.0198 30.282 18.592C30.0903 18.2157 29.7843 17.9097 29.408 17.718C28.9802 17.5 28.4201 17.5 27.3 17.5H25.7C24.5799 17.5 24.0198 17.5 23.592 17.718C23.2157 17.9097 22.9097 18.2157 22.718 18.592C22.5 19.0198 22.5 19.5799 22.5 20.7V21.5M24.5 27V32M28.5 27V32M17.5 21.5H35.5M33.5 21.5V32.7C33.5 34.3802 33.5 35.2202 33.173 35.862C32.8854 36.4265 32.4265 36.8854 31.862 37.173C31.2202 37.5 30.3802 37.5 28.7 37.5H24.3C22.6198 37.5 21.7798 37.5 21.138 37.173C20.5735 36.8854 20.1146 36.4265 19.827 35.862C19.5 35.2202 19.5 34.3802 19.5 32.7V21.5"
      stroke="#D92D20"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
