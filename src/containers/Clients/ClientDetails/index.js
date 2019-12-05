import React from 'react';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Box from '../../../components/utility/box';
import BillingForm from './billing-form';
// import OrderInfo from './order-info';
import { ClientsDetails } from '../../../components/uielements/styles/client.style';
import ContractDetails from '../ContractDetails';

class ClientDetails extends React.Component {
  render() {
    return (
      <ClientsDetails>
        <LayoutWrapper className="isoCheckoutPage">
          <Box>
            <div className="isoBillingAddressWrapper">
              <h3 className="isoSectionTitle">AXA UK PLC (ARENA)</h3>
              <div className="isoBillingSection">
                <BillingForm />
                {/* <OrderInfo /> */}
              </div>
             
            </div>
          </Box>
          <ContractDetails/>          
        </LayoutWrapper>
      </ClientsDetails>
    );
  }
}
export default ClientDetails;
