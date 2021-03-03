<h1>FlyDevs Challenge</h1>

<h2>Description</h2>
<p>This is an Apollo-Express-GraphQL server with MongoDB. It also it has a docker-compose.yml where it runs node with mongoDB images</p>

<h3>Environment Variables</h3>
<p>SECRET = here you put your secret for the jsonWebToken hash </p>
<p>PORT = select the port of your choice </p>
<p>MODE = for development mode this variable should be setup as: dev </p>
<p>DB = mongodb://localhost:27017/"<"your database">" </p>

<h3>Setting up</h3>
<p>Clone this repository and run the next commands in root location </p>
<ul>
    <li>docker-compose build</li>
</ul>

<h4>GraphQL Querys</h4>
<p> On file "src/docs" are all the querys and mutations documanted for easy use</p>

<h5>Dependencies used</h5>
<ul>
    <li>apollo-server-express</li>
    <li>grapqhl</li>
    <li>bcryptjs</li>
    <li>body-parser</li>
    <li>consola</li>
    <li>dotenv</li>
    <li>esm</li>
    <li>express</li>
    <li>jsonwebtoken</li>
    <li>lodash</li>
    <li>mongoose</li>
    <li>nodemon</li>
</ul>