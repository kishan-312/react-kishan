import React from 'react'
import

  function UseOther() {
    return (
      <div>UseOther</div>
    )
  }

export default UseOther


// B) URL / Path Hooks
// 3) useParams
// Meaning

// Gets URL dynamic params (like :id).

// Example

// Route:

// <Route path="/user/:id" element={<User />} />


// Component:

// import { useParams } from "react-router-dom";

// function User() {
//   const { id } = useParams();
//   return <h1>User ID = {id}</h1>;
// }

// Real Use

// /product/121 → Get product details by ID.

// 4) useLocation
// Meaning

// Returns current URL info (path, search, state).

// Example
// import { useLocation } from "react-router-dom";

// function Info() {
//   const location = useLocation();
//   console.log(location);
//   return <p>Current Path: {location.pathname}</p>;
// }

// Real Use

// Check current page for conditional UI.

// 5) useResolvedPath
// Meaning

// Takes a path and converts it to an absolute path.

// Example
// import { useResolvedPath } from "react-router-dom";

// function Demo() {
//   const fullPath = useResolvedPath("settings");
//   console.log(fullPath);
//   return null;
// }

// Real Use

// Useful for building custom NavLink components.

// C) Search / Query Hooks
// 6) useSearchParams
// Meaning

// Used to get/set URL query params.

// Example
// import { useSearchParams } from "react-router-dom";

// function Search() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   return (
//     <>
//       <input
//         onChange={(e) => setSearchParams({ q: e.target.value })}
//       />
//       <p>Searching for: {searchParams.get("q")}</p>
//     </>
//   );
// }

// Real Use

// Search bar, filters, pagination.

// 7) useMatches
// Meaning

// Returns an array of all matched routes.
// Useful for breadcrumbs.

// Example
// import { useMatches } from "react-router-dom";

// function Breadcrumbs() {
//   const matches = useMatches();
//   console.log(matches);
// }

// 8) useHref
// Meaning

// Converts a router-relative path to a real clickable link URL.

// Example
// import { useHref } from "react-router-dom";

// function Demo() {
//   const href = useHref("/about");
//   return <a href={href}>Go About</a>;
// }

// D) Router Context Hooks
// 9) useRouteError
// Meaning

// Used inside Error Elements to show route errors.

// Example
// import { useRouteError } from "react-router-dom";

// function ErrorPage() {
//   const err = useRouteError();
//   return <h2>Error: {err.statusText}</h2>;
// }

// 10) useRoutes
// Meaning

// Define routes inside JSX, not in <Routes>.

// Example
// import { useRoutes } from "react-router-dom";

// function AppRoutes() {
//   return useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/about", element: <About /> }
//   ]);
// }

// 11) useLoaderData
// Meaning

// Gets data returned by loader() in Data Router.

// Example
// export function loader() {
//   return fetch("/api/users").then(r => r.json());
// }

// function Users() {
//   const users = useLoaderData();
//   return <pre>{JSON.stringify(users)}</pre>;
// }

// 12) useActionData
// Meaning

// Gets data returned by action() (form submit handlers).

// Example
// function FormPage() {
//   const data = useActionData();
//   return <p>{data?.message}</p>;
// }

// 13) useNavigationType
// Meaning

// Tells how navigation happened (POP, PUSH, REPLACE).

// Example
// import { useNavigationType } from "react-router-dom";

// function Demo() {
//   const type = useNavigationType();
//   return <p>Navigation: {type}</p>;
// }

// 14) useBlocker (rare / used in advanced router setups)
// Meaning

// Prevents navigation (like "Are you sure you want to leave?")

// Example (Conceptual)
// useBlocker(isFormUnsaved);

// Real Use

// Prevent closing edit page without saving.

// ✅ Completed:
// Category	Status
// Navigation Hooks	✅
// URL Hooks	✅
// Query Hooks	✅
// Router Data Hooks	✅