"use client";

import useFadeInOnScroll from "./hoooks/UseFadeinOnScroll";
import useSmoothScroll from "./hoooks/UseSmoothScroll";
import { useEffect } from "react";

export default function Hooks() {
  useSmoothScroll(); // enables smooth anchor scrolling
  useFadeInOnScroll(); // activates fade-in animations
  return null;
}

