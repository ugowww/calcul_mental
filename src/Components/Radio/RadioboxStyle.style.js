import styled from "styled-components";

const AntRadiobox = ComponentName => styled(ComponentName)`
  &.ant-radio-wrapper,
  .ant-radio-wrapper {
    font-size: 13px;
    color: red;

    .ant-radio-inner {
      &:after {
        width: 6px;
        height: 6px;
        top: 4px;
        left: 4px;
        background-color: red;
        border-radius: 50%;
      }
    }

    .ant-radio-checked .ant-radio-inner,
    .ant-radio-indeterminate .ant-radio-inner {
      border-color: red;
    }

    .ant-radio:hover .ant-radio-inner,
    .ant-radio-input:focus + .ant-radio-inner {
      border-color: red;
    }

    .ant-radio-disabled .ant-radio-inner:after {
      background-color: #ccc;
    }

    &:hover {
      .ant-radio-inner {
        border-color: red;
      }
    }

    .ant-radio-checked {
      .ant-radio-inner {
        &:after {
          transform: scale(1);
        }
      }
    }
  }
`;

export default AntRadiobox;