FROM node:22-alpine3.19 AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --verbose --no-audit
COPY . .
RUN npm run build

FROM nginx:1.27.1
COPY --from=build /app/dist /usr/share/nginx/html
COPY .docker/nginx-cappuccino-app.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
