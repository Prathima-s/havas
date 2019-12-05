import styled from 'styled-components';
import { palette } from 'styled-theme';

const AppHolder = styled.div`
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 16px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: ${palette('primary', 0)};
  }

  .ant-layout-sider-collapsed .anticon {
    font-size: 16px;
  }

  .ant-layout-sider-collapsed .nav-text {
    display: none;
  }

  .ant-layout {
    background: ${palette('secondary', 1)};

    &.isoContentMainLayout {
      overflow: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 10px;
	      background-color: #c8c6c4;
      } 

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
	      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	      background-color: #c8c6c4;
      }

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	      border-radius: 11px;
	      background-color: #F5F5F5;
      }
      
      @media only screen and (min-width: 768px) and (max-width: 1220px) {
        width: calc(100% - 64px);
        flex-shrink: 0;
      }

      @media only screen and (max-width: 767px) {
        width: 100%;
        flex-shrink: 0;
      }
    }
  }

  .isoLayoutContent {
    width: 100%;
    padding: 35px;
    background-color: #ffffff;
    border: 1px solid ${palette('border', 0)};
    height: 100%;
  }

  .isomorphicLayout {
    width: calc(100% - 240px);
    flex-shrink: 0;
    overflow-x: hidden !important;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }

    @media only screen and (min-width: 768px) and (max-width: 1220px) {
      width: calc(100% - 64px);
    }
  }

  .ant-layout-footer {
    font-size: 13px;
    @media (max-width: 767px) {
      padding: 10px 20px;
    }
  }

  button {
    border-radius: 0;
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
  background-color: #00AED0;
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
// .ant-select-arrow:before {
//   content: '\E61D' !important;
// }

`;

export default AppHolder;
