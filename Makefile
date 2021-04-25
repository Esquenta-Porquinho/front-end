up.dev:
	docker-compose -f "dev/docker-compose.yml" up -d --build

up.prod:
	docker-compose -f "prod/docker-compose.yml" up -d --build
