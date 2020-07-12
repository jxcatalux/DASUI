### STAGE 1: Build ###
FROM node:12.16.1-alpine3.9 AS build
#COPY . ./DASUI
#WORKDIR /DASUI
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

##stateg 2
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/DASUI /usr/share/nginx/html

#RUN npm install --silent @angular/cli@9.0.7
#RUN $(npm bin)/ng build --prod
### STAGE 2: Run ###
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/
#COPY --from=build /DASUI/dist/DASUI/ /usr/share/nginx/html

############################################### Once Jekins PipeLine Ready
### STAGE 1: Copy compiled files ###
#FROM node:12.16.1-alpine3.9 AS build
#COPY ./DASUI/dist ./DASUI
#WORKDIR /DASUI
### STAGE 2: Run ###
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/
#COPY --from=build  ./DASUI /usr/share/nginx/html

