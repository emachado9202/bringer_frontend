import { PasteIcon } from "./PasteIcon";
import { TimelineItem } from "./TimelineItem";

export const Timeline: React.FC<any> = ({ data }) => {
  const { label, parcel_tracking_items, status } = data;

  const handleToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <button
          type="button"
          data-te-ripple-init
          className="mb-2 cursor-pointer flex rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          onClick={() => handleToClipboard(label.tracking_number)}
        >
          {label.tracking_number}&nbsp;
          <PasteIcon />
        </button>
        <button
          type="button"
          data-te-ripple-init
          className="mb-2 cursor-pointer flex rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          onClick={() => handleToClipboard(label.external_tracking_number)}
        >
          {label.external_tracking_number}&nbsp;
          <PasteIcon />
        </button>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <ol className="ml-[170px] mt-8 border-l border-neutral-300 dark:border-neutral-500">
          {parcel_tracking_items.map((item: any, index: number) => (
            <TimelineItem
              key={index}
              date={item.timestamp}
              location={`${item.location ?? `${item.state}, ${item.city}`},${
                item.country.fips
              }`}
              // label={item.tracking_code?.isVisible
              //     ? item.tracking_code.tracking_code_locales[0].description
              //     : ""}
              label={
                item.tracking_code_vendor
                  ? !item.tracking_code_vendor.tracking_code_vendor_locales ||
                    item.tracking_code_vendor.tracking_code.isVisible
                    ? `${item.tracking_code_vendor.tracking_code.tracking_code_locales[0].description}`
                    : `${item.tracking_code_vendor.tracking_code_vendor_locales[0].description}`
                  : item.tracking_code.tracking_code_locales[0].description
              }
              delivered={status === "delivered" && index === 0}
              started={index === parcel_tracking_items.length - 1}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
