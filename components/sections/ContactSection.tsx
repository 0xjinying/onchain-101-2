"use client";

import { useState, useRef, useCallback } from "react";
import type { ContactEntry } from "@/data/types";

type ContactSectionProps = {
  data: ContactEntry[];
};

function getAddress(entry: ContactEntry): string {
  const colonIndex = entry.value.indexOf(": ");
  return colonIndex >= 0 ? entry.value.slice(colonIndex + 2) : entry.value;
}

export function ContactSection({ data }: ContactSectionProps) {
  const [showToast, setShowToast] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback((entry: ContactEntry) => {
    const address = getAddress(entry);
    navigator.clipboard.writeText(address).then(() => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      setShowToast(true);
      toastTimerRef.current = setTimeout(() => {
        setShowToast(false);
        toastTimerRef.current = null;
      }, 3000);
    });
  }, []);

  return (
    <div className="h-full">
      <h3 className="heading-section-sm">Buy Me A Coffee</h3>
      <div className="mt-4 space-y-2">
        {data.map((entry) => (
          <button
            key={entry.type}
            type="button"
            onClick={() => handleCopy(entry)}
            className="block w-full cursor-pointer break-all text-left text-gray-600 hover:text-black"
          >
            {entry.value}
          </button>
        ))}
      </div>

      {showToast && (
        <div
          className="fixed bottom-6 right-6 z-50 rounded-lg bg-white px-4 py-3 text-black shadow-lg"
          role="status"
        >
          复制成功🎉
        </div>
      )}
    </div>
  );
}
