/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as UsersIndexImport } from './routes/users/index'
import { Route as ProjectsIndexImport } from './routes/projects/index'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as UsersUserIdImport } from './routes/users/$userId'
import { Route as ProjectsProjectIdImport } from './routes/projects/$projectId'
import { Route as BlogBlogIdImport } from './routes/blog/$blogId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersIndexRoute = UsersIndexImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIndexRoute = ProjectsIndexImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  id: '/posts/',
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  id: '/blog/',
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any)

const UsersUserIdRoute = UsersUserIdImport.update({
  id: '/users/$userId',
  path: '/users/$userId',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsProjectIdRoute = ProjectsProjectIdImport.update({
  id: '/projects/$projectId',
  path: '/projects/$projectId',
  getParentRoute: () => rootRoute,
} as any)

const BlogBlogIdRoute = BlogBlogIdImport.update({
  id: '/blog/$blogId',
  path: '/blog/$blogId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/blog/$blogId': {
      id: '/blog/$blogId'
      path: '/blog/$blogId'
      fullPath: '/blog/$blogId'
      preLoaderRoute: typeof BlogBlogIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/$projectId': {
      id: '/projects/$projectId'
      path: '/projects/$projectId'
      fullPath: '/projects/$projectId'
      preLoaderRoute: typeof ProjectsProjectIdImport
      parentRoute: typeof rootRoute
    }
    '/users/$userId': {
      id: '/users/$userId'
      path: '/users/$userId'
      fullPath: '/users/$userId'
      preLoaderRoute: typeof UsersUserIdImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexImport
      parentRoute: typeof rootRoute
    }
    '/users/': {
      id: '/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/blog': typeof BlogIndexRoute
  '/posts': typeof PostsIndexRoute
  '/projects': typeof ProjectsIndexRoute
  '/users': typeof UsersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/blog': typeof BlogIndexRoute
  '/posts': typeof PostsIndexRoute
  '/projects': typeof ProjectsIndexRoute
  '/users': typeof UsersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/projects/$projectId': typeof ProjectsProjectIdRoute
  '/users/$userId': typeof UsersUserIdRoute
  '/blog/': typeof BlogIndexRoute
  '/posts/': typeof PostsIndexRoute
  '/projects/': typeof ProjectsIndexRoute
  '/users/': typeof UsersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/blog/$blogId'
    | '/projects/$projectId'
    | '/users/$userId'
    | '/blog'
    | '/posts'
    | '/projects'
    | '/users'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/blog/$blogId'
    | '/projects/$projectId'
    | '/users/$userId'
    | '/blog'
    | '/posts'
    | '/projects'
    | '/users'
  id:
    | '__root__'
    | '/'
    | '/blog/$blogId'
    | '/projects/$projectId'
    | '/users/$userId'
    | '/blog/'
    | '/posts/'
    | '/projects/'
    | '/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BlogBlogIdRoute: typeof BlogBlogIdRoute
  ProjectsProjectIdRoute: typeof ProjectsProjectIdRoute
  UsersUserIdRoute: typeof UsersUserIdRoute
  BlogIndexRoute: typeof BlogIndexRoute
  PostsIndexRoute: typeof PostsIndexRoute
  ProjectsIndexRoute: typeof ProjectsIndexRoute
  UsersIndexRoute: typeof UsersIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BlogBlogIdRoute: BlogBlogIdRoute,
  ProjectsProjectIdRoute: ProjectsProjectIdRoute,
  UsersUserIdRoute: UsersUserIdRoute,
  BlogIndexRoute: BlogIndexRoute,
  PostsIndexRoute: PostsIndexRoute,
  ProjectsIndexRoute: ProjectsIndexRoute,
  UsersIndexRoute: UsersIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blog/$blogId",
        "/projects/$projectId",
        "/users/$userId",
        "/blog/",
        "/posts/",
        "/projects/",
        "/users/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/blog/$blogId": {
      "filePath": "blog/$blogId.tsx"
    },
    "/projects/$projectId": {
      "filePath": "projects/$projectId.tsx"
    },
    "/users/$userId": {
      "filePath": "users/$userId.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.tsx"
    },
    "/posts/": {
      "filePath": "posts/index.tsx"
    },
    "/projects/": {
      "filePath": "projects/index.tsx"
    },
    "/users/": {
      "filePath": "users/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
