import { useEffect } from "react";

declare global {
  interface Window {
    twttr?: any;
  }
}

export function TweetEmbed({ link }: { link: string }) {
  useEffect(() => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load();
    }
  }, [link]);

  // Normalize x.com → twitter.com
  const normalized = link.replace("x.com", "twitter.com");

  return (
    <blockquote className="twitter-tweet">
      <a href={normalized}></a>
    </blockquote>
  );
}
