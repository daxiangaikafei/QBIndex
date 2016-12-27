/**
 * Created by xiaolin on 16/12/15.
 */
import WebpackHotMiddleware from 'webpack-hot-middleware'
import applyExpressMiddleware from '../lib/apply-express-middleware'
const debug  = require('debug')('app:server:webpack-hot')

export default (compiler, opts) => {
    debug('Enable Webpack Hot Module Replacement (HMR).')

    const middleware = WebpackHotMiddleware(compiler, opts)
    return async function koaWebpackHMR (ctx, next) {
        let hasNext = await applyExpressMiddleware(middleware, ctx.req, ctx.res)

        if (hasNext && next) {
            await next()
        }
    }
}

