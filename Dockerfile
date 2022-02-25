FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /nextapptest
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --development --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /nextapptest
USER node
CMD ["npm", "run", "dev"]
