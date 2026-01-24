import React from "react";
import Link from "next/link";
import { Icon } from "@/src/ui/base";

export const InstagramProfile: React.FC = () => {
  return (
    <Link className="flex gap-2" href="https://www.instagram.com/bea.biquinis/">
      <Icon name="instagram" size={24} />
      bea.biquinis
    </Link>
  );
};
