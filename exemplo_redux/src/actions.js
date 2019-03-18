//ACTION TYPE
export const HELLO = 'HELLO'

//ACTIONS CREATORS
export const hello = (data) => {
    console.log('Dados Hello ->', data)
    return {
        type: HELLO,
        payload: {
            msg: 'Ola, Redux Action',
            data
        }
    }
}