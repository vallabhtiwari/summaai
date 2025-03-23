import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Calendar, ChevronLeft, Clock, Plus, TimerIcon } from "lucide-react";

export default function SummaryHeader({
  createdAt,
  time,
}: {
  createdAt: string;
  time: number;
}) {
  return (
    <section className="flex items-center justify-between">
      <div className="w-1/3 flex items-center justify-between">
        <Badge className="bg-white text-rose-600 border border-rose-100 rounded-full">
          <p className="text-lg">AI Summary</p>
        </Badge>
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-rose-600" />
          <p className="text-lg text-muted-foreground">{createdAt}</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="size-5 text-rose-600" />
          <p className="textnlg text-muted-foreground">{time} min read</p>
        </div>
      </div>
      <div>
        <NavLink href="/dashboard" className="shrink-0">
          <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg flex items-center gap-2 transition-transform hover:scale-105 rounded-full">
            <ChevronLeft className="size-5" />
            Back to Dashboard
          </Button>
        </NavLink>
      </div>
    </section>
  );
}
