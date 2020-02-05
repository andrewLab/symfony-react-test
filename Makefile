it: composed  migrated fixtured
composed:
	docker-compose up -d --build --force-recreate
migrated:
	docker-compose run app php bin/console doctrine:migrations:migrate -n
fixtured:
	docker-compose run app php bin/console doctrine:fixtures:load -n