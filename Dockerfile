FROM node:24-alpine
ENV NODE_ENV=development
WORKDIR /nextapptest
COPY package.json yarn.lock ./
RUN corepack yarn@1.22.22 install --frozen-lockfile && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /nextapptest
USER node
CMD ["npm", "run", "dev"]
