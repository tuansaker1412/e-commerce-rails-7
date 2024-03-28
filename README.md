# E-commerce app using rails 7.1.1, Ruby 3.2.1, hotwire, bootstrapCSS, stripe and postgresql.

Main Features:
- Auth
- Admin Product Management System
- Admin dashboard w/Chart.js graph
- User storefront
- Local storage based Cart
- User Checkout w/Stripe

#### Write to .env file your database credentials including host, because we’ll have 2 types of host: localhost and db (for Docker environment)
```
DATABASE_USERNAME=<your_db_username>
DATABASE_PASSWORD=<your_db_password>
DATABASE_HOST=localhost
```

#### Build the image, create & migrate the database and compose the app:
```
docker-compose build
docker-compose run api rails db:create db:migrate
docker-compose up -d
```
#### Docker compose stop the app:
```
docker-compose down
```

#### You can see your Rails app in the Docker environment by clicking http://0.0.0.0:3000/. Congrats 🎉!
