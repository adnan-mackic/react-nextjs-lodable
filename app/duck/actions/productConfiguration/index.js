import * as t from 'duck/constants/productConfiguration'

export function setProductTypeToEdit(payload) {
  return {type: t.SET_PRODUCT_TYPE_TO_EDIT, payload}
}

export function setProductClassificationToEdit(payload) {
  return {type: t.SET_PRODUCT_CLASSIFICATION_TO_EDIT, payload}
}
