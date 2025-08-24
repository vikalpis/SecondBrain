import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { BACKEND_URL } from "../component/ui/config";

export function useContent() {
  const [contents, setContents] = useState<any[]>([]);
  const [currentType, setCurrentType] = useState<string>(""); 
  const abortRef = useRef<AbortController | null>(null);

  const refresh = useCallback((type?: string) => {
    const effectiveType = (type ?? currentType) || "";
    let url = `${BACKEND_URL}/api/v1/content`;
    if (effectiveType) url += `/${encodeURIComponent(effectiveType)}`;

    // cancel any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    axios
      .get(url, {
        headers: { token: localStorage.getItem("token") || "" },
        signal: controller.signal as any, // axios v1 supports AbortController
      })
      .then((res) => setContents(res.data?.content ?? []))
      .catch((err) => {
        // ignore canceled requests; log real errors 
        if (err?.code === "ERR_CANCELED" || err?.name === "CanceledError") return;
        console.error("Error fetching content:", err);
      });
  }, [currentType]);

  // initial + keep polling using the *current* type
  useEffect(() => {
    refresh();
    // const id = setInterval(() => refresh(), 10_000);
    // return () => {
    //   clearInterval(id);
    //   abortRef.current?.abort();
    // };
  }, [refresh]);

  // if currentType changes (e.g., from Sidebar), fetch that type
  useEffect(() => {
    refresh(currentType);
  }, [currentType, refresh]);

  return {
    contents,
    setContents,
    refresh,                 // still available if you ever want to force refresh
    setType: setCurrentType, // call this from Sidebar clicks
    currentType,
  };
}
