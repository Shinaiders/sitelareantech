import { LucideIcon } from "lucide-react";

export interface IServiceItemsProps {
  Icon: LucideIcon;
  colorIcon: string;
  title: string;
  description: string;
  isCard?: boolean;
}

export default function ServiceItems({
  Icon,
  colorIcon,
  title,
  description,
  isCard,
}: IServiceItemsProps) {
  if (isCard) {
    return (
      <div className="flex flex-col justify-end gap-5 bg-white rounded-3xl shadow-lg shadow-black/50 p-5 relative h-72">
        <Icon
          className={`${colorIcon} absolute top-5 left-5`}
          size={40}
          strokeWidth={1.5}
        />
        <h1 className="text-2xl text-gray-700 font-epilogue max-w-[200px] mt-5">
          {title}
        </h1>
        <p className="text-gray-700 max-w-[300px]">{description}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start gap-5">
      <span>
        <Icon className={colorIcon} size={40} strokeWidth={1.5} />
      </span>
      <h1 className="text-2xl text-gray-700 font-epilogue max-w-[300px]">
        {title}
      </h1>
      <p className="text-gray-700 max-w-[300px]">{description}</p>
    </div>
  );
}
