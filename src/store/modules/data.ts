/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { LayoutConfig } from "@/types/dashboard";
export const ConfigData: LayoutConfig = {
  x: 0,
  y: 0,
  w: 8,
  h: 12,
  i: "0",
  metrics: ["service_resp_time"],
  queryMetricType: "readMetricsValues",
  visualization: "Line",
  widget: {
    title: "Title",
    tips: "Tooltip",
  },
  graph: {
    showBackground: true,
    barWidth: 30,
  },
  standard: {
    sortOrder: "DEC",
    unit: "s",
  },
};
