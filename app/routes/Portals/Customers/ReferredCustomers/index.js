import React, {useEffect, useContext, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Row, Col, Card, ListGroup, CardTitle} from 'reactstrap'
import CommonDemo from 'routes/components/CommonDemo'
import ResultTable from './ResultTable'
import AppContext from 'components/App/AppContext'
import PaginationList from 'routes/components/PaginationList/index'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  subtitle: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

const ReferredCustomerCenter = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()

  useEffect(() => {
    setTitle('Referred Customer Center')
  }, [])

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="ml-2 d-flex align-items-center">
          <p className={classes.title}>Referred Customer Center</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <CommonDemo
            item="success"
            wrapperClass="mx-0"
            content="This is where you can see the list of customers you referred to the company. Use the Search box to find a specific customer."
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="">
          <Card lg={12} md={12} sm={12} xs={12}>
            <CardTitle tag="h5" className="mx-3 border-bottom">
              <Row>
                <Col className="mt-3">
                  <p className={classes.subtitle}>Referred Customer Center</p>
                </Col>
                <Col xs={12} sm={12} md={3} className="mt-2">
                  <CustomSearch />
                </Col>
              </Row>
            </CardTitle>
            <div>
              <ListGroup>
                <ResultTable />
                <PaginationList />
              </ListGroup>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ReferredCustomerCenter
