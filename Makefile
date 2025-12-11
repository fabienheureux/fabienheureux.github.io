SHELL := /bin/bash

build: # build
	zola build

b:
	make build

deploy:
	make b
	npx dxfl deploy fabien.cool ./public -y

d:
	make deploy

s: # serve
	zola serve
