import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Trash2 } from "lucide-react";

export const SummaryDetail = ({
  title,
  date,
  content,
  onDelete,
}: {
  title: string;
  date: string;
  content: string;
  onDelete: () => void;
}) => {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative flex flex-col h-full hover:shadow-lg hover:border-rose-600 dark:hover:border-rose-800/40 transition-all duration-300 hover:scale-[1.03] cursor-pointer group">
      <CardHeader className="pb-1 px-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3.5">
            <FileText className="size-7 text-rose-500 flex-shrink-0 group-hover:text-rose-600 transition-colors" />
            <div>
              <CardTitle className="text-xl font-semibold truncate text-gray-800 dark:text-gray-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                {title}
              </CardTitle>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-1">
                {date}
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 p-2 rounded-full transition-all duration-200 flex-shrink-0 hover:scale-110"
            aria-label="Delete summary"
          >
            <Trash2 className="size-5" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col px-2">
        <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed line-clamp-4 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};
