"use client";
import { useMemo } from "react";

import { scaleLinear, scaleOrdinal } from "@visx/scale";

import { formatPercentage } from "@/lib/utils";

import RankingChart from "@/components/charts/ranking";

const TestRankingChart = () => {
  const DATA = useMemo(() => {
    return [
      {
        id: "1",
        label: "One",
        value: 0.05,
        color: "#C8190B",
      },
      {
        id: "2",
        label: "Two",
        value: 0.575,
        color: "#EB7A08",
      },
      {
        id: "3",
        label: "Three",
        value: 0.375,
        color: "#F3C045",
      },
    ];
  }, []);

  // CONFIG
  const KEYS = useMemo(() => {
    return DATA.map((d) => d.id);
  }, [DATA]);

  const TOTAL = useMemo(() => {
    return DATA.reduce((acc, d) => acc + d.value, 0);
  }, [DATA]);

  // SCALES
  const xScale = useMemo(() => {
    return scaleLinear<number>({
      domain: [0, 1],
      range: [0, 100],
      round: true,
    });
  }, []);

  const colorScale = useMemo(() => {
    return scaleOrdinal<string, string>({
      domain: KEYS.map((key) => key.toString()),
      range: DATA.map((d) => d.color),
    });
  }, [DATA, KEYS]);

  return (
    <>
      <RankingChart
        data={DATA}
        xScale={xScale}
        colorScale={colorScale}
        interactive={false}
        format={(d) => `${formatPercentage(d.value / TOTAL)}`}
      />
    </>
  );
};

export default TestRankingChart;
