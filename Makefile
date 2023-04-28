SHELL := /bin/bash

build: # build
	zola build

b:
	make build

deploy:
	./deploy.sh

s: # serve
	zola serve
