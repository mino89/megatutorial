"use client";
import { Button } from "./button";

type FormButtonProps = {
  children: React.ReactNode;
  pending?: boolean;
};

const FormButton = ({ children, pending }: FormButtonProps) => {
  return (
    <Button type="submit" className="w-full">
      {children} {pending && "...Loading"}
    </Button>
  );
};

export default FormButton;
