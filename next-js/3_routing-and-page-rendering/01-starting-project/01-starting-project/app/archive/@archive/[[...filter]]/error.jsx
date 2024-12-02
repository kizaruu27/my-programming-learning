"use client";

// ! 4. Handling errors with Error Pages
// Buat page dengan nama error.jsx untuk menghandle ketika terjadi error
export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>{error.message}</p>
    </div>
  );
}
