# Social Media API

## Table of contents
*[Introduction](#introduction)
*[Technologies](#technologies-used)
*[Usage](#usage)
*[License](#License)
*[Screenshots](#Screenshots)
*[Deployment](#Deployment)
*[Future](#Future)
*[Credits](#Credits)
*[Contact](#contact)

## Introduction
This api is meant to store datae using a NoSql approach such as mongoosedb, containing pertinent information for a social media company to grab and make use of such as usernae, email, thoughts, and friends.

## Technologies Used
Javascript
[nodemon](https://www.npmjs.com/package/nodemon)
[Express](https://www.npmjs.com/package/inquirer)
[Mongoosedb](https://www.mongodb.com/docs/manual/reference/)
[Insomnia](https://insomnia.rest/products/insomnia)

## Usage
Be sure to have MongoDB installed on your machine. Follow the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) to install MongoDB locally. Once done make sure to `npm i` the package.json in order to intall the necessary packages. Once installed make sure to `npm run seed` to seed your local mongo datbase. After seeding `npm run dev` will properly activate your server. follow the deployment video below on how to access the data via insomnia app.


## Deployment
-[Github](https://github.com/ikorman12/socialMedia-app)
-[Live-deployment]()

## Screenshots
![npm-run-watch]()

## Future
Future implementations of this api would be to collect more data by linking a front end aspect to it where users can input data so we can grab that value and input it into the api. Once collected we can use the data to create an algorithm for a more pleasureable UI/UX.

## Credits
Igor Korman

## Contact
Feel free to contact me at [ikorman12@gmail.com](ikorman12@gmail.com) or message me on [Github]](https://github.com/ikorman12)

## License
MIT License

Copyright (c) 2022 Igor Korman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
