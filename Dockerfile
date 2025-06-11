FROM node:20-alpine as build-stage

WORKDIR /app

RUN apk add --no-cache python3 make g++ git

RUN git clone --branch master https://github.com/slnnzmtl/Vue-Personal-Portfolio.git .

RUN npm install

RUN npm run build

FROM nginx:1.25-alpine as production-stage

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=build-stage /app/dist/ /usr/share/nginx/html/

COPY nginx.main.conf /etc/nginx/nginx.conf
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

RUN mkdir -p /run/nginx && \
    chown -R appuser:appgroup /usr/share/nginx/html /var/log/nginx /var/cache/nginx /run/nginx && \
    chmod -R 755 /usr/share/nginx/html /var/log/nginx /var/cache/nginx /run/nginx

USER appuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]