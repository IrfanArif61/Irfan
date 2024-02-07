"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bf757883-3890-44b4-8b66-3be41adcee3b");
  }, []);

  return null;
};
