export default function ProfilePage({ params }) {
  return (
    <main>
      <h1>User Profile</h1>
      <p>Name: {params.name}</p>
    </main>
  );
}
