import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'

const ButtonRow = () => {
    return (
        <Row>
            <Col sm="auto mt-2" className="btn-ques">Who is paying?</Col>
            <Col sm="auto" className="my-2 my-sm-0">
                <CommonButton title="Order Owner" buttonType="payOwnerButton"/>
            </Col>
            <Col sm="auto">
                <CommonButton title="Pay Later" buttonType="payOwnerButton" wrapperClass="pay-later"/>
            </Col>
        </Row>
    )
}

export default ButtonRow
