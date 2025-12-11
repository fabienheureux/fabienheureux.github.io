+++
title = "Why Your Nginx Alias Returns Wrong MIME Types"
date = 2025-02-17
description = "I spent way too long debugging why static files served through an nginx alias directive were being sent with incorrect MIME types."
[taxonomies]
tags=["til", "nginx", "devops"]
+++

## The Problem

I had a simple nginx configuration using `alias` to serve media files:

```nginx
http {
    server {
        location /media/ {
            alias /app/media/;
        }
    }
}
```

Everything seemed fine, but browsers were receiving the wrong `Content-Type` headers. Instead of `image/png` for images, nginx was serving everything as `application/octet-stream` or `text/plain`.

Including the MIME types configuration **inside the server block** fixes it:

```nginx
http {
    server {
        include /etc/nginx/mime.types;
        
        location /media/ {
            alias /app/media/;
        }
    }
}
```

## Why This Happens

The `mime.types` file contains the mapping between file extensions and their corresponding MIME types. While it's often included at the `http` level in the main nginx configuration, if you're working with a minimal config or the include is missing from your specific server block, nginx won't know how to properly identify file types.

Without this mapping, nginx falls back to a default MIME type, which won't work correctly for CSS, JavaScript, images, and other static assets.

## The Takeaway

When using nginx `alias` (or `root`), always ensure `mime.types` is included at the `http` or `server` level. It's one of those configurations that's easy to overlook but critical for serving static files correctly.
