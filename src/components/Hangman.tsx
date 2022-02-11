import { FC } from "react";

interface IProps {
  win: boolean;
  attemps: number;
}

const Hangman: FC<IProps> = ({ win, attemps }) => {
  return (
    <svg width="200px"  version="1.1" viewBox="0 0 45.731 69.846">
      <g transform="translate(-8.5071 -4.3935)">
        <g fill="none">
          <g stroke="#000">
            <path d="m8.7017 72.337h45.411" strokeWidth="1.7274" />
            <path d="m11.057 5.4458 0.02795 66.314" strokeWidth="1.5253" />
            <path d="m8.7324 6.005h18.89" strokeWidth="1.1141" />
            <path d="m26.887 5.4384 0.11885 12.471" strokeWidth="1.3639" />
          </g>
          <g stroke="#aaa">
            <ellipse
              className={`head ${attemps > 0 ? "color-black" : ""}`}
              cx="26.946"
              cy="22.738"
              rx="5.1633"
              ry="4.8825"
              strokeWidth=".7"
            />
            <g>
              <path
                className={`body ${attemps > 1 ? "color-black" : ""}`}
                d="m26.977 27.603v17.721"
                strokeWidth=".76665"
              />
              <g strokeWidth=".65108">
                <path
                  className={`ll ${attemps > 2 ? "color-black" : ""}`}
                  d="m26.977 45.324-5.6069 7.5627"
                />
                <path
                  className={`rl ${attemps > 3 ? "color-black" : ""}`}
                  d="m32.809 52.715-5.8318-7.3907"
                />
                <path
                  className={`ra ${attemps > 4 ? "color-black" : ""}`}
                  d="m31.884 39.476-4.7688-8.1173"
                />
                <path
                  className={`la ${attemps > 5 ? "color-black" : ""}`}
                  d="m22.26 39.425 4.8548-8.0662"
                />
              </g>
            </g>
          </g>
        </g>
        <g
          className={`loser-face ${attemps > 5 ? "show" : ""}`}
          display="none"
          transform="matrix(.46045 0 0 .46045 -6.9276 -7.4706)"
          fill="none"
          stroke="#000"
          strokeWidth=".26458px"
        >
          <path d="m68.048 61.398 2.4568 2.6458" />
          <path d="m70.556 61.424-2.5124 2.5931" />
          <path d="m76.186 61.386 2.4568 2.6458" />
          <path d="m78.694 61.412-2.5124 2.5931" />
          <path d="m69.134 70.504c3.0523-2.449 5.9128-2.4528 8.5871-0.08268" />
        </g>
        <g transform="translate(31.583 41.157)" stroke="#000">
          <g
            className={`happy ${win ? "show" : ""}`}
            transform="matrix(.46045 0 0 .46045 -24.16 -29.613)"
            fill="none"
            stroke="#000"
            display="none"
          >
            <g>
              <ellipse
                transform="translate(-31.166 -41.296)"
                cx="104.73"
                cy="106.9"
                rx="11.214"
                ry="10.604"
                strokeWidth="1.5202"
              />
              <g>
                <path
                  transform="translate(-31.166 -41.296)"
                  d="m104.8 117.47v38.487"
                  strokeWidth="1.665"
                />
                <g strokeWidth="1.414">
                  <path
                    transform="translate(-31.166 -41.296)"
                    d="m104.8 155.95-12.177 16.424"
                  />
                  <path
                    transform="translate(-31.166 -41.296)"
                    d="m117.46 172.01-12.665-16.051"
                  />
                  <path
                    transform="translate(-31.166 -41.296)"
                    d="m105.23 133.6-10.357-17.629"
                  />
                  <path
                    transform="translate(-31.166 -41.296)"
                    d="m105.23 133.6 10.544-17.518"
                  />
                </g>
              </g>
              <path
                d="m75.929 62.704 0.18156-0.03307 0.07569-0.16832 0.08756 0.16246 0.18347 0.01997-0.12745 0.13347 0.0377 0.18066-0.16632-0.07997-0.16017 0.09168 0.02466-0.1829z"
                strokeWidth="1.1425"
              />
            </g>
            <path
              d="m77.728 68.633c-3.0558 2.4447-5.9163 2.4445-8.5873 0.07057"
              strokeWidth=".26458px"
            />
            <path
              d="m69.742 62.718 0.18156-0.03307 0.07569-0.16832 0.08756 0.16246 0.18347 0.01997-0.12745 0.13347 0.0377 0.18066-0.16633-0.07997-0.16017 0.09168 0.02466-0.1829z"
              strokeWidth="1.1425"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Hangman;
