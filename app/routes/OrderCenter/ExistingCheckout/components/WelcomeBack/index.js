import React from 'react'
import {Card, CardBody, Row, Col} from 'reactstrap'
import PropTypes from 'prop-types'

import iconEdit from 'images/commonIcons/edit-circle.svg'

const WelcomeBack = ({data}) => {
  return (
    <Card className="mt-4">
      <CardBody>
        <Row>
          <Col sm={6}>
            <h2 className="sub-title">Welcome back, {data.username}!</h2>
          </Col>
          <Col sm={6} className="d-flex justify-content-sm-end mt-1">
            <div>
              <img src={iconEdit} />
            </div>
            <div className="ml-2 label">Edit</div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={2}>
            <Row>
              <Col xs={6} md={12} className="card-label">
                User Name
              </Col>
              <Col xs={6} md={12} className="card-value">
                {data.username}
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col xs={6} md={12} className="card-label">
                Email
              </Col>
              <Col xs={6} md={12} className="card-value">
                {data.email}
              </Col>
            </Row>
          </Col>
          <Col md={3} lg={2}>
            <Row>
              <Col xs={6} md={12} className="card-label">
                Phone Number
              </Col>
              <Col xs={6} md={12} className="card-value">
                {data.phone}
              </Col>
            </Row>
          </Col>
          <Col md={4} lg={3}>
            <Row>
              <Col xs={6} md={12} className="card-label">
                Company Name
              </Col>
              <Col xs={6} md={12} className="card-value">
                {data.company_name}
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

WelcomeBack.propTypes = {
  data: PropTypes.object,
}

export default WelcomeBack
