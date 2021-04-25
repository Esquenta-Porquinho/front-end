DEV  = "dev/docker-compose.yml"
PROD = "prod/docker-compose.yml"

up.dev:
	docker-compose -f $(DEV) up -d --build

down.dev:
	docker-compose -f $(DEV) down

up.prod:
	docker-compose -f $(PROD) up -d --build

down.prod:
	docker-compose -f $(PROD) down


clean:
	docker ps -a | grep "pig" | awk '{print $1}' | xargs docker container rm
	docker images | grep "pig" | awk '{print $1}' | xargs docker rmi
