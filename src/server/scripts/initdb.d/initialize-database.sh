#!/usr/bin/env bash

set -e

psql -v ON_ERROR_STOP=1 \
  --username "$POSTGRES_USER" \
  --dbname "$POSTGRES_DB" <<-EOSQL
CREATE DATABASE todolist ENCODING UTF8;
GRANT ALL PRIVILEGES ON DATABASE todolist TO $POSTGRES_USER;
EOSQL