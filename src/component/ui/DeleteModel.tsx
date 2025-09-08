import axios from "axios";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { BACKEND_URL } from "./config";

export function DeleteModel({ openDelete, closeDelete, contentId, onDelete }: any) {
  async function DeleteHandler(id: string) {
    if (!id) return;

    try {
      await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          token: localStorage.getItem("token") || ""
        },
        data: { id }   // ✅ sending id in body
      });

      // tell parent to update state
      if (onDelete) onDelete(id);

      // close modal
      closeDelete();
    } catch (err) {
      console.error("Error deleting content", err);
    }
  }

  if (!openDelete) return null;

  return (
    <div className="w-screen h-screen backdrop-blur-sm fixed top-0 left-0 flex justify-center">
      <div className="flex items-center justify-center">
        <div className="bg-[#D0E3F3]/70 rounded-2xl p-4">
          <div className="flex justify-end cursor-pointer" onClick={closeDelete}>
            <CrossIcon size="lg" />
          </div>

          <div className="text-2xl tracking-tighter font-mono">
            Do you really want to delete this brain?
          </div>

          <div className="p-2 flex  gap-8">
            <Button
              variants="primary"
              size="sm"
              text="Delete"
              fullwidth={true}
              onClick={() => DeleteHandler(contentId)}
            />
            <Button
              variants="primary"
              size="sm"
              text="Cancel"
              fullwidth={true}
              onClick={closeDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
