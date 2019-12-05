import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
// import Breadcrumb from '../../components/uielements/breadcrumb';
import { connect } from 'react-redux';

import { Row, Col, Breadcrumb, Button, Tabs } from 'antd';

import ClientSearchBox from '../../components/clientSearchBox/clientSearchBox';
import SearchButton from '../../components/searchbutton';
// import Tabs, { TabPane } from '../../components/uielements/tabs';

import './blankPage.css';

// import Button from '../../components/uielements/button';

const styling = {
  background: 'transparent',
  border: '1px solid black',
  height: '40px',
  lineHeight: '40px',
  fontSize: '13px',
  borderRadius: '30px',
  margin: '10px',
  width: '215px',
  textAlign: 'center'
}

const cancelStyle = {
  width: '150px',
  marginLeft: '15px',
  backgroundColor: 'black', 
  borderColor: 'black',
  borderRadius: '30px',
  color: 'white'
}

const primaryButton = {
  width: '150px',
  backgroundColor:  '#00AED0',
  borderColor: '#00AED0',
  borderRadius: '30px',
  color: 'white'
}

class EditRole extends Component {
  
  callback(key) {
    console.log(key);

    if (key == 2)
      document.getElementById('mdm-access').style.display = 'block';
    else
      document.getElementById('mdm-access').style.display = 'none';
  }

  mdmAccessVisible() {

  }

