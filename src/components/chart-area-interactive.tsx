"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const description = "Medical image analysis activity chart";

const chartData = [
  {
    date: "2024-04-01",
    breastSegmentation: 45,
    cervixSegmentation: 32,
    brainClassification: 28,
  },
  {
    date: "2024-04-02",
    breastSegmentation: 38,
    cervixSegmentation: 29,
    brainClassification: 35,
  },
  {
    date: "2024-04-03",
    breastSegmentation: 52,
    cervixSegmentation: 41,
    brainClassification: 22,
  },
  {
    date: "2024-04-04",
    breastSegmentation: 61,
    cervixSegmentation: 38,
    brainClassification: 44,
  },
  {
    date: "2024-04-05",
    breastSegmentation: 73,
    cervixSegmentation: 55,
    brainClassification: 39,
  },
  {
    date: "2024-04-06",
    breastSegmentation: 68,
    cervixSegmentation: 48,
    brainClassification: 52,
  },
  {
    date: "2024-04-07",
    breastSegmentation: 49,
    cervixSegmentation: 33,
    brainClassification: 31,
  },
  {
    date: "2024-04-08",
    breastSegmentation: 82,
    cervixSegmentation: 61,
    brainClassification: 47,
  },
  {
    date: "2024-04-09",
    breastSegmentation: 25,
    cervixSegmentation: 18,
    brainClassification: 22,
  },
  {
    date: "2024-04-10",
    breastSegmentation: 56,
    cervixSegmentation: 42,
    brainClassification: 38,
  },
  {
    date: "2024-04-11",
    breastSegmentation: 69,
    cervixSegmentation: 58,
    brainClassification: 49,
  },
  {
    date: "2024-04-12",
    breastSegmentation: 63,
    cervixSegmentation: 39,
    brainClassification: 44,
  },
  {
    date: "2024-04-13",
    breastSegmentation: 74,
    cervixSegmentation: 52,
    brainClassification: 58,
  },
  {
    date: "2024-04-14",
    breastSegmentation: 41,
    cervixSegmentation: 28,
    brainClassification: 35,
  },
  {
    date: "2024-04-15",
    breastSegmentation: 36,
    cervixSegmentation: 24,
    brainClassification: 29,
  },
  {
    date: "2024-04-16",
    breastSegmentation: 42,
    cervixSegmentation: 31,
    brainClassification: 33,
  },
  {
    date: "2024-04-17",
    breastSegmentation: 89,
    cervixSegmentation: 67,
    brainClassification: 54,
  },
  {
    date: "2024-04-18",
    breastSegmentation: 78,
    cervixSegmentation: 59,
    brainClassification: 61,
  },
  {
    date: "2024-04-19",
    breastSegmentation: 53,
    cervixSegmentation: 38,
    brainClassification: 31,
  },
  {
    date: "2024-04-20",
    breastSegmentation: 28,
    cervixSegmentation: 19,
    brainClassification: 25,
  },
  {
    date: "2024-04-21",
    breastSegmentation: 39,
    cervixSegmentation: 27,
    brainClassification: 34,
  },
  {
    date: "2024-04-22",
    breastSegmentation: 48,
    cervixSegmentation: 35,
    brainClassification: 29,
  },
  {
    date: "2024-04-23",
    breastSegmentation: 41,
    cervixSegmentation: 29,
    brainClassification: 38,
  },
  {
    date: "2024-04-24",
    breastSegmentation: 82,
    cervixSegmentation: 58,
    brainClassification: 49,
  },
  {
    date: "2024-04-25",
    breastSegmentation: 56,
    cervixSegmentation: 41,
    brainClassification: 43,
  },
  {
    date: "2024-04-26",
    breastSegmentation: 23,
    cervixSegmentation: 16,
    brainClassification: 21,
  },
  {
    date: "2024-04-27",
    breastSegmentation: 86,
    cervixSegmentation: 64,
    brainClassification: 71,
  },
  {
    date: "2024-04-28",
    breastSegmentation: 35,
    cervixSegmentation: 24,
    brainClassification: 31,
  },
  {
    date: "2024-04-29",
    breastSegmentation: 67,
    cervixSegmentation: 48,
    brainClassification: 41,
  },
  {
    date: "2024-04-30",
    breastSegmentation: 91,
    cervixSegmentation: 69,
    brainClassification: 64,
  },
  {
    date: "2024-05-01",
    breastSegmentation: 44,
    cervixSegmentation: 32,
    brainClassification: 37,
  },
  {
    date: "2024-05-02",
    breastSegmentation: 71,
    cervixSegmentation: 52,
    brainClassification: 46,
  },
  {
    date: "2024-05-03",
    breastSegmentation: 59,
    cervixSegmentation: 38,
    brainClassification: 32,
  },
  {
    date: "2024-05-04",
    breastSegmentation: 83,
    cervixSegmentation: 61,
    brainClassification: 71,
  },
  {
    date: "2024-05-05",
    breastSegmentation: 96,
    cervixSegmentation: 74,
    brainClassification: 66,
  },
  {
    date: "2024-05-06",
    breastSegmentation: 102,
    cervixSegmentation: 78,
    brainClassification: 87,
  },
  {
    date: "2024-05-07",
    breastSegmentation: 84,
    cervixSegmentation: 59,
    brainClassification: 51,
  },
  {
    date: "2024-05-08",
    breastSegmentation: 42,
    cervixSegmentation: 28,
    brainClassification: 36,
  },
  {
    date: "2024-05-09",
    breastSegmentation: 51,
    cervixSegmentation: 37,
    brainClassification: 31,
  },
  {
    date: "2024-05-10",
    breastSegmentation: 69,
    cervixSegmentation: 54,
    brainClassification: 56,
  },
  {
    date: "2024-05-11",
    breastSegmentation: 73,
    cervixSegmentation: 51,
    brainClassification: 46,
  },
  {
    date: "2024-05-12",
    breastSegmentation: 47,
    cervixSegmentation: 34,
    brainClassification: 41,
  },
  {
    date: "2024-05-13",
    breastSegmentation: 46,
    cervixSegmentation: 32,
    brainClassification: 27,
  },
  {
    date: "2024-05-14",
    breastSegmentation: 94,
    cervixSegmentation: 72,
    brainClassification: 83,
  },
  {
    date: "2024-05-15",
    breastSegmentation: 98,
    cervixSegmentation: 71,
    brainClassification: 64,
  },
  {
    date: "2024-05-16",
    breastSegmentation: 76,
    cervixSegmentation: 58,
    brainClassification: 67,
  },
  {
    date: "2024-05-17",
    breastSegmentation: 104,
    cervixSegmentation: 79,
    brainClassification: 71,
  },
  {
    date: "2024-05-18",
    breastSegmentation: 71,
    cervixSegmentation: 52,
    brainClassification: 59,
  },
  {
    date: "2024-05-19",
    breastSegmentation: 53,
    cervixSegmentation: 39,
    brainClassification: 31,
  },
  {
    date: "2024-05-20",
    breastSegmentation: 43,
    cervixSegmentation: 29,
    brainClassification: 39,
  },
  {
    date: "2024-05-21",
    breastSegmentation: 24,
    cervixSegmentation: 17,
    brainClassification: 24,
  },
  {
    date: "2024-05-22",
    breastSegmentation: 23,
    cervixSegmentation: 16,
    brainClassification: 21,
  },
  {
    date: "2024-05-23",
    breastSegmentation: 58,
    cervixSegmentation: 42,
    brainClassification: 49,
  },
  {
    date: "2024-05-24",
    breastSegmentation: 68,
    cervixSegmentation: 46,
    brainClassification: 37,
  },
  {
    date: "2024-05-25",
    breastSegmentation: 48,
    cervixSegmentation: 34,
    brainClassification: 42,
  },
  {
    date: "2024-05-26",
    breastSegmentation: 49,
    cervixSegmentation: 35,
    brainClassification: 29,
  },
  {
    date: "2024-05-27",
    breastSegmentation: 89,
    cervixSegmentation: 67,
    brainClassification: 78,
  },
  {
    date: "2024-05-28",
    breastSegmentation: 52,
    cervixSegmentation: 38,
    brainClassification: 32,
  },
  {
    date: "2024-05-29",
    breastSegmentation: 22,
    cervixSegmentation: 15,
    brainClassification: 22,
  },
  {
    date: "2024-05-30",
    breastSegmentation: 76,
    cervixSegmentation: 54,
    brainClassification: 47,
  },
  {
    date: "2024-05-31",
    breastSegmentation: 43,
    cervixSegmentation: 29,
    brainClassification: 39,
  },
  {
    date: "2024-06-01",
    breastSegmentation: 44,
    cervixSegmentation: 31,
    brainClassification: 34,
  },
  {
    date: "2024-06-02",
    breastSegmentation: 98,
    cervixSegmentation: 74,
    brainClassification: 69,
  },
  {
    date: "2024-06-03",
    breastSegmentation: 28,
    cervixSegmentation: 21,
    brainClassification: 27,
  },
  {
    date: "2024-06-04",
    breastSegmentation: 92,
    cervixSegmentation: 68,
    brainClassification: 64,
  },
  {
    date: "2024-06-05",
    breastSegmentation: 26,
    cervixSegmentation: 18,
    brainClassification: 24,
  },
  {
    date: "2024-06-06",
    breastSegmentation: 67,
    cervixSegmentation: 48,
    brainClassification: 42,
  },
  {
    date: "2024-06-07",
    breastSegmentation: 73,
    cervixSegmentation: 55,
    brainClassification: 62,
  },
  {
    date: "2024-06-08",
    breastSegmentation: 84,
    cervixSegmentation: 61,
    brainClassification: 54,
  },
  {
    date: "2024-06-09",
    breastSegmentation: 95,
    cervixSegmentation: 71,
    brainClassification: 81,
  },
  {
    date: "2024-06-10",
    breastSegmentation: 38,
    cervixSegmentation: 27,
    brainClassification: 34,
  },
  {
    date: "2024-06-11",
    breastSegmentation: 25,
    cervixSegmentation: 18,
    brainClassification: 25,
  },
  {
    date: "2024-06-12",
    breastSegmentation: 103,
    cervixSegmentation: 78,
    brainClassification: 71,
  },
  {
    date: "2024-06-13",
    breastSegmentation: 23,
    cervixSegmentation: 16,
    brainClassification: 22,
  },
  {
    date: "2024-06-14",
    breastSegmentation: 91,
    cervixSegmentation: 67,
    brainClassification: 64,
  },
  {
    date: "2024-06-15",
    breastSegmentation: 69,
    cervixSegmentation: 52,
    brainClassification: 59,
  },
  {
    date: "2024-06-16",
    breastSegmentation: 82,
    cervixSegmentation: 58,
    brainClassification: 52,
  },
  {
    date: "2024-06-17",
    breastSegmentation: 101,
    cervixSegmentation: 76,
    brainClassification: 88,
  },
  {
    date: "2024-06-18",
    breastSegmentation: 31,
    cervixSegmentation: 22,
    brainClassification: 29,
  },
  {
    date: "2024-06-19",
    breastSegmentation: 76,
    cervixSegmentation: 54,
    brainClassification: 49,
  },
  {
    date: "2024-06-20",
    breastSegmentation: 89,
    cervixSegmentation: 65,
    brainClassification: 76,
  },
  {
    date: "2024-06-21",
    breastSegmentation: 41,
    cervixSegmentation: 28,
    brainClassification: 36,
  },
  {
    date: "2024-06-22",
    breastSegmentation: 71,
    cervixSegmentation: 49,
    brainClassification: 46,
  },
  {
    date: "2024-06-23",
    breastSegmentation: 103,
    cervixSegmentation: 78,
    brainClassification: 89,
  },
  {
    date: "2024-06-24",
    breastSegmentation: 35,
    cervixSegmentation: 24,
    brainClassification: 31,
  },
  {
    date: "2024-06-25",
    breastSegmentation: 37,
    cervixSegmentation: 26,
    brainClassification: 32,
  },
  {
    date: "2024-06-26",
    breastSegmentation: 92,
    cervixSegmentation: 68,
    brainClassification: 64,
  },
  {
    date: "2024-06-27",
    breastSegmentation: 96,
    cervixSegmentation: 71,
    brainClassification: 83,
  },
  {
    date: "2024-06-28",
    breastSegmentation: 38,
    cervixSegmentation: 27,
    brainClassification: 34,
  },
  {
    date: "2024-06-29",
    breastSegmentation: 28,
    cervixSegmentation: 21,
    brainClassification: 27,
  },
  {
    date: "2024-06-30",
    breastSegmentation: 94,
    cervixSegmentation: 72,
    brainClassification: 67,
  },
];

const chartConfig = {
  analyses: {
    label: "Total Analyses",
  },
  breastSegmentation: {
    label: "Breast Segmentation",
    color: "var(--primary)",
  },
  cervixSegmentation: {
    label: "Cervix Segmentation",
    color: "hsla(0, 0%, 71%, 1.00)",
  },
  brainClassification: {
    label: "Brain CT Classification",
    color: "hsla(0, 0%, 33%, 1.00)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Medical Analyses</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Analysis activity for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient
                id="fillBreastSegmentation"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-breastSegmentation)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-breastSegmentation)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="fillCervixSegmentation"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-cervixSegmentation)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-cervixSegmentation)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="fillBrainClassification"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-brainClassification)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-brainClassification)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="breastSegmentation"
              type="natural"
              fill="url(#fillBreastSegmentation)"
              stroke="var(--color-breastSegmentation)"
              stackId="a"
            />
            <Area
              dataKey="cervixSegmentation"
              type="natural"
              fill="url(#fillCervixSegmentation)"
              stroke="var(--color-cervixSegmentation)"
              stackId="a"
            />
            <Area
              dataKey="brainClassification"
              type="natural"
              fill="url(#fillBrainClassification)"
              stroke="var(--color-brainClassification)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
