import http from '../index'

/**
 * @description 获取订单列表
 * @url /order/list
 * @method get
 * 
 * @param { Number } currentPage
 * @param { Number } pageSize
 * 
 */
export function orderList(params) {
    return http.get('/order/list', { params })
}


export function edit(params) {
    return http.post('/order/edit',  params )
}