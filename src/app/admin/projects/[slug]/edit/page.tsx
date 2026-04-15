"use client";

import { use } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProjectEditor } from "@/components/admin/ProjectEditor";

export default function EditProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return <AdminShell><ProjectEditor slug={slug} /></AdminShell>;
}
