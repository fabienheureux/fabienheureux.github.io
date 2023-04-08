+++
title = "IoT : How I added AirPlay 2 support to BalenaSound on a Sunday Afternoon"
date = 2023-01-25
description = "I needed AirPlay 2 on an existing Raspberry Pi/BalenaOS based setup. I had to understand how BalenaOS works and how I could contribute to an existing Balena project without any prior IoT knowledge. Let's see how."
+++

I use [Balena Sound](https://github.com/balena-labs-projects/balena-sound) running on a Raspberry Pi plugged in a [DAC](https://www.hifiberry.com/shop/boards/hifiberry-dacplus-rca-version/) at home, as an [AirPlay](https://www.apple.com/fr/airplay/) receiver.  
In layman's terms: I play my music through the WiFi on a non-intelligent hifi system using a Raspberry Pi.

**Balena Sound** is a mix of two great open-source projects:

- [BalenaOS](https://www.balena.io/os), which is a portable and reliable operating system targetting embedded devices.
- [Shairport sync](https://github.com/mikebrady/shairport-sync), an open-source implementation of an AirPlay client, providing AirPlay 2 support since a few weeks now.

Balena Sound uses an outdated Shairport version, and I wanted to check how hard it would be to upgrade to the current release, bringing AirPlay 2 to my modest multiroom setup.

Note that I have no links with Balena. I am just a IoT hobbyist enjoying a few connected devices. I like to experiment, and Balena offers a few other interesting pre-built OS images, to [read from sensors](https://github.com/balena-labs-projects/balena-sense) or to create a [live stream](https://github.com/balena-labs-projects/balena-cam).  
I know of a few free software alternatives to Balena, but I did not find enough time yet to invest into such alternatives.

## Where to start

I did not know where to start, so I simply asked for help and got some quickly in the [GitHub issue queue](https://github.com/balena-labs-projects/balena-sound/issues/607#issuecomment-1328325747). Documentation is pretty straightforward:

1. Make some changes to a balena project of your choice.
1. Install [Balena CLI](https://github.com/balena-io/balena-cli).
1. Push and deploy these changes.

I blindly started by bumping the shairport version in Balena Dockerfile.  
Using the Balena CLI, you can easily publish your changes to your fleet by typing `balena push balena-sound -s .` .
It will:

1. Build the containers.
1. Push it to your devices.
1. Restart those containers on your devices.

It takes around a minute to build an around a minute to publish. Not a big deal if you have some time to kill on a Sunday 😅

As expected, it did not work, with the error below:

```
airplay  fatal error: Can't access NQPTP! Is it installed and running?
```

## Debug

If you know Docker, debugging can be done locally using `docker compose`.  
A `docker-compose.yml` config file is provided with the project, allowing you to _build_ and _run_ docker images locally.
However if you don't, you can _simply_ deploy your changes and inspect the logs through balena dashboard on a running balena device build and tweak the `Dockerfile` accordingly.  
I did both as I needed to test this on my raspberry pi.  
In the end I stopped building locally as deploying on Balena cloud was not much longer, and provided a great developer experience : you get a running software on a remote device after a few minutes, with easy to browse logs.

In my case, the error above was quite self explanatory : `NQPTP` - that is required for Shairport Sync v4.1 to run properly - is not running.
It appears that even if the shairport sync docker image has `NQPTP` built and installed, it does not run by default with the script set in the entrypoint previously used by Balena Sound.

The fix and the changes are visible [in this pull request](https://github.com/balena-labs-projects/balena-sound/pull/621).
They were quickly approved and are now part of Balena Sound 🥳.

## Conclusion

Thanks to the help of the community ([maggie44](https://github.com/maggie44) especially), a simple CLI and a nice platform, I was able to publish a new feature to Balena Sound, test it on my own device and release as a test version for others to try it out, all this during a Sunday afternoon.  
I don't think I experienced such a nice developer experience on a stack I just discovered.

However, if you know nothing about Docker, it might not be the best platform for you, or it might be the time to learn a few things about it as it seems to be quite popular among IoT projects.
