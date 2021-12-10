import { showTabs, selectTab } from '../common/tab/tabActions'

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        //getList(),
        //nitialize('billingCycleForm', INITIAL_VALUES)
    ]
}