const DECREMENT = "decrement"
const INCREMENT = "increment"

const add = (id) => {
    return {
        type: DECREMENT,
        id
    }
}
const sub = (id) => {
    return {
        type: INCREMENT,
        id
    }
}
export {
    add,
    sub
}