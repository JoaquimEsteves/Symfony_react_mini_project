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

# Copy the base files over, we use compose volumes in the yml file but it's still useful to copy them here so we don't get directory does't exist when updating
COPY ./front-end /home/usr/symfony-and-react/front-end/

RUN cd /home/usr/symfony-and-react/front-end/ && sudo npm install && sudo npm update

WORKDIR /home/usr/symfony-and-react/front-end/

# Install all of the necessary dependencies
CMD bash -c "npm run serve"