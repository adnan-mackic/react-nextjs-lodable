import React from 'react'
import {Card, CardBody, Col, Row} from 'reactstrap'
import PropTypes from 'prop-types'

import iconCard from 'images/commonIcons/card-circle.svg'
import ButtonRow from './ButtonRow'
import BillingCard from './BillingCard'

const BillingMethod = ({data, billAdd, setBillAdd}) => {
  return (
    <Card className="mt-4">
      <CardBody>
        <Row>
          <Col sm={6}>
            <h2 className="sub-title">Choose a Billing Method</h2>
          </Col>
          <Col sm={6} className="d-flex justify-content-sm-end mt-1">
            <div>
              <img src={iconCard} />
            </div>
            <div className="ml-2 label">Add New Credit Card</div>
          </Col>
        </Row>
        <hr />
        <ButtonRow />
        <Row>
          {data.map((address, index) => (
            <Col md={6} key={index}>
              <BillingCard
                id={index}
                address={address}
                active={index === billAdd}
                setBillAdd={setBillAdd}
              />
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  )
}

BillingMethod.propTypes = {
  data: PropTypes.array,
  billAdd: PropTypes.number,
  setBillAdd: PropTypes.func,
}

export default BillingMethod
