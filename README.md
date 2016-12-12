# Project Atrium

[![N|Solid](https://getsiphon.com/blog/images/future-of-apps/react-native.png)](https://www.google.ca/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi-kOmmr-3QAhVY-GMKHQaICNoQFggcMAA&url=https%3A%2F%2Ffacebook.github.io%2Freact-native%2F&usg=AFQjCNEV4xO7C_KGWg1ZI92h94PweGqCIA)

Project Atrium is react native mobile application that is aimed at helping on-site civil engineers and construction managers consolidate all project related images and files in a single cloud based platform.

### Technologies used

Project  uses a number of open source projects to work properly:

* [React Native] - Cross-platform library for building native apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Socket] - simple and effective library for handling socket-based events

### Installation

React native uses React Native cli for easy deployment and development. Make a change in your file and instantanously see your updates, as well deploying to either iOS or Android device.

Open your favorite Terminal and run these commands.

Install all project dependencies:
```sh
$ npm i
```

Run the following to deploy to your target device
```sh
$ react-native start [android|ios]
```

#### Installing App on your device for non-devs
We setup an [Exponent] project, follow the instructions listed to install Exponent on your target device.

[Atrium Prototype]

### Todos

 - Write Unit Tests using Jest
 - Add Express backend support
 - Add backend Socket integration

License
----

MIT

   [git-repo-url]: <https://github.com/ragu-S/project-atrium.git>
   [node.js]: <http://nodejs.org>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [React Native]: <http://angularjs.org>
   [Socket]: <http://socket.io/>
   [Exponent]: <https://getexponent.com/>
   [Atrium Prototype]: <https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www>
