import { getAggregationPageKey } from "@/api/all";
import { Message } from "@arco-design/web-react";

export async function fetchAggregationData(key) {
  try {
    const data = await getAggregationPageKey({ key });
    if (data.StatusCode === 200) return { [key]: data };
    else return { [key]: null };
  } catch (error) {
    Message.error("服务器错误,请稍后再试");
    console.error(`Error fetching data for key ${key}:`, error);
    return { [key]: null };
  }
}

export const dataConfig = [
  // 头部视频
  { key: "new-VideoBanner", name: "videoBanner" },
  // 设计工具
  { key: "new-DesignTools", name: "designTools" },
  // 高清照片
  { key: "new-HighQualityPhoto", name: "highQualityPhoto" },
  // 案例视频，使用视频
  { key: "new-ExampleVideo", name: "exampleVideo" },
  // 案例评论
  { key: "new-ExampleComment", name: "exampleComment" },
  // 灵感展示
  { key: "new-InspirationDisplay", name: "inspirationDisplay" },
  // 建筑设计
  { key: "new-usage-BuildingDesign", name: "buildingDesign" },
  // 景观设计
  { key: "new-usage-LandscapeDesign", name: "landscapeDesign" },
  // 室内设计
  { key: "new-usage-InteriorDesign", name: "interiorDesign" },
  // 工程设计
  { key: "new-usage-EngineeringDesign", name: "engineeringDesign" },
  // 草图里介绍
  { key: "new-CTLIntroduction", name: "CTLIntroduction" },
];
