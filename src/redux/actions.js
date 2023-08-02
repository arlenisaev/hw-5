import { types } from "./types";

function preloaderOn () {
   return {
      type: types.PRELOADER_ON
   }
}

function preloaderOff () {
   return {
      type: types.PRELOADER_OFF
   }
}

export function addUserAction (users) {
   return async function (dispatch) {
      dispatch(preloaderOn())
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'appLication/json'
         },
         body: JSON.stringify(users)
      }
      const response = await fetch('https://jsonplaceholder.typicode.com/users', options)

      if (response.status === 201) {
         dispatch(preloaderOff())
      }
      
      if (response.status === 404) {
         dispatch(preloaderOn())
      }

   }
}

function getUsersSuccess(users) {
   return {
      type: types.GET_USERS_SUCCESS,
      payload: users
   }
}
function getUsersFailuer(error) {
   return {
      type: types.GET_USERS_FAILURE,
      payload: error,
   }
}

export function getUsersAction() {
   return async function (dispatch) {
      dispatch(preloaderOn())

      try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users')
         const data = await response.json()
         if (response.ok) {
            dispatch(getUsersSuccess(data))
         }else {
            dispatch(getUsersFailuer('Error fetchhing users'))
         }
      } catch (error) {
         dispatch(getUsersFailuer('Error fetchlng users'))
      } finally {
         dispatch(preloaderOff)
      }
   }
}

