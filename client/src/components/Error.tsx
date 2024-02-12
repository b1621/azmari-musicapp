import { ReactNode } from "react";

interface ErrorProps {
  children: ReactNode;
}

const Error = ({ children }: ErrorProps) => {
  return <div>{children}</div>;
};

export default Error;
