"use client";

import { useState, useRef } from "react";

interface MediaUploaderProps {
  onUpload: (url: string, resourceType: string) => void;
  label?: string;
  accept?: string;
}

export function MediaUploader({
  onUpload,
  label = "Upload",
  accept = "image/*,video/*",
}: MediaUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Upload failed");
        return;
      }

      onUpload(data.url, data.resourceType);
    } catch {
      setError("Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="flex-shrink-0">
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleUpload}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="px-4 py-2.5 text-xs text-white border border-ink-200 rounded-input hover:border-signal/40 transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {uploading ? (
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 border border-signal/30 border-t-signal rounded-full animate-spin" />
            Uploading...
          </span>
        ) : (
          label
        )}
      </button>
      {error && <p className="text-red-400 text-[10px] mt-1">{error}</p>}
    </div>
  );
}
