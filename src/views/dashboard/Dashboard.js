import React, { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CTabContent,
  CTabPane
} from '@coreui/react'
import { DocsLink } from 'src/reusable'


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      <CRow>
      <CCol sm="12" xl="6">
          <CCard>
            <CCardBody>
              <CListGroup>
                <CListGroupItem action active>
                  <h4 className="d-flex w-100 justify-content-between">
                    Demand Supply Balancing
                    <small>3 days ago</small>
                  </h4>
                </CListGroupItem>
                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Purchasing BOM Selector         
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                    Purchasing BOM Selector Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Product Tree Search     
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                  Product Tree Search   Description
                  </div>
                </CListGroupItem>

                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Supplier BOM Search     
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                  Supplier BOM Search  Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    'Where Used?' BOM Search     
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                  'Where Used?' BOM Search    Description
                  </div>
                </CListGroupItem>


                <CListGroupItem action actve>
                  <h5 className="d-flex w-100  justify-content-between">
                    Supplier BOM Search     
                      <small>  <b> Target Date: April</b> </small>
                    </h5>
                  <div>
                  Supplier BOM Search  Description
                </div>
                </CListGroupItem> 
              
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup>

            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="12" xl="6">
          <CCard>
            <CCardHeader>
              List group
              <small> custom content</small>
            </CCardHeader>
            <CCardBody>

              <CListGroup>
                <CListGroupItem action active>
                  <h5 className="d-flex w-100 justify-content-between">
                    List group item heading
                    <small>3 days ago</small>
                  </h5>
                  <div className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    <small>Donec id elit non mi porta.</small>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              List group
              <small> tab Javascript plugin</small>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Home</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Profile</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Messages</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Settings</CListGroupItem>
                  </CListGroup>
                </CCol>
                <CCol xs="8">
                  <CTabContent>
                    <CTabPane active={activeTab === 0} >
                      <p>Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt
                        nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim
                        tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip
                        eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.</p>
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia
                        dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt
                        anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum
                        reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
                    </CTabPane>
                    <CTabPane active={activeTab === 2}>
                      <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
                        nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
                        est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
                        deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                        laborum elit adipisicing pariatur cillum.</p>
                    </CTabPane>
                    <CTabPane active={activeTab === 3}>
                      <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                        sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                        aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                        nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                        eiusmod eu pariatur culpa mollit in irure.</p>
                    </CTabPane>
                  </CTabContent>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
