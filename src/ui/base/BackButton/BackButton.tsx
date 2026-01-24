"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/src/ui/base/Icon";

export interface BackButtonProps {
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ className = "" }) => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className={`hover:opacity-70 transition-opacity ${className}`}
    >
      <Icon name="arrow-left" size={24} />
    </button>
  );
};
