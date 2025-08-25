import { useEffect, useState } from "react";
import { BACKEND_URL } from "../component/ui/config";
import axios from "axios";

export function useShare(hash?: string) {
  const [shareContent, setShareContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async (hash: string) => {
    try {
      setLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/v1/content/brain/${hash}`);
      setShareContent(res.data.content); // or res.data, depends on your backend
    } catch (err: any) {
      setError(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hash) refresh(hash);
  }, [hash]);

  return { shareContent, loading, error };
}
