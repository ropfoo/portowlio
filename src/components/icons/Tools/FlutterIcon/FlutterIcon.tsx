export const FlutterIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 40,
  color = '#08080A',
}) => (
  <svg
    width='12'
    height='16'
    viewBox='0 0 12 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.43134 0L0 8.00033L2.28866 10.4671L11.9901 0.00800033H7.43938L7.43134 0ZM7.44 7.38164L3.43732 11.6865L7.43938 16H12L8.00412 11.6878L12 7.38097H7.44062L7.44 7.38164Z'
      fill={color}
    />
  </svg>
);
