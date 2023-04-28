SHELL := /bin/bash

build: # build
	zola build

b:
	make build

deploy:
	source .awsrc
	aws s3 sync ./public/ s3://fabien.cool

s: # serve
	zola serve
