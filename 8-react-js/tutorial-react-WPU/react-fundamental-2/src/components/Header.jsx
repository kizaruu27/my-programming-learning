/* eslint-disable react/prop-types */
function Header({nama, course}) {
    return <h1>Belajar React Bersama Bapack {nama ? nama : 'SAIFUDIN'}🧀 dengan materi course {course ? course : 'HTML'}</h1>;
}

export default Header;