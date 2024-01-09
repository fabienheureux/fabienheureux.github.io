+++
title = "Build a Gaggiuino from a Gaggia Classic Pro Eco and DIY-EFI kit"
date = 2024-01-04
description = "TODO"
+++

I finally built a Gaggiuino. If you do not know what it is : it is a customised Gaggia Classic Pro (GCP), an espresso coffee machine, that vastly improves its capabilities as a coffee machine.  
I wanted to share my experience in a step-by-step build review, specific to my gear : a Classic Pro Eco (european model) and a kit ordered from DIY-EFI. 

This is not a guide : the one and only guide is the official documentation. I wrote this step-by-step initially to get feedbacks from the community, to see how I could improve my build. 
  
However, as I had to go back-and-forth in the documentation to find the information I needed, I thought that publishing it as is might provide some help for newcomers 
  
Note 1: the content of this article might become outdated as the projects evolves quickly, so if you did not read the documentation yet, go read it, and come back here once it is done.
Note 2: I do not have any affiliation with DIY-EFI. They are the only official Gaggiuino kit's dealer available in the EU (they are based in the UK though, expect some VAT/custom fees)

# How to be sure I have the Gaggia Classic Pro Eco ? 

If your GCP: 
- Has been bought between year 2019 and 2022...
- ...and has a bunch of wires going to the back in a black box...
- ...and has a PCB in the black box 

Congratulations, you have a GCP Eco and can read on.  
If not, go back to the documentation and check [the compatibility table](https://gaggiuino.github.io/#/?id=compatibility) to find your model. 

# Prerequisites 

A GCP Eco...obviously
A Gaggiuino kit ordered from DIY-EFI

# What to expect in the kit from DIY-EFI ? 

The kit content is listed on [DIY-EFI website](https://diy-efi.co.uk/product/gaggiuino-v3-pcb-kit-for-gaggia-classic-pro-evo), however, without a good knowledge of the project, I was confused about what would be included :
- Everything low voltage (LV) is included: every sensors, the STM32, small wires, screen etc
- Everything high voltage (HV) related is NOT included: thick wires, spades connectors, silicon heat shrinkage tube...

This means that you need to order the HV parts yourself. 

# What should I order outside of the kit ? 

## Components

This question lead  to another question : what wiring should I do ? 
  
There are two different Gaggiuino builds that can be achieved : a stock wiring and a custom wiring. As explained in the docs : 
> It can either be integrated into the stock wiring with a few jumpers (less wiring, but sometimes more confusing) or the stock wiring can be replaced with a custom wiring harness (more work, but results in a clean, straightforward install). 

Even if this feels up to you at first sight, the official documentation recommends going with the custom wiring for the GCP Eco. 
The guide assumes you go this route. If you decide otherwise, please stop reading 🤓.

The complete list of componenents is listed in the [Alternate components](https://gaggiuino.github.io/#/guides-stm32/3pln-custom-wiring) section.  
 Click on the *Alternate Component List (Click to expand)* link to see it in full.  
Below is a detailed non-exhaustive list, specific to our build, that remove some requirements :
- 22-16 Gauge Wire Connector - [BN1.25 Bare Crimp 4 mm Silicone Heat Shrink Tube](https://www.aliexpress.com/item/3256801144001097.html) x XXX pcs 

Check the number of pieces that are included in each Ali Express link, you might no need all of them but they are usually packed in big packs. 
Note : I am not really glad of ordering on Ali Express, but these are the links from the official documentation. If you know your stuff and 

## 3D printed parts

You might not need the PCB enclosure, but you definitely need the screen mount

# Let's build

## Read the docs 
If you did not read the docs yet...please do. This article is not a guide.  
Here are the parts that will 

## Remove the top lid
1. Unscrew the two screws 
1. Unclip ground cables

TODO photo

## Unscrew the boiler

1. Unscrew the four screw under the machine 

TODO photo

## Unscrew the steam wand

TODO photo

## Unscrew the screw (?) next to the boiler

TODO photo

## Cut existing cables

1. Cut every wire coming out of the PCB at the back of the case
1. Dispose of the PCB - we won't use it anymore

The PCB won't be used anymore, the enclosure though will hold the PCB bought from DIY-EFI.

## 

## Build the wiring custom harness

We will reuse some parts that were removed in previous steps 


## Mod the switch

The power switch is specific on the GCP Eco, it uses a timer to prevent running indefinitely.  
You need to remove a little spring in it so that it can be in on or off position.

TODO : link youtube video



# Sources

- https://youtube.com/watch?v=kjeSlGhm8cA 

