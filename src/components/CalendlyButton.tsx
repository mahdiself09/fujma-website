"use client";

import { useState } from "react";
import { PopupModal } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/mahdiself/hk";

export default function CalendlyButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      <PopupModal
        url={CALENDLY_URL}
        onModalClose={() => setOpen(false)}
        open={open}
        rootElement={typeof document !== "undefined" ? document.body : (undefined as unknown as HTMLElement)}
      />
    </>
  );
}
