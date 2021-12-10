import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { showTabs, selectTab } from '../common/tab/tabActions'
import consts from '../consts'

const BASE_URL = consts.PURCHASE_API_URL + '/v1/products/'

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        // getList(),
        // initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

export function getList() {
    const request = axios.get(BASE_URL)
    return {
        type: 'PRODUCTS_FETCHED',
        payload: request
    }
}

export function showUpdate(product) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('productForm', product)
    ]
}

export function showDelete(product) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('productForm', product)
    ]
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    values.type = {
        "id": 1,
        "name": "Arroz"
    }
    values.brand = {
        "id": 2,
        "name": "Tio João"
    }
    values.measurement = "KG"
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error));
        }) 
    }
}