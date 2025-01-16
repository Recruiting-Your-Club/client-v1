import { cn } from "@/lib/utils";
import * as React from "react";
import { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarClock } from "lucide-react";
import { formatData } from "@/utils/formatData";
import { Calendar } from "../ui/calendar";

const DatePickerWithRange = ({
  className,
  date,
  setDate,
}: React.HTMLAttributes<HTMLDivElement> & {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}) => {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-pretendard-regular",
              !date && "text-sidebar-foreground"
            )}
          >
            <CalendarClock className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {formatData(date.from)} - {formatData(date.to)}
                </>
              ) : (
                formatData(date.from)
              )
            ) : (
              <span>모집 기간을 선택해주세요</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerWithRange;
