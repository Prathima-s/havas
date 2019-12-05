import styled from 'styled-components';
import { palette } from 'styled-theme';
import { borderRadius } from '../../../config/style-util';
import WithDirection from '../../../config/withDirection';

const WDClientsDetails = styled.div`
  .isoCheckoutPage {
    padding: 10px;
    display: block;
    // border-top: 1px solid #D2D3D2;

    .ant-form-item-label {
      // padding-left: 10px;
  }

    .welcomeText {
      font-size: 21px;
      margin-top: 50px;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .layoutBox {
      width: 750px;
      margin: 75px 245px;
      display: inline-block;
    }
    .sc-dxgOiQ.THqRH {
      display: inline-block;
    }
    .searchButton {
      display: inline-block; 
    }

    .searchButton button {
      display: inline-block;
      margin-left: 25px;
      border-radius: 35px;
      text-transform: uppercase;
      padding-right: 50px;
      height: 40px;
    }
    .searchButton span {
      margin-left: 20px !important;
      font-weight: 700;
      font-size: 15px;
    }
    .searchButton a {
      color: #fff;
      padding-left: 20px;
      font-weight: 700;
    }
    .ant-select-auto-complete.ant-select .ant-input {
      height: 40px;
    }
    .ant-select-auto-complete.ant-select .ant-select-selection__placeholder {
      padding: 3px;
    }
    
    .userButton {
      margin-top: 50px;
    }
    .ant-select-selection {
      background-color: #f9f9f9;
      border: 0.5px solid #3a3a3a;
      border-radius: 35px;
      height: 35px;      
    }
    .userButton button {
      border-radius: 35px;
      width: 179px;
      margin-right: 10px;
      height: 40px;
      margin-top: 20px;
      border: 0.5px solid #3a3a3a;
      background-color: #F1F0F0;
    }
    .userButton button:nth-child(4n+4) {
      margin-right: 0;
    }
    .userButton button:focus {
      background-color: #f3fafe;
      border: 0.5px solid #00AED0;
      color: #3a3a3a;
    }
    
    .userButton button:hover {
      color:#3a3a3a;
      background-color: #f3fafe;
      border: 0.5px solid #00AED0;
    }
    .isoSectionTitle {
      font-size: 20px;
      font-weight: 700;
      color:#898989;
    //   color: ${palette('text', 0)};
      line-height: 1.2;
      padding: ${props =>
        props['data-rtl'] === 'rtl' ? '0 30px 0 0' : '0 0 0 30px'};
      margin: 20px 0;
    }

    .isContractDetails{
      width: 5%;
      display: inline-block;      
    }

    .isoLoginSection {
      width: 100%;
    }

    .isoSectionSeperator {
      margin: 40px 0;
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;

      &:before,
      &:after {
        content: '';
        width: 100%;
        height: 1px;
        display: flex;
        background-color: ${palette('grayscale', 4)};
      }

      span {
        font-size: 14px;
        font-weight: 500;
        color: ${palette('text', 0)};
        line-height: 1.2;
        padding: 0 15px;
      }
    }

    .isoBillingAddressWrapper {
      width: 100%;

      .isoBillingSection {
        display: flex;

        @media only screen and (max-width: 767px) {
          flex-direction: column;
        }
      }
    }

    .ant-col-6 .ant-form-item-control input {
      background-color: #f9f9f9;
      border: 0.5px solid #3a3a3a;
      border-radius: 35px;
      height: 35px;
      line-height: 20px
      min-width: 215px;
      width: 266px;
      // margin-left: 10px;
      margin-right: 10px;
    }
    .ant-form-item-control input {
      border: 0.5px solid #3a3a3a;
    }

    .ant-col-6 .ant-form-item-control input:nth-of-type(4) {
      margin-right: 0 !important;
    }
  }

  
`;

