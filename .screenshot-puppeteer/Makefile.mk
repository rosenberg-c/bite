IMAGE ?= local_screenshot-cli
URL ?= http://host.docker.internal:5199
OUTPUT ?= docs/screenshots/screenshot.png
WIDTH ?= 1440
HEIGHT ?= 900

.PHONY: build-puppeteer screenshot-puppeteer clean-puppeteer

build-puppeteer:
	docker build -t $(IMAGE) -f .screenshot-puppeteer/Dockerfile .screenshot-puppeteer

screenshot-puppeteer: build-puppeteer
	docker run --rm --init \
		--network host \
		--user "$$(id -u):$$(id -g)" \
		-e HOME=/tmp \
		-v "$(CURDIR):/output" \
		$(IMAGE) \
		"$(URL)" "$(OUTPUT)" $(WIDTH) $(HEIGHT)

clean-puppeteer:
	docker image rm $(IMAGE)
