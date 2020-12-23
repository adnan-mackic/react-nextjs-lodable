import React from 'react'
import iconEdit from 'images/commonIcons/edit-circle.svg'
import {Row, Col, Label, Input, Form, FormGroup, CustomInput} from 'reactstrap'
import {makeStyles} from '@material-ui/styles'
import PropTypes from 'prop-types'

import Visa from 'images/commonIcons/visa.jpg'

const useStyles = makeStyles({
  active: {
    border: '2px solid #de8b6d',
    '& .active-card-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '20px',
      fontWeight: 'bold',
      fontStretch: 'condensed',
      color: '#de8b6d',
    },
    '& .checkbox': {
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      fontWeight: 600,
      color: '#de8b6d',
    },
  },
  cardTitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: '20px',
    fontWeight: 'bold',
    fontStretch: 'condensed',
    color: '#403839',
  },
})

const BillingCard = ({active, id, address, setBillAdd}) => {
  const classes = useStyles()

  return (
    <div className={`${active ? classes.active : 'border'} rounded my-3 p-4 `}>
      <Row>
        <Col xs={6}>
          <span className={`${active ? 'active-card-title' : classes.cardTitle}`}>
            Visa Ending in 1111
          </span>
        </Col>
        <Col xs={6} className="d-flex justify-content-end mt-1">
          <div>
            <img src={iconEdit} />
          </div>
          <div className="ml-2 label">Edit</div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
          <Row>
            <Col xs={6} sm={12} className="card-label">
              Name on Card
            </Col>
            <Col xs={6} sm={12} className="card-value">
              {address.name}
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={12} className="card-label">
              Expired On
            </Col>
            <Col xs={6} sm={12} className="card-value">
              02/22
            </Col>
          </Row>
        </Col>
        <Col sm={6}>
          <Row>
            <Col xs={6} sm={12} className="card-label">
              Billing Address
            </Col>
            <Col xs={6} sm={12} className="card-value">
              <div>
                {address.line_1}
                <br />
                {address.line_2}
                <br />
                {address.city},{address.county}
                <br />
                {address.country}
                <br />
                {address.postcode}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Form className="mt-3">
        <FormGroup row>
          <Label sm={3} className="card-label">
            Enter CVV
          </Label>
          <Col sm={5}>
            <Input type="text" placeholder="CVV" />
          </Col>
        </FormGroup>
      </Form>
      <Row className="mt-3">
        <Col xs={9}>
          <CustomInput
            id={`bill-${id}`}
            type="checkbox"
            className="checkbox"
            label="Use Billing Address"
            checked={active}
            onClick={() => setBillAdd(id)}
          />
        </Col>
        <Col xs={3} className="d-flex justify-content-end" style={{flexFlow: ' wrap-reverse'}}>
          <img src={Visa} height="21" width="62" />
        </Col>
      </Row>
    </div>
  )
}

BillingCard.propTypes = {
  id: PropTypes.number,
  active: PropTypes.bool,
  address: PropTypes.object,
  setBillAdd: PropTypes.func,
}

export default BillingCard
