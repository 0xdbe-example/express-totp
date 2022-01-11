# express-totp

This application is a demonstration prototype just to show how to use OTP with ExpressJS

## Install

- Install node modules

````console
$ npm install
````

- Run

````console
$ npm start
````

## Setup new device

- Open http://localhost:3000/otp/generate to generate secret

- Open Google Authenticator

- Scan QRCode


## Test

- Open http://localhost:3000/otp/get

- Verify that this code is the same on your device


## Usage

- Open http://localhost:3000/otp/verify

- Open Google Authenticator

- Enter your code
