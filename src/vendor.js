/**
 * Created by xiaolin on 17/2/9.
 */
// ------------------------------------
// Resource Import
// ------------------------------------
require.ensure([],
    function(require) {

        require('react')
        require('react-redux')
        require('react-router')
        require('redux')
        require('redux-actions')
        require('redux-simple-router')
        require('dva')
        require('fastclick')
        require('recharts')

        require('./')

    }
)