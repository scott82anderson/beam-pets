FROM beamaustralia/php:8.0-caddy

COPY . .

RUN composer install
RUN composer dump-autoload --optimize
RUN chown -R www-data:www-data .
