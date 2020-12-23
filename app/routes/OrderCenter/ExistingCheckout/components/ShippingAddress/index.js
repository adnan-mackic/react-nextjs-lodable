import React from 'react'
import {Card, CardBody, Col, Row} from 'reactstrap'
import PropTypes from 'prop-types'

import iconLocation from 'images/commonIcons/location-circle.svg'
import ButtonRow from './ButtonRow'
import ShippingCard from './ShippingCard'

const ShippingAddress = ({data, shipAdd, setShipAdd}) => {
  return (
    <Card className="my-4">
      <CardBody>
        <Row>
          <Col sm={6}>
            <h2 className="sub-title">Choose a Shipping Address</h2>
          </Col>
          <Col sm={6} className="d-flex justify-content-sm-end mt-1">
            <div>
              <img src={iconLocation} />
            </div>
            <div className="ml-2 label">Add New Shipping Address</div>
          </Col>
        </Row>
        <hr />
        <ButtonRow />
        <Row>
          {data.map((address, index) => (
            <Col md={6} key={index}>
              <ShippingCard
                id={index}
                address={address}
                active={index === shipAdd}
                setShipAdd={setShipAdd}
              />
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  )
}

ShippingAddress.propTypes = {
  data: PropTypes.array,
  shipAdd: PropTypes.number,
  setShipAdd: PropTypes.func,
}

export default ShippingAddress
