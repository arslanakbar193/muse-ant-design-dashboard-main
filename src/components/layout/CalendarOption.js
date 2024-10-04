import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const CalendarOption = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    
  </Space>
);
export default CalendarOption;