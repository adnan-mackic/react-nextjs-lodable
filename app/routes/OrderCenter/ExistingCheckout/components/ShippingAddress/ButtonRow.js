import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'

const ButtonRow = () => {
    return (
        <Row>
            <Col sm="auto mt-2" className="btn-ques">Where is this order shipping?</Col>
            <Col sm="auto">
                <CommonButton title="Order Owner" buttonType="payOwnerButton" />
            </Col>
        </Row>
    )
}

export default ButtonRow
