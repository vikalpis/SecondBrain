import { useParams } from "react-router-dom";
import { Card } from "../component/ui/Card";
import { useShare } from "../hooks/useShare";

export default function SharePage() {
  const { hash } = useParams<{ hash: string }>();
  const { shareContent, loading, error } = useShare(hash);

  if (!hash) return <div>Invalid Link</div>;
  if (loading) return <div className="cursor-progress flex justify-center items-center h-screen w-full bg-gradient-to-br from-[#D0E3F3] via-[#B8D4F0] to-[#DA82C8] ">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!shareContent) return <div>No content found</div>;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#D0E3F3] via-[#B8D4F0] to-[#DA82C8] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e4229d]/20 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#062A55]/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/15 rounded-full blur-sm animate-bounce"></div>
      </div>
      <h2 className="text-2xl font-bold">Shared Content</h2>
      <div className="mt-4 border p-4 rounded-lg shadow">
      <div className="grid gap-4 ">
  {Array.isArray(shareContent) ? (
    shareContent.map((item: any) => (
      <Card
        key={item._id || item.link}
        _id={item._id}
        title={item.title}
        link={item.link}
        type={item.type}
      />
    ))
  ) : (
    shareContent && (
      <Card
        key={shareContent._id || shareContent.link}
        _id={shareContent._id}
        title={shareContent.title}
        link={shareContent.link}
        type={shareContent.type}
      />
    )
  )}
</div>

      </div>
    </div>
  );
}
