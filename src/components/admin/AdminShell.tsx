"use client";

import { AdminSidebar } from "./AdminSidebar";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 lg:ml-[240px] pt-16 lg:pt-8 px-4 sm:px-6 lg:px-8 pb-8 max-w-[1100px] w-full">
        {children}
      </main>
    </div>
  );
}
