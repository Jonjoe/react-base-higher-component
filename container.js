/*
  | Base Container ================================================
  -----------------------------------------------------------------
  Basic react higher roder component.
*/

// Base Imports ====================================================
// -----------------------------------------------------------------
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// ... Imports =====================================================
// -----------------------------------------------------------------
// import 'something'

// Component Definition ============================================
// -----------------------------------------------------------------
class BaseContainer extends Component {
  constructor () {
    // --- Props:
    //        prop1 - STRING (default 'defaultValue')
    //        prop2 - STRING (default 'defaultValue')
    //        prop3 - STRING (default 'defaultValue')
    super(props)

    this.state = {}
  }

  componentDidMount () {
    // Do somthing
  }

  render () {
    <p styles={Styles}>This is a base Component</p>
  }
}

// Component Property Validations ==================================
// -----------------------------------------------------------------
BaseComponent.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string
}

// Redux Store Mapping =============================================
// -----------------------------------------------------------------
const mapStateToProps = (state) => {
  return {}
}

// Redux Dispatch Mapping ==========================================
// -----------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

// Export ==========================================================
export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer)
