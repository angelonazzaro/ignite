<div align="center">
    <h1>Ignite</h1>
    <br>
    <p align="center">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge" />
        <img src="https://img.shields.io/github/languages/top/sl1mSha4dey/ignite?style=for-the-badge" />
    </p>
    <p align="center">
        <img src="https://img.shields.io/github/contributors/sl1mSha4dey/ignite?color=brightgreen&style=for-the-badge"  />
    </p>
</div>

# Introduction 
Ignite is a mobile friendly website animated and built with `React` which lets you search and view information about your favorite games. <br>
You may have seen other repositories with similar name, code and structure since the original idea behind this project comes from [DevEd](https://www.youtube.com/@developedbyed)'s React Course. 
<br>
This is **my personal** implementation with some added features. 

## Additional Info
The whole Ignite's workflow is based upon the current API of [raw.io](https://www.rawg.io). <br>
In order to get the application up and running, you'll need an API Key which you can get by signing in 
on the [raw.io website](https://www.rawg.io). <br><br>
Once you've got your API Key, all you need to do is to create an `.env` file in the root folder of the application and create the following environment variable:
```
REACT_APP_API_KEY="yourapikey"
```

## Demo 

https://user-images.githubusercontent.com/58223071/209577258-b0397b74-405b-4b3e-8527-656340f07d33.mp4

## How to Install
In order to install and use Waves you'll have to:
- Install `NodeJS` on your machine 
- Clone this repository
- Start the application 

### Install NodeJS on your machine
There are different ways to install `NodeJS`, but the simplest way is to navigate to the official [site](https://nodejs.org/en/) and download the LTS version. 

<img width="1512" alt="Screenshot 2022-12-24 alle 14 41 13" src="https://user-images.githubusercontent.com/58223071/209438525-3632e5d7-2273-4ef7-84dd-c330e4d9f10c.png" />

Once you have downloaded and installed NodeJS you can check if the installation was successful by running `node -v` in your terminal. If NodeJS has been successfully installed on your machine you should see something like this: 

![65F8F7FF-82FC-401D-B474-5DAC9397EDDE_4_5005_c](https://user-images.githubusercontent.com/58223071/209438692-27e5295f-8e2a-4175-97fd-fc57472d8b35.jpeg)

### Clone this Repository
In order to copy this repository you can go two ways. <br> 
The first way is to use clone the repo via `git`. Open git bash or your terminal if you are on a Unix-based system and type: 
```
git clone https://github.com/sl1mSha4dey/capture.git
```
<br />
The other way is to click on the green button in the top right corner and go to <b>Download ZIP</b> and extract it on your machine. 

<img width="908" alt="Screenshot 2022-12-26 alle 19 57 36" src="https://user-images.githubusercontent.com/58223071/209576781-351ba54d-c679-4a38-bdd5-b1829727984f.png">

### Start the application 
Once you have the repository on your machine, navigate with your terminal to the folder where you have cloned or extracted it: 
```
cd repository-folder
```
Once you are on the directory, by the `dir` or `ls` command you should get this output: 

<img width="299" alt="Screenshot 2022-12-24 alle 14 47 28" src="https://user-images.githubusercontent.com/58223071/209438735-359d8c81-8942-4d3c-8a89-797a668d3915.png">

Now proceed to install all the packages needed to run the project by running the following command: 
```
npm install 
```
Once the process has terminated, you can run the application by running: 
```
npm start
```
Your application will be available at https://localhost:3000. ENJOY!!

## References
If you would like to view the original implementation, you can find it [here](https://github.com/developedbyed/the-creative-react-course-ignite). 

## Contributing
If you would like to contribute, please: <br>
 - Fork this repository: https://github.com/sl1mSha4dey/ignite/fork 
 - Create your feature branch: `git checkout -b MY-NEW-FEATURE`
 - Commit your changes: `git commit -m 'Add my feature'`
 - Push to the branch: `git push -u origin MY-NEW-FEATURE`
 - Submit a pull request to explain what you did

 If you do not know how to code in React, but you have some idea that you'd like to add to the project, please open an issue where we can discuss it.
