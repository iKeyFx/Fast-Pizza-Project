import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseQuantity, increaseQuantity } from "./cartSlice"

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch()

    function handleQuantityIncrease() {
        dispatch(increaseQuantity(pizzaId))
    }
    function handleQuantityDecrease() {
        dispatch(decreaseQuantity(pizzaId))
    }
    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button onClick={handleQuantityDecrease} type="round">-</Button>
            <span>{currentQuantity}</span>
            <Button onClick={handleQuantityIncrease} type="round">+</Button>
        </div>
    )
}

export default UpdateItemQuantity
