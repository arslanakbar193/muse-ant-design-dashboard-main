import React from 'react';
import { Calendar, Badge } from 'antd';

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
        { type: 'info', content: 'This is info event.' },
      ];
      break;
    default:
      listData = [];
  }
  return listData || [];
};

const dateCellRender = (value) => {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item, index) => (
        <li key={index}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
};

const MyCalendar = () => {
  return <Calendar dateCellRender={dateCellRender} />;
};

export default MyCalendar;