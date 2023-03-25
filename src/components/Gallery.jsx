import "../style/Gallery.css"

function Gallery(){
    return(
        <section className='Gallery'>
        <h2>Gallery</h2>
        <ul>
            <li><img width ={200} src="../assets/Nintendogs.jpeg" /></li>
            <li><img width ={200} src="../assets/Nintendogs.jpeg" /></li>
            <li><img width ={200} src="../assets/Nintendogs.jpeg" /></li>
        </ul>
    </section>
    )
}

export default Gallery;