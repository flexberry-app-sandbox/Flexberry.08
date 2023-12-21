docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 08/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 08/app ../..
