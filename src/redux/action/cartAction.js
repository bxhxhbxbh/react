const DECREMENT = "decrement"
const INCREMENT = "increment"
const HIDE_NOTICE = "hide_notice"

const add = (id) => {
    return {
        type: INCREMENT,
        id
    }
}
const sub = (id) => {
    return {
        type: DECREMENT,
        id
    }
}
const hideNotice = (id) => {
    return {
        type: HIDE_NOTICE,
        id
    }
}
const asyncAdd = (id) => (dispatch) => {
    // new Promise((resolve, reject) => {
    //     resolve()
    // }).then(res => {
    //     dispatch(
    //         {
    //             type: INCREMENT,
    //             id
    //         }
    //     )
    // })
    window.setTimeout(() => {
        dispatch(
            {
                type: INCREMENT,
                id
            }
        )
    }, 100)
}
export {
    add,
    sub,
    hideNotice,
    asyncAdd
}