  render() {
    return (
      <div>
        <Breadcrumb style={{ padding: '25px' }}>
          <Breadcrumb.Item>Administrator</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item style={{ fontWeight: 'bold' }}>
            Edit Roles
            </Breadcrumb.Item>
        </Breadcrumb>
        <LayoutContentWrapper style={{ paddingBottom: '0', paddingTop: 0 }}>
          <LayoutContent>
            <div>
              <Row>
                <Col span={24}>Search by User Name</Col>
              </Row>
              <Row>
                {/* <Col span={12}><ClientSearchBox /></Col> */}
                <Col span={12}><SearchButton /></Col>
              </Row>
            </div>
          </LayoutContent>
        </LayoutContentWrapper>
        <LayoutContentWrapper style={{ height: '50vh', paddingTop: '25px', paddingBottom: '10px' }}>
          <LayoutContent style={{ padding: '0', border: 0 }}>
            <div >
              <Row>
                <Col span={24}>
                  <Tabs defaultActiveKey="1" onChange={this.callback}>
                    {/* <TabPane tab="Buying Organization" key="1"> */}
                      <Row>
                        <Col span={5}>
                          {/* <div style={styling}>Acumen</div> */}
                          <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check1" id="check1" />
                            <label class="checklabel" for="check1">Acumen</label>
                          </div>
                        </Col>
                        <Col span={5}>
                         {/* <div style={styling}>Arena Media</div>  */}
                         <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check2" id="check2" />
                            <label class="checklabel" for="check2">Arena Media</label>
                          </div>
                         </Col>
                        <Col span={5}> 
                        {/* <div style={styling}>Forward 1UK Ltd</div> */}
                        <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check3" id="check3" />
                            <label class="checklabel" for="check3">Forward 1UK Ltd</label>
                          </div>
                         </Col>
                        <Col span={5}>
                         {/* <div style={styling}>Fullsix</div>  */}
                         <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check4" id="check4" />
                            <label class="checklabel" for="check4">Fullsix</label>
                          </div>
                         </Col>
                        <Col span={5}>
                         {/* <div style={styling}>HMI</div>  */}
                         <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check5" id="check5" />
                            <label class="checklabel" for="check5">HMI</label>
                          </div>
                         </Col>
                      </Row>
                      <Row>
                        <Col span={5}>
                          {/* <div style={styling}>Acumen</div> */}
                          <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check13" id="check13" />
                            <label class="checklabel" for="check13">Havas media</label>
                          </div>
                        </Col>
                        <Col span={5}>
                         {/* <div style={styling}>Arena Media</div>  */}
                         <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check6" id="check6" />
                            <label class="checklabel" for="check6">MI Media</label>
                          </div>
                         </Col>
                        <Col span={5}> 
                        {/* <div style={styling}>Forward 1UK Ltd</div> */}
                        <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check7" id="check7" />
                            <label class="checklabel" for="check7">Target Live</label>
                          </div>
                         </Col>
                        <Col span={5}>
                         {/* <div style={styling}>Fullsix</div>  */}
                         <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check8" id="check8" />
                            <label class="checklabel" for="check8">Target Media</label>
                          </div>
                         </Col>
                        <Col span={5}>
                         {/* <div style={styling}>HMI</div>  */}
                         <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check9" id="check9" />
                            <label class="checklabel" for="check9">Pace</label>
                          </div>
                         </Col>
                      </Row>
                      <Row>
                        <Col span={5}>
                          {/* <div style={styling}>Acumen</div> */}
                          <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check10" id="check10" />
                            <label class="checklabel" for="check10">LuxHub</label>
                          </div>
                        </Col>
                        <Col span={5}>
                         {/* <div style={styling}>Arena Media</div>  */}
                         <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check11" id="check11" />
                            <label class="checklabel" for="check11">SmithField</label>
                          </div>
                         </Col>
                        <Col span={5}> 
                        {/* <div style={styling}>Forward 1UK Ltd</div> */}
                        <div class="formrow">
                            <input class="checkbox" type="checkbox" name="check12" id="check12" />
                            <label class="checklabel" for="check12">The Media Network</label>
                          </div>
                         </Col>
                        
                      </Row>
                    {/* </TabPane> */}
                    {/* <TabPane tab="MMS+ Roles" key="2"> */}
                      <Row>
                        <Col span={5}>
                          <div style={styling} >TV Trading Manager </div>
                        </Col>
                        <Col span={5}> <div style={styling}>MDM Admin</div> </Col>
                        <Col span={5}> <div style={styling}>Finance Controller</div> </Col>
                        <Col span={5}> <div style={styling}>MDM View</div> </Col>
                        <Col span={5}> <div style={styling}>Billing Officer</div> </Col>
                      </Row>
                      <Row>
                        <Col span={5}> <div style={styling}>Accounts Manager</div> </Col>
                        <Col span={5}> <div style={styling}>TV Planner</div> </Col>
                        <Col span={5}> <div style={styling}>Planner / Buyer</div> </Col>
                        <Col span={5}> <div style={styling}>TV Manager</div> </Col>
                        <Col span={5}> <div style={styling}>Bussiness Director</div> </Col>
                      </Row>
                      <Row>
                        <Col span={5}> <div style={styling}>TV Manager Lite</div> </Col>
                        <Col span={5}> <div style={styling}>Trading Manager</div> </Col>

                      </Row>
                    {/* </TabPane> */}
                    {/* <TabPane tab="CID Roles" key="3"> */}
                      <Row>
                        <Col span={5}> <div style={styling}>CID Manager</div> </Col>
                        <Col span={5}> <div style={styling}>GBD</div> </Col>
                        <Col span={5}> <div style={styling}>Senior Management</div> </Col>
                        <Col span={5}> <div style={styling}>Executive</div> </Col>
                        <Col span={5}> <div style={styling}>Time Forcaster</div> </Col>

                      </Row>
                      <Row>
                        <Col span={5}> <div style={styling}>Forcaster Manager</div> </Col>

                      </Row>
                    {/* </TabPane> */}
                  </Tabs>
                </Col>
              </Row>
            </div>
          </LayoutContent>
        </LayoutContentWrapper>
        <div id="mdm-access" style={{ display: "none" }}>
          <LayoutContentWrapper style={{ height: '25vh', paddingTop: '0', paddingBottom: '10px' }}>
            <LayoutContent style={{ padding: '0', border: 0 }}>
              <Row>
                <Col span={24}>
                  <Tabs defaultActiveKey="1">
                    {/* <TabPane tab="MDM Access" key="1"> */}
                      <Row>
                        <Col span={5}> <div style={styling}>Client</div> </Col>
                        <Col span={5}> <div style={styling}>Media Owner</div> </Col>

                      </Row>
                    {/* </TabPane> */}
                  </Tabs>
                </Col>
              </Row>

            </LayoutContent>
          </LayoutContentWrapper>
        </div>
        <div style= {{padding: '0px 20px 25px 20px', float: 'right'}}>
          <Button type="default" size="default" style= {primaryButton}>
              SAVE
            </Button>
            <Button type="default" size="default" style= {cancelStyle}>
              CANCEL
            </Button>
        </div>
        
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   const { productQuantity, products } = state.Ecommerce.toJS();
//   return { productQuantity, products };
// }
export default (EditRole);
