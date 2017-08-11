/**
 * Created by xiaolin on 16/12/19.
 */
export default config => ({
    compiler_fail_on_warning : false,
    compiler_hash_type       : 'chunkhash',
    compiler_devtool         : null,
    compiler_stats           : {
        chunks : true,
        chunkModules : true,
        colors : true
    }
    ,compiler_public_path: ``
    //,compiler_public_path: `//${config.server_host}/mqbii/`
})
