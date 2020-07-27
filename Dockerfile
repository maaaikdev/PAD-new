FROM registry.access.redhat.com/ubi7/ubi 
LABEL maintainer="Team DevOps Experian"
ARG PROXY=http://10.96.215.26:3128 
ARG NO_PROXY=bitbucketglobal.experian.local
ENV http_proxy $PROXY
ENV https_proxy $PROXY
ENV no_proxy $NO_PROXY
# Update & Upgrade S.O
RUN export http_proxy=$PROXY && \
  yum -y update && \
  yum -y upgrade
RUN mkdir -p /var/log/nginx/
RUN chmod -R 777 /var/log/nginx/
RUN touch /var/log/nginx/error.log
RUN chmod 777 /var/log/nginx/error.log
ENV BUILD_ENV @@BUILD_ENV@@
# Default to UTF-8 file.encoding
ENV LANG C.UTF-8
ENV nginxversion="1.16.1-1" \
    os="centos" \
    osversion="7" \
    elversion="7"
RUN yum install -y wget openssl sed &&\
    yum -y autoremove &&\
    yum clean all &&\
    wget http://nginx.org/packages/$os/$osversion/x86_64/RPMS/nginx-$nginxversion.el$elversion.ngx.x86_64.rpm &&\
    rpm -iv nginx-$nginxversion.el$elversion.ngx.x86_64.rpm
RUN mkdir -p /tmp
RUN chmod -R 777 /tmp
RUN echo $BUILD_ENV
RUN chmod -R 777 /etc/nginx/conf.d/
RUN ls -ltr /etc/nginx/conf.d/
RUN touch /var/log/nginx/access.log
RUN chmod 777 /var/log/nginx/access.log
COPY nginx/default_$BUILD_ENV /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf
RUN touch /tmp/nginx.pid
RUN chmod 777 /tmp/nginx.pid
COPY nginx/nginx.conf /etc/nginx/nginx.conf

USER nobody
COPY /dist/ac-cthupon-ui/$BUILD_ENV /var/www/dist/ac-cthupon-ui
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]