import React from 'react';
// import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Box from '../../../../components/utility/box';
// import BillingForm from './billing-form';
// import OrderInfo from './order-info';
import { ClientsDetails } from '../../../../components/uielements/styles/client.style';

class ContractDetails extends React.Component {
  render() {
    return (
     <ClientsDetails>
          <Box className="isContractDetails">
           <p>Test</p>
          </Box>
          </ClientsDetails>
    );
  }
}
export default ContractDetails;
