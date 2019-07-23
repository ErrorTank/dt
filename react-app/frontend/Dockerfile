FROM node:alpine as builder
WORKDIR '/myApp'
COPY package.json .
RUN npm install
COPY . .
CMD npm run build

FROM nginx
COPY --from=builder /myApp/build /usr/share/nginx/html