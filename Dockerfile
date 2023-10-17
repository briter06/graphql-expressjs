# docker build . -t <image_name:tag> --no-cache
# docker run -d -p 3000:3000 -it --rm <image_name:tag>
# docker stop <container_id>

FROM node:14-alpine
ARG PORT=3000

# Env Variables
ENV PORT=$PORT
ENV GRAPHIQL=TRUE
# Create app directory
WORKDIR /app

# Copy files and builder
COPY . .
RUN npm install
RUN npm run build

# Remove source code
RUN rm -r src
RUN rm Dockerfile
RUN rm tslint.json

# Expose port
EXPOSE $PORT

# Exec
CMD [ "npm", "run", "compiled:start" ]