import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete } from './productActions'

class ProductList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(p => (
            <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.type.name}</td>
                <td>{p.brand.name}</td>
                <td>{p.measurement}</td>
                <td>
                    <button className="btn btn-warning" 
                            onClick={() => this.props.showUpdate(p)}>
                                <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" 
                            onClick={() => this.props.showDelete(p)}>
                                <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Marca</th>
                        <th>Unidade de Medida</th>
                        <th className='table-actions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({list: state.product.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)