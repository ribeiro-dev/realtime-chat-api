import { Spin } from "./styles";

interface SpinnerProps {
  size?: number;
  color?: string;
}

export function Spinner({ size, color }: SpinnerProps) {
  return (
    <Spin
      className="spin"
      viewBox="0 0 50 50"
      role="status"
      aria-label="Loading"
      width={size ?? 40}
      height={size ?? 40}
    >
      <circle
        className="path"
        stroke={color ?? "#fff"}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </Spin>
  );
}
