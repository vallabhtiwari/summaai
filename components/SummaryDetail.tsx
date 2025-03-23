import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Link from "next/link";
export const SummaryDetail = ({
  id,
  title,
  createdAt,
  summary,
  onDelete,
}: {
  id: string;
  title: string;
  createdAt: string;
  summary: string;
  onDelete: () => void;
}) => {
  return (
    <Link href={`/summary/${id}`}>
      <Card className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative flex flex-col h-full hover:shadow-lg hover:border-rose-600 dark:hover:border-rose-800/40 transition-all duration-300 hover:scale-[1.03] cursor-pointer group">
        <CardHeader className="pb-1 px-2">
          <div className="flex items-start justify-between w-full">
            <div className="flex items-start gap-3.5">
              <FileText className="size-7 text-rose-500 flex-shrink-0 group-hover:text-rose-600 transition-colors" />
              <div>
                <CardTitle className="text-xl font-semibold truncate text-gray-800 dark:text-gray-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {title}
                </CardTitle>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-1">
                  {createdAt}
                </p>
              </div>
            </div>
            <DeleteButton onConfirm={onDelete} />
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col px-2">
          <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed line-clamp-4 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

const DeleteButton = ({ onConfirm }: { onConfirm: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-gray-600 dark:text-gray-300 hover:text-rose-600 transition-colors">
          <Trash2 className="size-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none">
        <DialogHeader>
          <DialogTitle>Confirm Delete</DialogTitle>
        </DialogHeader>
        <p className="py-4">
          Are you sure you want to delete this summary? This action cannot be
          undone.
        </p>
        <DialogFooter>
          <Button
            variant="ghost"
            className="mr-2 bg-gray-200 hover:bg-gray-300"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="bg-rose-500 hover:bg-rose-600 text-white"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
