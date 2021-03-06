---
order: 1
url: 'https://scrumpy.io'
title: 'Scrumpy'
color: ''
excerpt: 'Scrumpy is a project management app for agile teams, featuring Scrum and Kanban boards. I joined the Scrumpy team in September 2018 to support them with frontend and backend development'
tags:
    - 'Laravel'
    - 'Vuejs'
    - 'SPA'
    - 'Collaborative Editing'
---

First of all: Building working Single Page Applications is incredibly hard. Nearly every core mechanic like authorization has to be implemented in both the API and the SPA. The whole application will become a complex monster after a short period of time. And you cannot stop thinking: Why haven't I built a monolith or used the Server-Fetched Partials pattern that is so popular in the rails world?

One of the interesting challenges I was involved in (there were many), was the integration of "Collaborative Editing" into Scrumpy. While [Philipp](https://www.philipp-kuehn.com) integrated Prosemirrors Collab plugin into Scrumpys own [TipTap](https://tiptap.scrumpy.io) editor I built a proper backend within the existing Laravel GraphQL API. To remove the necessity to execute Node.js on the backend site we integrated Prosemirrors document merging in the client. So the backends only responsibility is to keep track of versions & steps. In addition I wrote a small PHPUnit extension that allowed us to fire simultaneous requests at the API to catch every timing bug we could possibly think of.
