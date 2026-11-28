include .screenshot-puppeteer/Makefile.mk
include .screenshot-server/Makefile.mk

VP ?= vp

.PHONY: ready-check
ready-check:
	$(VP) check
	$(VP) test

.PHONY: ready-docs
ready-docs:
	$(MAKE) screenshot-server-start
	$(MAKE) screenshot-puppeteer
	$(MAKE) screenshot-server-stop

.PHONY: build
build:
	$(VP) run build

.PHONY: ready
ready: ready-check build ready-docs
