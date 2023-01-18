# Setup

Setup pgadmin
```bash
$ sudo mkdir /var/lib/pgadmin
$ sudo mkdir /var/log/pgadmin
$ sudo chown $USER /var/lib/pgadmin
$ sudo chown $USER /var/log/pgadmin
$ python3 -m venv pgadmin4
$ source pgadmin4/bin/activate
```

Setup database
```bash
$ npm run infrastructure
```

Re-create database from scratch
```bash
$ docker-compose up --force-recreate
```

Configure application via `.env` file
```bash
TYPEORM_HOST = <hostname>
TYPEORM_USERNAME = <username>
TYPEORM_PASSWORD = <password>
TYPEORM_DATABASE = <database name>
TYPEORM_PORT = <port>
TYPEORM_LOGGING = <true|false>
APP_PORT = <port>
```

Start backend
```bash
$ npm start
```