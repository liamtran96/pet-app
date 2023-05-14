"use client";

import { Loader2, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { ButtonHTMLAttributes, FC, useState } from "react";
import Button from "./Button/Button";
import { useNotify } from "@/hooks/useNotify";

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FC<SignOutButtonProps> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);
  const { errorNotify } = useNotify();
  return (
    <Button
      {...props}
      variant="ghost"
      onClick={async () => {
        setIsSigningOut(true);
        try {
          await signOut();
        } catch (error) {
          errorNotify("There was a problem signing out");
        } finally {
          setIsSigningOut(false);
        }
      }}
    >
      {isSigningOut ? <Loader2 className="animate-spin h-4 w-4" /> : <LogOut className="w-4 h-4" />}
    </Button>
  );
};

export default SignOutButton;
