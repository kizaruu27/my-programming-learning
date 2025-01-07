// ! Note ! //
export default async function DetailProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>{slug ? "Detail Product Page" : "Product Page"}</h1>
      {slug && (
        <>
          <p>Category: {slug[0]}</p>
          <p>Gender: {slug[1]}</p>
          <p>Product Id: {slug[2]}</p>
        </>
      )}
    </div>
  );
}
