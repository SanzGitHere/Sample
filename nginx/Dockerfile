# eight25-assignment/nginx/Dockerfile
FROM nginx:latest

# Remove the default site config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom config
COPY default.conf /etc/nginx/conf.d/

# Expose container port 80
EXPOSE 80
