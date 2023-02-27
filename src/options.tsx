import AInput from "ant-design-vue/lib/input"
import "ant-design-vue/lib/input/style/css"

import ASelect from "ant-design-vue/lib/select"
import "ant-design-vue/lib/select/style/css"

import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

import AForm from "ant-design-vue/lib/form"
import "ant-design-vue/lib/form/style/css"

import InputNumber from "ant-design-vue/lib/input-number";
import "ant-design-vue/lib/input-number/style/css";

export default function Options(props) {
  const { schema, options } = props;

  function generateWidget(key) {
    const { widget } = schema.properties[key]
    if (widget === 'input') {
      return <AInput value={options[key]} onUpdate:value={event => options[key] = event} ></AInput>
    }
    if (widget === 'select') {
      const { options: selectOptions } = schema.properties[key]
      return <ASelect value={options[key]} onUpdate:value={event => options[key] = event}>
        {
          selectOptions.map(option => {
            if (typeof option === 'object') {
              return <ASelect.Option value={option.value}>{option.label}</ASelect.Option>
            }
            if (typeof option === 'string') {
              return <ASelect.Option value={option}>{option}</ASelect.Option>
            }
          })
        }
      </ASelect>
    }
    if (widget === 'color') {
      return <ColorPicker pureColor={options[key]} onUpdate:pureColor={event => options[key] = event }></ColorPicker>
    }
    if (widget === 'px-input') {
      return <InputNumber value={options[key]} onUpdate:value={event => options[key] = event} formatter={value => `${value}px`} parser={value => value.replace('px', '')}></InputNumber>
    }
    return <div>{options[key]}</div>
  }
  return <AForm model={options}>
    {
      Object.keys(schema.properties).map(key =>
        <AForm.Item label={schema.properties[key].title}>
            { generateWidget(key) }
        </AForm.Item>
      )
    }
    </AForm>
}

Options.props = ['schema', 'options']