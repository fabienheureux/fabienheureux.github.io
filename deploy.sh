#!/usr/bin/env bash

source .awsrc
aws s3 sync ./public/ s3://fabien.cool
