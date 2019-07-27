FROM node:latest
ADD . /app
WORKDIR /app
EXPOSE 3000
RUN npm i 
RUN npm run build-ts
ENTRYPOINT ["npm","start"]
