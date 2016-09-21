# ezar-facedetector
Face detection demo using ezAR Face Detector plugin for Cordova.  
Detect and outline up to 5 faces.

![](https://static1.squarespace.com/static/54d524d4e4b0f489aba79ed2/t/57dc112d1b631b6ed5af7a1c/1474040112289/facedetect1.png)
##Getting Started
While ezAR works with Cordova-based SDKs such as Ionic, this example uses Cordova CLI examples are provided below. 
Install or update your [Apache Cordova sdk](https://cordova.apache.org/)

step-0.  Download and unzip the ezAR Startup Kit (ver 0.2.8 or greater) from [ezartech.com](http://ezartech.com

*Note: the project will automatically install its required Cordova plugins.  The 
ezAR VideoOverlay, FaceDetector and Snapshot plugins will be installed from the relative path 
../../plugins/ directory. If the ezAR plugins are not at that location please 
edit the config.xml with the proper location of the plugins.*

step-1.  Add your target platform(s) to the project

        cordova platform add ios
    
or

        cordova platform add android


step-2.  Build and install on device

*Note: because of the ezAR camera requirement the app will only perform correctly 
when installed on a real mobile device.*

##Use Alternative WebView
The ezAR VideoOverlay plugin supports both standard and the alternative
Crosswalk WebView for Android and WKWebView for iOS. To enable one of these
alternative webviews comment the specific plugin entries in the config.xml file.

##ezAR Docs and Tech Support
See [ezartech.com](http://ezartech.com) for documentation and support.


Copyright (c) 2015-2016, ezAR Technologies