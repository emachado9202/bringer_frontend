import moment from "moment";

export const TimelineItem: React.FC<any> = ({
  date,
  label,
  location,
  started,
  delivered,
}) => {
  return (
    <li>
      <div className="flex-start flex items-center pt-3">
        <p className="-ml-[170px] text-sm text-neutral-500 dark:text-neutral-300">
          {moment(date).format("DD MMM YYYY, HH:mm")}
        </p>
        <div
          className={` mr-3 rounded-full ${
            delivered
              ? "ml-[8px] h-[18px] w-[18px] bg-green-500"
              : started
              ? "ml-[8px] h-[18px] w-[18px] bg-red-500"
              : "ml-[13px] h-[9px] w-[9px] bg-neutral-300 dark:bg-neutral-500"
          }`}
        ></div>
      </div>
      <div className="mb-6 ml-4 mt-2">
        <h4 className="mb-1.5 text-xl font-semibold">{label}</h4>
        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
          {location}
        </p>
      </div>
    </li>
  );
};
