"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

/** Mounts the homepage scroll-reveal engine. Renders nothing. */
export default function HomeReveal() {
  useScrollReveal();
  return null;
}
