import {
  IconCircleDashedCheck,
  IconHourglassHigh,
  IconUserScan,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetricsCard from "./MetricsCard";

function DisplayInfo() {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState({
    totalFolders: 0,
    aiPersonalizedTreatment: 0,
    totalScreenings: 0,
    completedScreenings: 0,
    pendingScreenings: 0,
    overDueScreenings: 0,
  });

  const metricsData = [
    {
      title: "Specialist Appointments Pending",
      subtitle: "View",
      value: metrics.pendingScreenings,
      icon: IconHourglassHigh,
      onclick: () => navigate("/appointments/pending"),
    },
    {
      title: "Treatment Progress Update",
      subtitle: "View",
      value: `${metrics.completedScreenings} of ${metrics.totalScreenings}`,
      icon: IconCircleDashedCheck,
      onclick: () => navigate("/appointments/progress"),
    },
    {
      title: "Total Folders",
      subtitle: "View",
      value: metrics.totalFolders,
      icon: IconCircleDashedCheck,
      onclick: () => navigate("/folders"),
    },
    {
      title: "Total Screenings",
      subtitle: "View",
      value: metrics.totalScreenings,
      icon: IconUserScan,
      onclick: () => navigate("/screenings"),
    },
    {
      title: "Completed Screenings",
      subtitle: "View",
      value: metrics.completedScreenings,
      icon: IconUserScan,
      onclick: () => navigate("/screenings/completed"),
    },
    {
      title: "Pending Screenings",
      subtitle: "View",
      value: metrics.pendingScreenings,
      icon: IconUserScan,
      onclick: () => navigate("/screenings/pending"),
    },
    {
      title: "Overdue Screenings",
      subtitle: "View",
      value: metrics.overDueScreenings,
      icon: IconUserScan,
      onclick: () => navigate("/screenings/overdue"),
    },
  ];

  return (
    <div className="flex flex-wrap gap-6">
      <div className="lg: mt-7 grid w-full grid-cols-1 grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6">
        {metricsData.slice(0, 2).map((metric) => {
          return <MetricsCard key={metric.title} {...metric} />;
        })}
      </div>

      <div className="lg: mt-7 grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {metricsData.slice(2).map((metric) => {
          return <MetricsCard key={metric.title} {...metric} />;
        })}
      </div>
    </div>
  );
}

export default DisplayInfo;
