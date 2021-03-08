import React from 'react';
import { notification, Button } from 'antd';
import './ToolBar.less';

const openNotification = () => {
  notification.open({
    message: 'title',
    description: '描述',
    onClick: () => {
      console.log('关闭');
    },
  });
};

const ToolBar: React.FunctionComponent = () => (
  <div className="toolbar-box">
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>
    <span>toolbar</span>
  </div>
);

export { ToolBar };
