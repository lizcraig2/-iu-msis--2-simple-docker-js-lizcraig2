FROM php:7.4-apache

LABEL maintainer="Liz Craig"

RUN docker-php-ext-install pdo_mysql

COPY app /srv/app

# PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
