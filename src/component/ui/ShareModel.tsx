import axios from "axios";
import { useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { BACKEND_URL } from "./config";

export function ShareModel({ openShare, closeShare , contentId}: any) {
  const [shareLink, setShareLink] = useState<string>("");

  async function shareHandler(contentId:string,share: boolean) {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/content/brain/share`,
        {contentId, share },
        {
          headers: {
            token: localStorage.getItem("token") || "",
          },
        }
      );

      // assume backend response: { hash: "abc123" }
      if (res.data?.hash) {
        // 👇 generate frontend link with hash
        const fullLink = `${window.location.origin}/share/${res.data.hash}`;
        setShareLink(fullLink);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCopy() {
    try {
      if (!shareLink) return;
      await navigator.clipboard.writeText(shareLink);
      alert("Link copied to your clipboard");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }

  return (
    <div>
      {openShare && (
        <div className="w-screen h-screen bg-slate-400 opacity-60 fixed top-0 left-0 flex justify-center">
          <div className="flex items-center justify-center ">
            <div className="bg-white rounded-2xl p-2">
              <div
                className="flex justify-end cursor-pointer "
                onClick={closeShare}
              >
                <CrossIcon size="lg" onClick={closeShare} />
              </div>

              <div className="text-2xl ">
                {shareLink
                  ? `Your link: ${shareLink}`
                  : "Click to generate share link"}
              </div>

              <div className="p-2">
                <Button
                  variants="primary"
                  size="sm"
                  text={shareLink ? "Copy" : "Generate link"}
                  fullwidth={true}
                  onClick={async () => {
                    await shareHandler(contentId,true);
                    await handleCopy();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
