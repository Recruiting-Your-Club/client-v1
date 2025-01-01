"use client";

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import type { Club } from "@/types/club";

interface ClubButtonProps {
  club: Club;
}
