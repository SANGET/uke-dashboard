import React, {Component} from 'react';

import { FormLayout, Loading } from 'ukelli-ui';
import { Services } from "../services";

/**
 * 说明
 * submiting 是否提交中
 * querying  如果需要异步获取表单条件的，需要用 Loading 包装一层，并且 !querying 的时候渲染 FormLayout
 */
export class TestFormBasic extends Services {
  state = {
    ...this.state
  }
  constructor(props) {
    super(props);

    this.formOptions = this.getForms(['hideDemo', 'inputDemo', 'pwDemo', 'selectDemo', 'radioDemo']);
  }
  btnConfig = [
    {
      action: async (formRef, actingRef) => {
        if(!this.checkForm(formRef)) return;

        let postData = {
          ...formRef.value,
        };
        const agentOptions = {
          actingRef
        };
        await this.reqAgent(this.apis.testSubmit, agentOptions)(postData);
      },
      text: '按钮1',
      actingRef: 'acting1',
      className: 'theme'
    },
    {
      action: async (formRef, actingRef) => {
        if(!this.checkForm(formRef)) return;

        let postData = {
          ...formRef.value,
        };
        const agentOptions = {
          actingRef
        };
        await this.reqAgent(this.apis.testSubmit, agentOptions)(postData);
      },
      text: '按钮2',
      actingRef: 'acting2',
      className: 'red'
    },
  ];
}

export class TestForm extends TestFormBasic {
  render() {
    const { querying = false } = this.state;

    return (
      <div className="card">
        {/* 如果是已经定义好的数据，则不需要 Loading */}
        <FormLayout
          tipInfo={{
            title: '如果是已经定义好的数据，则不需要 Loading'
          }}
          {...this.state}
          formOptions={this.formOptions}
          btnConfig={this.btnConfig}/>
      </div>
    );
  }
}