composed:
	docker-compose up -d --build --force-recreate
db: migrated fixtured
migrated:
	docker-compose run app php bin/console doctrine:migrations:migrate -n
fixtured:
	docker-compose run app php bin/console doctrine:fixtures:load -n