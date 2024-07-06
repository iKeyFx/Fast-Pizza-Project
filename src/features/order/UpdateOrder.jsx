import { useFetcher } from 'react-router-dom'
import Button from '../../ui/Button'
import { updateOrder } from '../../services/apiRestaurant'

function UpdateOrder({order}) {
    const featcher = useFetcher()

    return (
        <featcher.Form method='PATCH' className='text-right'>
            <Button  type='primary'>Make Priority</Button>
        </featcher.Form>
    )
}

export async function action({request, params}) {
    const data = {priority: true}
    await updateOrder(params.orderId, data)
    return null
}
export default UpdateOrder
