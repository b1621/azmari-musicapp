FROM node:20.9.0
RUN mkdir -p /opt/app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7777
CMD [ "npm", "run", "server"]