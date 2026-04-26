"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatbotWidget } from "@/components/global/ChatbotWidget";
import { ScrollProgress } from "@/components/global/ScrollProgress";
import { EasterEggs } from "@/components/global/EasterEggs";
import { EntryPopup } from "@/components/global/EntryPopup";
import { SmoothScrollProvider } from "@/components/animation/SmoothScrollProvider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    if (isAdmin) {
      document.body.classList.add("admin-page");
    } else {
      document.body.classList.remove("admin-page");
    }
  }, [isAdmin]);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <ScrollProgress />
      <SmoothScrollProvider>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </SmoothScrollProvider>
      <ChatbotWidget />
      <EasterEggs />
      <EntryPopup />
    </>
  );
}
