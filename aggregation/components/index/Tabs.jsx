import React, { useState, forwardRef } from "react";
import styled from "@emotion/styled";

const Tabs = forwardRef((props, ref) => {
  const Box = styled.div`
    text-align: center;
  `;
  const TabsContainer = styled.div`
    // 👈 避免与组件名称冲突
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
  `;
  const TabsItem = styled.div`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${({ isActive }) =>
      isActive ? "#FBF6E5" : "rgba(255, 255, 255, 0.25)"};
    border-bottom: ${({ isActive }) =>
      isActive ? "1px solid #FBF6E5" : "1px solid rgba(255, 255, 255, 0.1)"};
    margin-right: 16px;
    cursor: pointer;
    padding: 0 25px 7px;
    &:last-child {
      margin-right: 0;
    }
  `;

  const [value, setValue] = useState(0);

  const titles = [{ title: "智能创作" }, { title: "编辑重绘" }];

  return (
    <Box ref={ref}>
      <TabsContainer id="tabs">
        {titles.map((item, index) => (
          <TabsItem
            key={index}
            isActive={value === index}
            onClick={() => setValue(index)}
          >
            {item.title}
          </TabsItem>
        ))}
      </TabsContainer>
    </Box>
  );
});

Tabs.displayName = "Tabs";

export default Tabs;
