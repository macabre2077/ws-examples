process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const WebSocket = require('ws');
const ws = new WebSocket( 'wss://localhost:3333/' );

ws.on('open', () => {
    for (let i = 0; i < 10; i++) {
        ws.send('{"id":'+i+',"method":"ping","params":{"ping":'+i+'}}');
    }
})
        
setTimeout(() => {
    ws.close()

    setTimeout(() => {
        process.exit()
    }, 800)
}, 800)
