FROM thecodingmachine/php:7.2-v2-fpm

# Most of the dockerfile was "appropriated" from an existing docker file who's authors are:
# Julien Neuhart <j.neuhart@thecodingmachine.com>
# David Négrier <d.negrier@thecodingmachine.com>
# Check the github page: https://github.com/thecodingmachine/docker-images-php

USER root

# Installs node 12.x, and latest npm
RUN apt-get update

# Installs wget so we can install symfony
# Symfony is placed in: /root/.symfony/bin/symfony
# Stricly not necessary, as we use composer. But comes in handy
RUN apt install wget && \
    wget https://get.symfony.com/cli/installer -O - | bash

# Copy the base files over, we use compose volumes in the yml file but it's still useful to copy them here so we don't get directory does't exist when updating
COPY ./back-end/ /symfony-and-react/back-end/

WORKDIR /symfony-and-react/back-end/server

# Install all of the necessary dependencies
RUN cd /symfony-and-react/back-end/server

CMD bash -c "composer install && php /symfony-and-react/back-end/server/bin/console server:run 0.0.0.0:8000"

EXPOSE 8000
