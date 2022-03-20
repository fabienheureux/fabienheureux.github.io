+++
title = "Embedded YouTube videos and Django security middleware"
date = 2022-03-20
description = "Embedding videos in Django templates can lead to an error from YouTube: _This video is unavailable_. Let's see what causes it and how it can be fixed."
+++

On a recent Wagtail project, I had to embed YouTube music videos.    
It is based on a basic Wagtail's installation with **Django default security middleware applied**, that are set in any wagtail project initialised through Wagtail's CLI. 
  
A random issue occurred with some YouTube videos being unavailable when embedding through wagtail built-in [embed feature](https://docs.wagtail.org/en/stable/advanced_topics/embeds.html), which is based on oEmbed specification. Nothing fancy here.  
   
The issue, as detailed [here](https://github.com/wagtail/wagtail/issues/8068]), manifests itself with a "currently unavailable" message displayed instead of the YouTube player.  
![image](https://user-images.githubusercontent.com/1702255/156556134-f519f66f-d731-4fd7-b79d-bc6da7ace48f.png)
  
It can be easily reproduced by opening [this link](https://www.youtube.com/embed/DIhWBhf1lPY?feature=oembed&autoplay=1) directly in a new browser window.
  
When looking for an explanation, it appeared that a similar issue occurred to [people trying to embed copyrighted content](https://support.google.com/youtube/thread/17866150/unavailable-video-due-to-copyright?hl=en) or videos for which the embedding was disabled.  
When checking with the client, they confirmed that the content was indeed copyrighted but embedding was allowed.  
When trying to reproduce the issue in a codepen, the same video displayed properly.  

Looking at my project settings, I did not see anything that could cause such an issue except the Django security middleware, that I tried disabling.  
The issue was immediately gone.
  
Curious about [what this middleware does exactly](https://docs.djangoproject.com/en/4.0/ref/middleware/#module-django.middleware.security), I looked at the documentation that explains that it sets various security headers recommended for most setups.  
Each header value can be individually customized.  
So I started disabling every one of them one after another, the culprit was quickly found: [the Referer header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer).  
[This policy](https://docs.djangoproject.com/en/4.0/ref/middleware/#referrer-policy) can be customised through the [`SECURE_REFERER_POLICY`](https://docs.djangoproject.com/en/4.0/ref/settings/#secure-referrer-policy) setting.  
I solved the issue by using this value:  
```python
# settings/base.py
SECURE_REFERRER_POLICY = "strict-origin-when-cross-origin"
```
The important thing about the policy you choose is that it differs in term of restrictions from the default `same-origin` set by Django security middleware.  
Here is the policy description:
> Send the origin, path, and query string for same-origin requests. Don't send the Referer header for cross-origin requests.
  
I have not yet a clear explanation about why YouTube blocks embedding videos with the `same-origin` policy but I assume it is because embedding copyrighted content without telling YouTube about where (in which country) it is displayed would allow bypassing geographical restrictions.

