import React from 'react'
import iconEdit from 'images/commonIcons/edit-circle.svg'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/styles'
import {Row, Col, CustomInput} from 'reactstrap'

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

const ShippingCard = ({active, id, address, setShipAdd}) => {
  console.log('ShippingCard -> active', active)
  console.log('ShippingCard -> id', id)
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
      <div className="mt-2 card-value">
        {address.line_1}
        <br />
        {address.line_2}
        <br />
        {address.city},{address.county}
        <br />
        {address.country}
        <br />
        {address.postcode}
        <br />
      </div>
      <Row className="mt-3">
        <Col>
          <CustomInput
            id={`shipp-${id}`}
            className="checkbox"
            type="checkbox"
            label="Use Shipping Address"
            checked={active}
            onClick={() => setShipAdd(id)}
          />
        </Col>
      </Row>
    </div>
  )
}

ShippingCard.propTypes = {
  id: PropTypes.number,
  active: PropTypes.bool,
  address: PropTypes.object,
  setShipAdd: PropTypes.func,
}

export default ShippingCard
