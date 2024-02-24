"use client";
import { usePathname } from "next/navigation";

export default function PathOption() {
  const path = usePathname();
  if (path === "/") {
    return ["", "h-40"];
  }
  return ["hidden", "h-20"];
}
