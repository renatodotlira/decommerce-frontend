import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Purchase from '../purchase/purchase'
import Product from '../product/product'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} /> 
            <Route path='purchase' component={Purchase} /> 
            <Route path='product' component={Product} /> 
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)