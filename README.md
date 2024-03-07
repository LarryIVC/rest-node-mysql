# To config properly

- Add a `.env` file in the root of the project with the following content:

```
PORT='1234'
DB_HOST='localhost'
DB_USER='my_user'
DB_PASSWORD='my_password'
DB_DATABASE='my_database'
DB_PORT='mysql_port'
```

- replace whit your own data, and PORT is the port where the server will run.

- [live version](https://rest-node-mysql-production.up.railway.app/api/v1)

- End Points:
  - /api/v1/ping (GET)
  - /api/v1/employees (GET, POST)
  - /api/v1/employees/:id (GET, PATCH, DELETE)
  