const WDBillingFormWrapper = styled.div`
  width: 100%;
  // padding: ${props =>    props['data-rtl'] === 'rtl' ? '0 30px 0 20px' : '0 20px 0 30px'};
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 0;
    margin-bottom: 50px;
  }

  .isoInputFieldset {
    width: 100%;
    display: flex;
    margin-bottom: 5px;

    &clientList {
        border-radius: 20px;
    }
    &.sectorField {
        width: 31%;
    }
    &.vertical {
      flex-direction: column;
    }

    .isoInputBox {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: ${props =>
        props['data-rtl'] === 'rtl' ? '0 0 0 35px' : '0 20px 0 0'};

      &:last-child {
        margin: 0;
      }

      .ant-select {
        .ant-select-selection {
          &.ant-select-selection--single {
            height: 35px;
            border-radius: 20px !important;
            background-color: #f9f9f9;
            border: 0.5px solid #3a3a3a; 
            // ${borderRadius()};
          }

          .ant-select-selection__rendered {
            // line-height: 42px;
            font-size: 13px;
          }
        }
      }
    }

    input {
      ${borderRadius()};
    }
  }

  .ant-checkbox-wrapper {
    span {
      font-size: 13px;
      font-weight: 500;
      color: ${palette('text', 0)};
      line-height: 1.2;
    }
  }
`;

const WDInputBoxWrapper = styled.div`
  &.isoInputBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 35px;

    &.clientList {
        margin-left: 20px;
    }

    &:last-child {
      margin-right: 0;
    }

    label {
      font-size: 14px;
      font-weight: 500;
      color: #8f8989;
    //   color: ${palette('text', 0)};
      line-height: 1.2;
      margin-bottom: 10px;
      display: flex;
      position: relative;

      .asterisk {
        font-size: 15px;
        font-weight: 400;
        color: ${palette('color', 0)};
        line-height: 1.2;
        margin: ${props =>
          props['data-rtl'] === 'rtl' ? '0 3px 0 0' : '0 0 0 3px'};
      }
    }

    input {
      ${borderRadius()};
    }
  }
`;

const WDOrderTable = styled.div`
  width: 40%;
  padding: ${props =>
    props['data-rtl'] === 'rtl' ? '0 20px 0 30px' : '0 30px 0 20px'};

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 0;
  }

  .isoOrderTable {
    width: 100%;
    display: flex;
    flex-direction: column;

    .isoOrderTableHead {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      .tableHead {
        font-size: 15px;
        font-weight: 500;
        color: ${palette('text', 0)};
        line-height: 1.2;
      }
    }

    .isoOrderTableBody {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      .isoSingleOrderInfo {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid ${palette('border', 0)};

        &:last-child {
          border-bottom: 0;
        }

        p {
          padding-right: ${props =>
            props['data-rtl'] === 'rtl' ? '0 0 0 35px' : '0 35px 0 0'};
          span {
            font-size: 13px;
            font-weight: 400;
            color: ${palette('text', 2)};
            line-height: 1.5;
            padding: 0 3px;
            display: inline-block;

            &.isoQuantity {
              font-size: 13px;
              font-weight: 400;
              color: ${palette('text', 1)};
              line-height: 1.5;
              display: inline-block;
            }
          }
        }

        .totalPrice {
          font-size: 13px;
          font-weight: 500;
          color: ${palette('text', 2)};
          line-height: 1.5;
        }
      }
    }

    .isoOrderTableFooter {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      span {
        font-size: 14px;
        font-weight: 500;
        color: ${palette('text', 0)};
        line-height: 1.2;
      }
    }

    button {
      height: 42px;
      ${borderRadius('2px')};
    }
  }
`;

const ClientsDetails = WithDirection(WDClientsDetails);
const BillingFormWrapper = WithDirection(WDBillingFormWrapper);
const OrderTable = WithDirection(WDOrderTable);
const InputBoxWrapper = WithDirection(WDInputBoxWrapper);

export { ClientsDetails, BillingFormWrapper, OrderTable, InputBoxWrapper };
