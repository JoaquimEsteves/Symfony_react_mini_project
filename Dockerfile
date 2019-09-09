FROM thecodingmachine/php:7.2-v2-fpm

# Most of the dockerfile was "appropriated" from an existing docker file who's authors are:
# Julien Neuhart <j.neuhart@thecodingmachine.com>
# David Négrier <d.negrier@thecodingmachine.com>
# Check the github page: https://github.com/thecodingmachine/docker-images-php

USER root

# Installs node 12.x, and latest npm
RUN apt-get update && \
    apt-get install -y --no-install-recommends gnupg && \
    curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get update && \
    apt-get install -y --no-install-recommends nodejs && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends yarn && \
    npm install -g npm


# Installs wget so we can install symfony
# Symfony is placed in: /root/.symfony/bin/symfony
# Stricly not necessary, as we use composer. But comes in handy
RUN apt install wget && \
    wget https://get.symfony.com/cli/installer -O - | bash

# Copy the base files over, we use compose volumes in the yml file but it's still useful to copy them here so we don't get directory does't exist when updating
COPY ./back-end /symfony-and-react/back-end/
COPY ./front-end /symfony-and-react/front-end/

WORKDIR /symfony-and-react/

# Install all of the necessary dependencies
RUN npm --prefix /symfony-and-react/front-end/ install && \
    npm --prefix /symfony-and-react/front-end/ update && \
    composer install -d /symfony-and-react/back-end/server/


EXPOSE 8000
