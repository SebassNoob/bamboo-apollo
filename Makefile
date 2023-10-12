
.PHONY:
.ONESHELL:

SHELL := bash

ifeq ($(version),)
	DC_CMD := docker compose -f docker-compose.dev.yml
else
	DC_CMD := docker compose -f docker-compose.$(version).yml
	tag := --$(version)
endif

run:
	$(DC_CMD) -v down
	$(DC_CMD) build 
	$(DC_CMD) watch 
	

down:
	$(DC_CMD) -v down

prettier:
	bunx prettier . --write
