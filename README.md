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


  # Aknowledgements
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [MySQL](https://www.mysql.com/)
  - [dotenv](https://www.npmjs.com/package/dotenv)

  # 🙏 Acknowledgments
  - I would like to thank [@FaztTech](https://www.youtube.com/@FaztTech) for his [tutorial](https://youtu.be/3dSkc-DIM74?si=kVO7kUvhYCkw44Fu) based it on.