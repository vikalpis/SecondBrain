import { useParams } from "react-router-dom";
import { Card } from "../component/ui/Card";
import { useShare } from "../hooks/useShare";

export default function SharePage() {
  const { hash } = useParams<{ hash: string }>();
  const { shareContent, loading, error } = useShare(hash);

  if (!hash) return <div>Invalid Link</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!shareContent) return <div>No content found</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Shared Content</h2>
      <div className="mt-4 border p-4 rounded-lg shadow">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
