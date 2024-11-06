import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

type Props = HTMLAttributes<HTMLDivElement>;

export const Example: FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={cn("", className)} {...rest}>
      Example
    </div>
  );
};
