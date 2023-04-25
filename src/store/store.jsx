import { configureStore} from '@reduxjs/toolkit'
import cart from './cartStore'
import productData from './productStore'


export default configureStore({
  reducer: {
    cart: cart.reducer,
    productData: productData.reducer,
  }
})