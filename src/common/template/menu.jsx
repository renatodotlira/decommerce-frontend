import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd' />
            <MenuItem path='#purchase' label='Compras' icon='shopping-cart' />
            <MenuItem path='#product' label='Produtos' icon='cube' />
        </MenuTree>
    </ul>
)