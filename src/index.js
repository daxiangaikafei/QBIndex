/**
 * Created by xiaolin on 16/12/26.
 */
import dva from 'dva'

import model from './model'
import router from './routes'

const app = dva()

app.model(model)

// 3. Router
app.router(router)

app.start('.page-container')
