Eye-Fi Presenter
===========

Eye-Fi Presenter receives photos from an Eye-Fi SD-Card and displays them in real time as they appear.

Every pictures taken with the Eye-Fi card is displayed in full screen until the next one arrives.

Eye-Fi Presenter is open source (MIT License) and built on top of open (source) web technologies
(HTML, CSS, JavaScript, Ruby and Sinatra). The actual presenter is a HTML5 page which can be displayed
in full screen by using a browser that supports a full screen mode, such as Google Chrome.
The Best solution is to open the presenter page in a separate chrome window, move it to the
2nd screen / projector and go full screen there.

Eye-Fi Presenter also includes it's own Eye-Fi Server to receive photos so there is no need to install
the official Eye-Fi Software on the machine.
The [original server](https://github.com/kenkeiter/ryfi "ryfi on GitHub") was written by Kenneth Keiter.


How to use
----------

Look for your Eye-Fi Cards MAC address as well as UploadKey. On Mac OS your can do this by looking into
Eye-Fi's Settings file.

	cat ~/Library/Eye-Fi/Settings.xml
	
Add the MAC address and UploadKey to the config.rb file:




Changelog
---------

* **1.0** - 24.03.2011
	* initial release


Credits
-------

Written by [Matthias Schmidt](http://www.m-schmidt.eu/) for [enjoy the reality 2011](http://www.enjoythereality.net/)

Thanks to [kenkeiter](https://github.com/kenkeiter) for the
Ruby/Sinatra Eye-Fi Server [ryfi](https://github.com/kenkeiter/ryfi)
