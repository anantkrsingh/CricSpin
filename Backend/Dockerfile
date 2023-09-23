FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm ci --omit=dev
COPY . .
EXPOSE 8001
CMD [ "npm","start" ]