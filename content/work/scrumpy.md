---
order: 1
url: 'https://scrumpy.io'
title: 'Scrumpy'
color: ''
excerpt: 'Scrumpy was a project management app for agile teams, featuring Scrum and Kanban boards. I joined the Scrumpy team in September 2018 to support them with frontend and backend development'
tags:
    - 'Laravel'
    - 'Vuejs'
    - 'Collaborative Editing'
---

One of the fascinating challenges I was involved in (there were many), was the integration of "Collaborative Editing" into Scrumpy.

The now really well known [TipTap editor](https://tiptap.dev) was originally built by [Philipp](https://www.philipp-kuehn.com) for Scrumpy, because there was a lack of good editors for the Vue.js ecosystem. After I joined Scrumpy both of us took on the challenge to make it collaborative. While Philipp integrated Prosemirrors Collab plugin into TipTap I built a proper backend in Node.js and integrated it into the existing Laravel based GraphQL API. In addition, I wrote a small PHPUnit extension that allowed us to fire simultaneous requests at the API to catch every timing bug we could possibly think of.

Later I was also involved in making the new and improved version 2.0 of TipTap collaborative, this time using a CRDT (Take a look at the hocuspocus project for more information).
