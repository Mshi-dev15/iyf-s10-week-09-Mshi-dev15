# Week 9: CommunityHub — React Advanced

## Author
- **Name:** Mshi
- **GitHub:** [@Mshi-dev15](https://github.com/Mshi-dev15)
- **Date:** April 18, 2026

## Project Description
CommunityHub is a multi-page React application built as part of the IYF Weekend Academy Season 10 curriculum. It demonstrates advanced React patterns including useEffect, data fetching, React Router, custom hooks, and a reusable component library.

## Technologies Used
- React 18
- React Router DOM v6
- Vite
- JavaScript (ES6+)
- CSS3
- JSONPlaceholder API

## Features
- Multi-page navigation with React Router
- Real API data fetching from JSONPlaceholder
- Custom hooks: useFetch, useLocalStorage, useToggle, useForm
- Protected routes with login/logout authentication
- Debounced search filtering users
- Form validation with useForm hook
- Reusable component library (Button, Input, Card)
- Timer with useEffect interval and cleanup
- User Profile page with parallel API fetches and tabs
- Loading and error states on all data pages
- Daily Challenges: Timer, Search, Tabs, Protected Routes, User Profile

## How to Run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173/iyf-s10-week-09-Mshi-dev15/` in your browser

## Lessons Learned
- How useEffect works with different dependency arrays
- How to clean up side effects to prevent memory leaks
- How to build and reuse custom hooks across components
- How React Router handles navigation and dynamic routes
- How to protect pages using context and Navigate
- How to debounce search input using useEffect and setTimeout

## Challenges Faced
- React Router v7 conflicted with React 19 — solved by installing react-router-dom@6.22.0
- GitHub Pages showed a blank page — solved by switching from BrowserRouter to HashRouter and setting the base path in vite.config.js
- Project src folder was nested inside a subfolder — solved by copying it to the root level

## Live Demo
[View Live Demo](https://Mshi-dev15.github.io/iyf-s10-week-09-Mshi-dev15/)