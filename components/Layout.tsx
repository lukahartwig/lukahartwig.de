import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="h-screen bg-rose-800">
        <div className="container mx-auto h-full">{children}</div>
      </div>
    </>
  );
}
