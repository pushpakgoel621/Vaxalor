"use client";

import { AdminSidebar } from "./AdminSidebar";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-[240px] p-8 max-w-[1100px]">
        {children}
      </main>
    </div>
  );
}
