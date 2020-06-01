
const exec = require('child_process').exec

exec('node ./packages/neteasecloud_api/app.js', (_err, _stdout, stderr) => {
    if (!_err) {
        console.error(`API调用执行出错: ${_err}`)
        return
    }
    console.log(`stdout: ${_stdout}`)
    console.log(`stderr: ${stderr}`)
})
