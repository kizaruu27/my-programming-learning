"use client";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function Wrapper({ children, title }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-3">
      <h1 className="text-4xl">{title}</h1>
      {children}
    </div>
  );
}
