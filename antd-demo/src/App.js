import "./App.css";
import { Button, Slider, Space, Typography, Menu, Pagination, Steps, Rate, Watermark, QRCode, Segmented } from "antd";
import { DesktopOutlined, DownloadOutlined, LoadingOutlined, MailOutlined, MenuUnfoldOutlined, SlackOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import { AppstoreOutlined, ContainerOutlined, MenuFoldOutlined, PieChartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import InputBox from "./components/InputBox";
import Try from "./components/Try";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
function App() {
  const [size] = useState("large");
  const [Slisize, setSize] = useState(8);

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [level, setLevel] = useState('L');
  return (
  //   <Watermark content="SOS">
  //   {/* <div
  //     style={{
  //       height: 500,
  //     }}
  //   /> */}
  //   <div className="">
  //     <Button type="primary">Button</Button>
  //     <Button type="dashed" size={size}>
  //       Dashed
  //     </Button>
  //     <Button type="primary" icon={<DownloadOutlined />} size={size}>
  //       Download
  //     </Button>
  //     <SlackOutlined style={{ fontSize: "56px", color: "red" }} />
  //     <br />
  //     <Typography.Title editable level={5} style={{  margin: 0 }}  >
  //       h5. Ant Design
  //     </Typography.Title>

  //     <>
  //     <Slider value={Slisize} onChange={(value) => setSize(value)} />
  //     <br />
  //     <Space size={Slisize}>
  //       <Button type="primary">Primary</Button>
  //       <Button>Default</Button>
  //       <Button type="dashed">Dashed</Button>
  //       <Button type="link">Link</Button>
  //     </Space>
  //   </>
  //   <br/><br/>
  //   <div
  //     style={{
  //       width: 256,
  //     }}
  //   >
  //     <Button
  //       type="primary"
  //       onClick={toggleCollapsed}
  //       style={{
  //         marginBottom: 16,
  //       }}
  //     >
  //       {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
  //     </Button>
  //     <Menu
  //       defaultSelectedKeys={['1']}
  //       defaultOpenKeys={['sub1']}
  //       mode="inline"
  //       theme="dark"
  //       inlineCollapsed={collapsed}
  //       items={items}
  //     />
  //   </div><br/><br/><br/>
  //   <>
  //   <Pagination defaultCurrent={1} total={100} />
  //   </>
  //   <br/><br/><br/>
  //   <Steps
  //   items={[
  //     {
  //       title: 'Login',
  //       status: 'finish',
  //       icon: <UserOutlined />,
  //     },
  //     {
  //       title: 'Verification',
  //       status: 'finish',
  //       icon: <SolutionOutlined />,
  //     },
  //     {
  //       title: 'Pay',
  //       status: 'finish',
  //       icon: <LoadingOutlined />,
  //     },
  //     {
  //       title: 'Done',
  //       status: 'finish',
  //       icon: <SmileOutlined />,
  //     },
  //   ]}
  // /><br/><br/>
  // <Rate allowHalf defaultValue={4.7} />
  
  
  //   </div><br/><br/>

  //   <>
  //     <QRCode
  //       style={{
  //         marginBottom: 16,
  //       }}
  //       errorLevel={level}
  //       value="https://vishal-my-portfolio.netlify.app/"
  //     />
  //     <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
  //   </>
  //   </Watermark>  
  <BrowserRouter>
    {/* <InputBox/> */}
  {/* <Try/> */}
  <Header/>
  <Routes>
    <Route to='/' element={<LogIn/>}/>
    <Route to='/success' element={<Welcome/>}/> 
    <Route/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
