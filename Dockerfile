FROM node:21 AS builder

ENV APP_HOME=vite-app \
  VITE_API_URL="https://impostor-game-api.onrender.com"

COPY . ./

RUN npm ci

ADD . $APP_HOME

RUN npm run build



FROM nginx:alpine

COPY --from=builder $APP_HOME/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
