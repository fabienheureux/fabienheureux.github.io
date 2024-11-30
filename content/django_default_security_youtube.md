+++
title = "YouTube & Django security middleware"
date = 2022-03-20
description = "Django's defaults security settings can prevent from embedding Youtube videos."
[taxonomies]
tags=["code"]
+++

## TL;DR

When embedding Youtube videos in a Django project, use:

```python
SECURE_REFERRER_POLICY = "strict-origin-when-cross-origin"
```

Want to know more? Read on.

---

![image](https://user-images.githubusercontent.com/1702255/156556134-f519f66f-d731-4fd7-b79d-bc6da7ace48f.png)

[Embed link](https://www.youtube.com/embed/DIhWBhf1lPY?feature=oembed&autoplay=1)

On a recent [Wagtail](https://wagtail.org/) project, I embedded YouTube music videos using the [embed feature](https://docs.wagtail.org/en/stable/advanced_topics/embeds.html) (based on [oEmbed specification](https://oembed.com/))

Others had reported this issue before for [copyrighted content](https://support.google.com/youtube/thread/17866150/unavailable-video-due-to-copyright?hl=en) or video without embedding allowed. The content I was trying to embed is definitely copyrighted and with embedding allowed.

In a [Codepen](https://codepen.io/fabienheureux/pen/wvPRxed) I could display the video properly.

I looked at the project settings and couldn't see any causes expect from the [`Django Security Middleware`](https://docs.djangoproject.com/en/4.0/ref/middleware/#module-django.middleware.security).
I turned it off and I could see the video :tada:.
It seemed that some security settings didn't let the browser load the video.

Wagtail applies the default configuration from `Django Security Middleware`, it's the standard way of bootstrapping a new project through the [official `wagtail start` command](https://docs.wagtail.org/en/stable/getting_started/tutorial.html#generate-your-site).

I looked at the `Django Security Middleware` documentation and various [security settings](https://docs.djangoproject.com/en/4.0/ref/middleware/#django.middleware.security.SecurityMiddleware) I could tweak.

After toggling settings one by one, I found the culprit: [`SECURE_REFERER_POLICY`](https://docs.djangoproject.com/en/4.0/ref/settings/#std:setting-SECURE_REFERRER_POLICY).

This setting relates to the [Referer HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) which gives information about the page making a request (i.e. the request's origin).
Moreover, this setting directly interfaces the [Referrer-Policy HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) which controls how much information the `Referer` HTTP header contains.

The default value for Django is `same-origin`, which sends information only for request on the same domain. In this case, a request to `youtube.com` won't send any `Referer` HTTP header.

Youtube requires the `Referer` HTTP header set when embedding some videos.

I ended up setting the following in my configuration:

```python
# settings/base.py
SECURE_REFERRER_POLICY = "strict-origin-when-cross-origin"
```

Some possible reasons of why Youtube requires the `Referer` HTTP header:

- Youtube restricts Copyrighted content to some countries, it checks the origin website before sending the content.
- It's possible to [restrict the embedding](https://support.google.com/youtube/answer/6301625?hl=en) of videos. This uses the `Referer` HTTP header to filter which websites can embed content.

---

Thanks to [nobe4](https://github.com/nobe4) for the ~~rewrite~~ proofreading.
