import React from 'react'
import {Row, Col, ButtonGroup, Button, Badge} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router'

const useStyles = makeStyles({
  badgeButton: {
    height: '40px',
    '& .btn': {
      backgroundColor: '#27BFA3',
      borderColor: '#27BFA3',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#27BFA3 !important',
        borderColor: '#27BFA3',
        boxShadow: 'none',
      },
      '&:focus': {
        backgroundColor: '#27BFA3 !important',
        borderColor: '#27BFA3',
        boxShadow: 'none',
      },
      fontSize: 13,
      fontFamily: 'SFUIText-Heavy',
    },
    '& .badge': {
      backgroundColor: 'white',
      color: '#27BFA3',
      borderRadius: '7.5px',
    },
    '& .fa-lg': {
      verticalAlign: '8% !important',
    },
  },
})

const Heading = () => {
  const classes = useStyles()

  const itemCount = useSelector(({cart}) => cart.get('itemCount', 0))

  const history = useHistory()

  const routeChange = () => {
    let path = '/order-center/create-new-order/shopping/viewcart'
    history.push(path)
  }

  return (
    <Row className="mt-3 mt-md-0">
      <Col sm={6}>
        <h2 className="title">Checkout</h2>
      </Col>
      <Col sm={6} className="d-flex justify-content-sm-end mt-1">
        <ButtonGroup className={`${classes.badgeButton}`} onClick={routeChange}>
          <Button className="pr-2">
            <i className="fa fa-shopping-cart"></i>
          </Button>
          <Button className={`px-0`} onClick={() => {}}>
            My Cart
          </Button>
          <Button>{itemCount}</Button>
          <Button style={{marginLeft: '1px'}} onClick={() => {}}>
            <i className="fa fa-sort-desc fa-lg"></i>
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  )
}

export default Heading
