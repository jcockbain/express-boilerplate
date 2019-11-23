FROM node:8

# Directory
ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Install dependencies
COPY package*.json ./
RUN npm install

# For production
# RUN npm install --production

# Copy project files
COPY . .

# Expose running port
EXPOSE 3000

# Run the project
CMD ["npm", "start"]