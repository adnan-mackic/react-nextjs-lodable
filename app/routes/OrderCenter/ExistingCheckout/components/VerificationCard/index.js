import React from 'react'
import {Card, CardBody, CustomInput} from 'reactstrap'
import PropTypes from 'prop-types'

const VerificationsCard = ({register, errors}) => {
  return (
    <Card className="my-3">
      <CardBody>
        <span className="sub-title">Terms of Use</span>
        <hr />
        <div className="d-flex flex-column">
          <div className="mb-3 term-line">
            <div className="sub-heading my-3">Age Verification</div>
            <CustomInput
              type="checkbox"
              id="age"
              name="age"
              label="I am at least 21 years of age"
              innerRef={register({required: 'This field is required'})}
            />
            {errors && errors.age ? <span className="text-danger">{errors.age.message}</span> : ''}
          </div>
          <div className="mb-4">
            <div className="sub-heading my-3">Terms and Conditions</div>
            <p className="text-justify term-line">
              These Terms of Use apply to your use of the Scout & Cellar site at ScoutandCellar.com
              (the “Site”), and to content, information, products, services and materials on the
              Site (collectively, “Content”). Read the full Terms and Conditions{' '}
              <span className="here-text">here</span>.
            </p>
            <div className="term-line">
              <CustomInput
                type="checkbox"
                id="terms"
                name="terms"
                label="I have read and agree to the Terms of Use"
                innerRef={register({required: 'This field is required'})}
              />
              {errors && errors.terms ? (
                <span className="text-danger">{errors.terms.message}</span>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="mb-3">
            <div className="sub-heading my-3">California Residents - PROP 65 WARNING</div>
            <p className="text-justify term-line">
              <span className="warn">WARNING:</span> Drinking distilled spirits, beer, coolers, wine
              and other alcoholic beverages may increase cancer risk, and, during pregnancy, can
              cause birth defects. For more information go to www.P65Warnings.ca.gov/alcohol.
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

VerificationsCard.propTypes = {
  register: PropTypes.any,
  errors: PropTypes.object,
}

export default VerificationsCard
