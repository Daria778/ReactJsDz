export const logger = (store) => (next) => (action) => {
    console.log('dispatching', action);
    if (action.type === "INCREMENT") {
        action.payload = '! ! !'
    }
    return next(action)
}

export const midleware = store => next => action => {
    console.log('object');
    setTimeout('kfk', 1000)
}