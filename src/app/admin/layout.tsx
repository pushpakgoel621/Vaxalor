import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Vaxalor",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink text-white">
      {children}
    </div>
  );
}
