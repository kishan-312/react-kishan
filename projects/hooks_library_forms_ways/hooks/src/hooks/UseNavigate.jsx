import React from 'react'

function UseNavigate() {

    const navigate = UseNavigate()

    return (
        <>


        </>
    )
}

export default UseNavigate

// 1) useNavigate
// Meaning

// Used to redirect / navigate to another route using JavaScript.

// When to Use

// After form submit

// On button click

// When login success, navigate to dashboard

// Example
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <button onClick={() => navigate("/about")}>
//       Go To About Page
//     </button>
//   );
// }

// Real Use

// Login → Redirect to Dashboard

// Ahh you mean <Navigate replace /> (component), not navigate() function ✅

// No problem — let's explain simply.

// 💡 <Navigate /> Component

// Used inside JSX to redirect to another route.

// Basic Example:
// <Navigate to="/login" />


// This will redirect to /login.

// 🔥 What does replace do here?

// Same meaning as before:

// <Navigate to="/login" replace />


// replace removes current page from history, so user cannot go back to the old page using the back button.

// ✅ Example — Protect Route (if user not logged in)
// import { Navigate } from "react-router-dom";

// function Dashboard({ isLoggedIn }) {
//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

//   return <h1>Dashboard Page</h1>;
// }

// export default Dashboard;

// What Happens:

// If logged in → Show Dashboard ✅

// If NOT logged in → Redirect to Login and cannot go back 🔥

// 🎯 When to use <Navigate replace />?
// Case	Why
// After login	Don’t come back to login screen
// After logout	Don’t go back to dashboard
// Protected Pages	Force redirect cleanly
// 🧠 Super Simple Meaning (10th Std Level)
// Code	Back Button Works?	Meaning
// <Navigate to="/login" />	✅ Yes	Normal redirect
// <Navigate to="/login" replace />	❌ No	Redirect and remove history

// If you want, I can now show:
// ✅ Full Protected Route Setup
// ✅ With useContext and login state
// ✅ Very simple structure like your project style

// Just say “Protected Route Example ✅”


