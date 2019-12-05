import React from "react";
import LayoutWrapper from "../../../../components/utility/layoutWrapper";
import Box from "../../../../components/utility/box";
import ClientDetailsForm from "./client-detail-form";
// import OrderInfo from './order-info';
import { ClientsDetails } from "../../../../components/uielements/styles/client.style";
import { Row, Button } from "antd";

const primaryButton = {
  width: "150px",
  backgroundColor: "#00AED0",
  borderColor: "#00AED0",
  borderRadius: "30px",
  color: "white"
};

const actionBtnStyle = {
  padding: "25px",
  position: "relative",
  float: "left",
  top: "85%",
  display: "flex",
  left: "55%"
};
const cancelStyle = {
  width: "150px",
  marginLeft: "10px",
  backgroundColor: "black",
  borderColor: "black",
  borderRadius: "30px",
  color: "white"
};
class ClientDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  
  render() {
    console.log(this.props);
    return (
      <ClientsDetails>
        <LayoutWrapper className="isoCheckoutPage">
          <Box>
            <ClientDetailsForm clientDetails={this.props.form} />
          </Box>

          <Row>
              <div style={actionBtnStyle}>
                <Button htmlType="submit" size="default" style={primaryButton}>
                  SAVE
                </Button>

                <Button htmlType="button" size="default" style={cancelStyle}>
                  CANCEL
                </Button>
              </div>
            </Row>
        </LayoutWrapper>
      </ClientsDetails>
    );
  }
}
export default ClientDetails;
