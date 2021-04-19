FROM nexus3-optima.corp.amdocs.com:8097/openjdk:8u131-jre

ARG http_proxy=http://10.232.233.70:8080
ARG https_proxy=http://10.232.233.70:8080
ARG no_proxy=.corp.amdocs.com

WORKDIR /usr/src/app

ADD jawad-demo.jar  jawad-demo.jar
ADD . .
EXPOSE 9095
CMD ["java", "-jar", "jawad-demo.jar"]
