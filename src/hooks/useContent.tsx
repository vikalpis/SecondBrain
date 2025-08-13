import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../component/ui/config";

export function useContent() {
  const [contents, setContents] = useState([]);

  function refresh(type = "") {
    let url = `${BACKEND_URL}/api/v1/content`;
    if (type) {
      url += `${type}`;
    }

    axios
      .get(url, {
        headers: {
          token: localStorage.getItem("token") || ""
        }
      })
      .then((response) => {
        setContents(response.data.content);
      })
      .catch((err) => {
        console.error("Error fetching content:", err);
      });
  }

  useEffect(() => {
    refresh(); // initial fetch
    let interval = setInterval(() => {
      refresh(); // default: fetch all
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { contents, refresh };
}
