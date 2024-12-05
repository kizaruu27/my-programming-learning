export default function ArchiveLayout({ archive, latest }) {
  // paralel routes adalah sebuah metode yg dapat memungkinkan untuk merender lebih dari 1 routes dalam 1 page
  // simbol @ pada struktur folder manandakan bahwa sebuah halaman dapat dirender secara paralel
  // nama paralel page dijadikan sebagai props pada layout yg dapat dipanggil seperti memanggil props biasa

  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
