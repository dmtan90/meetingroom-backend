// JUST OVERRIDE with My Config

// override db
if (process.env.MY_DB_HOST != null) {
    global.myConfig.mysql.host = process.env.MY_DB_HOST
}

// override host
if (process.env.MY_APP_HOST_PORT != null) {
    global.myConfig.server_port = process.env.MY_APP_HOST_PORT
}