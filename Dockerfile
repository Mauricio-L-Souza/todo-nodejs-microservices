FROM node:22

WORKDIR /app


COPY entrypoint.sh .


CMD [ "sh", "entrypoint.sh" ]