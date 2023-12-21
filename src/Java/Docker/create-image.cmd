docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 08-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 08-java/app ../../..
