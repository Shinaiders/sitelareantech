import { LucideIcon } from "lucide-react";

export interface IServiceItemsProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceItems({
  Icon,
  title,
  description,
}: IServiceItemsProps) {
  return (
    <div className="flex flex-col justify-start gap-5">
      <span>
        <Icon className="text-brand" size={40} strokeWidth={1.5} />
      </span>
      <h1 className="text-2xl text-gray-700 font-epilogue max-w-[300px]">
        {title}
      </h1>
      <p className="text-gray-700 max-w-[300px]">{description}</p>
    </div>
  );
}
