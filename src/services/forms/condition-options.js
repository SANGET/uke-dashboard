/**
 * 根据具体的业务制定所有的查询条件
 */

import { IsFunc, GetDefaultDateInfo } from "basic-helper";

import getFromMapper from './utils';

const Conditions = {
  demo: {
    type: 'input',
    title: '测试输入',
    defaultValue: '123'
  },
  selectDemo: {
    type: 'select',
    ref: 'Select',
    title: '下拉选择',
    desc: '下拉选择的描述',
    values: {
      val1: '下拉选择类型1',
      val2: '下拉选择类型2',
      val3: '下拉选择类型3',
      val4: '下拉选择类型4',
    }
  },
  datetimeRange: () => {
    const dateRange = GetDefaultDateInfo(0, 0);
    return {
      type: 'datetimeRange',
      refs: ['startData', 'endDate'],
      // needTime: false,
      range: dateRange
    };
  }
};
/**
 * 同步获取查询条件的定义
 */
const SYNC_CONDITION_DEMO = {
  key1: '字段1',
  key2: '字段2',
};
const conditionOptionsMapper = {
  condition1: {
    type: 'radio',
    ref: 'AgentType',
    defaultValue: 'key2',
    values: SYNC_CONDITION_DEMO
  },
};

export function getConditions() {
  return getFromMapper(Conditions, ...arguments);
}