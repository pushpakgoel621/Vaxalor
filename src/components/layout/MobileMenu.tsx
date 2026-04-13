"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={link.disabled ? "#" : link.href}
                  onClick={link.disabled ? undefined : onClose}
                  className={`text-[28px] font-heading font-semibold transition-colors duration-200 ${
                    link.disabled
                      ? "text-ink-400 pointer-events-none"
                      : isActive
                      ? "text-signal"
                      : "text-ink hover:text-signal"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: NAV_LINKS.length * 0.08,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Button href="/contact" arrow onClick={onClose}>
              Let&apos;s Talk
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
