### STAGE 1: Build ###
FROM node:12.16.1-alpine3.9 AS build
COPY . ./DASUI
WORKDIR /DASUI
RUN npm install --silent @angular/cli@9.0.7
RUN $(npm bin)/ng build --prod
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/
COPY --from=build /DASUI/dist/DASUI/ /usr/share/nginx/html

############################################### Once Jekins PipeLine Ready
### STAGE 1: Copy compiled files ###
#FROM node:12.16.1-alpine3.9 AS build
#COPY ./DASUI/dist ./DASUI
#WORKDIR /DASUI
### STAGE 2: Run ###
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/
#COPY --from=build  ./DASUI /usr/share/nginx/html