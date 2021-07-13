import React from "react";
import { Button } from "bumbag";
import { useHistory } from "react-router-dom";

type NavButtonProps = {
  to: string;
  label?: string;
  variant?: string;
};

const NavButton: React.FC<NavButtonProps> = ({ to, label, variant }) => {
  const history = useHistory();

  return (
    <Button
      onClick={() => {
        history.push(to);
      }}
      variant={variant !== undefined ? variant : "ghost"}
    >
      {label}
    </Button>
  );
};

export default NavButton;
