# Backend Setup

## Install Strapi

`npx create-strapi-app@latest backend`

`npm run develop`

`npm i @strapi/plugin-graphql`

### Open graphQL

`http://localhost:1337/graphql`

### Cloudinary

1. [Get the API Key](https://cloudinary.com/)

    Add NAME and KEY to the env file.

2. Add Cloudinary to Strapi [link](https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application)

3. Install the Cloudinary plugin

4. Upload the images to Strapi and it'll store it into Cloudinary

### NextJS

1. Create frontend for the application and run

    `npx create-next-app@latest`

2. 