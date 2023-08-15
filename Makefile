SHELL := /bin/bash

build: # build
	zola build

b:
	make build

deploy:
	make b
	./deploy.sh

d:
	make deploy

s: # serve
	zola serve
