// 2) useNavigation (Data Router Feature)
// Meaning

// Shows navigation state (pending / idle).
// Useful for loading states during route change.

// When to Use

// Show loader while route is loading (with loaders/actions)

// Example
// import { useNavigation } from "react-router-dom";

// function App() {
//   const navigation = useNavigation();

//   return (
//     <>
//       {navigation.state === "loading" && <p>Loading...</p>}
//       <Outlet />
//     </>
//   );
// }

// Real Use

// Show loading spinner while navigating between pages.