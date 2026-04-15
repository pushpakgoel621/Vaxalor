"use client";

import { use } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { BlogEditor } from "@/components/admin/BlogEditor";

export default function EditBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return <AdminShell><BlogEditor slug={slug} /></AdminShell>;
}
