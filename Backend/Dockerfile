FROM node:16-alpine

WORKDIR /app

# Copy the application files first
COPY . /app

# Copy package.json separately to avoid caching issues with npm install
COPY package.json .

# Install dependencies
RUN npm install

EXPOSE 8001

CMD [ "npm", "start" ]
