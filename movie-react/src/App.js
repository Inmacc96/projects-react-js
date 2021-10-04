import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Pagination } from "antd";

function App() {
  return (
    <div>
      <h1>Estamos en App.</h1>
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      <Button type="primary" shape="circle">
        Inma
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}

export default App;
