--- 
layout: null 
--- 
'use strict'; 
 
const version = '{{site.time | date: '%Y%m%d%H%M%S'}}::'; 
 
var cacheName = '{{ site.first_name}}-{{ site.last_name}}-cache-v1'; 
var filesToCache = [ 
    // Stylesheet 
    '/css/styles.css', 
 
    // Pages and assets 
    {% for page in site.html_pages %} 
      '{{ page.url }}', 
    {% endfor %} 
    '/assets/images/glitch.png', 
  '/assets/images/drawing.png', 
  '/assets/images/bust.png', 
  '/assets/images/background.gif', 
 
  // Main pages 
    {%- for page in site.pages -%} 
        {%- case page.layout -%} 
            {% when 'standard' or 'portfolio' %} 
                {{ page.url }}, 
        {%- endcase -%} 
    {%- endfor -%} 
 
    // JS files, Portfolio assets and main video 
    // (!) This will throw a Liquid error. Read below. 
  {% for file in site.static_files %} 
        {% if file.extname == '.js' or 
              file.path contains '/portfolio/screenshots' or 
              file.path contains '/portfolio/thumbnails' %} 
              '{{ file.path }}', 
    {% endif %} 
  {% endfor %} 
]; 
 
// serviceWorker.js 
self.addEventListener('install', function(event) { 
    event.waitUntil( 
        caches.open(cacheName).then(function(cache) { 
            return cache.addAll(filesToCache); 
        }) 
    ); 
}); 
 
self.addEventListener('fetch', function(event) { 
    event.respondWith( 
        caches.match(event.request) 
            .then(function(response) { 
                if (response) { 
                    console.log('[*] Serving cached: ' + event.request.url); 
                    return response; 
                } 
 
                console.log('[*] Fetching: ' + event.request.url); 
                return fetch(event.request); 
            } 
        ) 
    ); 
});