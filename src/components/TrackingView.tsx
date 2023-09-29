import React, { useEffect, useState } from "react";
import { InputField } from "./InputField";
import { fetchTrackingData } from "@/api/bringer";
import { Loading } from "./Loading";
import { NotFound } from "./NotFound";
import { Timeline } from "./Timeline";

const TrackingView: React.FC<{ tracking_number: string }> = ({
  tracking_number,
}) => {
  const [trackingNumber, setTrackingNumber] = useState(tracking_number);
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = await fetchTrackingData(trackingNumber);
    setEvent(data);
    setLoading(false);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          BPS Tracking
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Enter your tracking number"
            name="tracking_number"
            type="text"
            required={true}
            className="uppercase block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={trackingNumber}
            onChange={setTrackingNumber}
          />
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Search
          </button>
        </form>
      </div>

      {loading ? <Loading /> : event ? <Timeline data={event}/> : <NotFound />}
    </div>
  );
};

export default TrackingView;
