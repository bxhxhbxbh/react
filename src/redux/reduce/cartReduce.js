import {add, sub} from "../action/cartAction"
const initState = [
    {
        id: 1,
        name: '小米',
        price: 19000,
        amount: 20
    },
    {
        id: 2,
        name: '红米',
        price: 900,
        amount: 12
    }
]

const cartReduce = (state = initState, action) => {
    console.log('action', action)
    switch(action.type) {
        case sub().type:
            return state.map(item => {
                if(item.id === action.id) {
                    item.amount -= 1;
                }
                return item
            })
            break;
        case add().type:
            return state.map(item => {
                if(item.id === action.id) {
                    item.amount += 1;
                }
                return item
            })
            break;    
        default:
            return state;
    }

}

export default cartReduce