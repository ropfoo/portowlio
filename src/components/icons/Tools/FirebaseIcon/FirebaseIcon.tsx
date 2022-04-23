export const FirebaseIcon: React.FC<{ color?: string }> = ({
    color = '#08080A',
}) => (
    <svg
        width='12'
        height='17'
        viewBox='0 0 12 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M12 13.7162L10.4442 3.80021C10.4132 3.61675 10.26 3.47933 10.0744 3.47933C9.97129 3.47933 9.87812 3.52183 9.80965 3.59125L0 13.7162L5.42824 16.8527C5.58565 16.9455 5.77482 17 5.976 17C6.17647 17 6.36494 16.9455 6.52729 16.8505L12 13.7162ZM2.73176 0.202583C2.66824 0.0821667 2.54471 0 2.40141 0C2.21435 0 2.05906 0.140958 2.03082 0.326542L0.397412 11.1017L4.48941 3.58417L2.73247 0.204708L2.73176 0.202583ZM7.58894 5.06317L6.33177 2.59675C6.26753 2.4735 6.14329 2.39133 6 2.39133C5.85671 2.39133 5.73247 2.4735 5.66894 2.59463L5.66824 2.59675L0.148235 12.7387L7.58894 5.06317Z'
            fill={color}
        />
    </svg>
);
