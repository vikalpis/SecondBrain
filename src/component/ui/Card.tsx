import { ShareIcon } from "../../icons/ShareIcon";

interface Cradprops {
  title: string;
  link: string;
  type: "Twitter" | "Youtube"| "Document";
}

function getYoutubeEmbedUrl(url: string) {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
}

export function Card({ title, link, type }: Cradprops) {
  return (
    <div>
      <div className="bg-white border border-gray-200 max-w-86 rounded-md min-h-40 min-w-72 ">
        <div className="flex justify-between">
          <div className="flex items-center p-2">
            <ShareIcon size="md" />
            <div className="pl-2">{title}</div>
          </div>
          <div className="flex items-center text-gray-500">
            <div className="pr-2">
              <a href={link} target="_blank" rel="noreferrer">
                <ShareIcon size="md" />
              </a>
            </div>
            <div className="pr-2">
              <ShareIcon size="md" />
            </div>
          </div>
        </div>
        <div className="p-2">
          {type === "Youtube" && (
            <iframe
              className="w-full p-4 rounded-md"
              src={getYoutubeEmbedUrl(link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "Twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x", "twitter")}></a>
            </blockquote>
          )}

         
        </div>
      </div>
    </div>
  );
}
