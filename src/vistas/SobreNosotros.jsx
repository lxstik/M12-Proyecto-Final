export default function SobreNosotros() {
    return (
        <main className="container my-5">
            <h1 className="text-center fw-bold mb-4">Sobre Nosotros</h1>

            <div className="card shadow-lg p-4 rounded-4 bg-light">
                <div className="text-center mb-4">
                    <img
                        src="../public/logo.png"
                        alt="Logo de la empresa"
                        style={{ width: '250px' }}
                        className="img-fluid"
                    />
                </div>

                <p className="lead text-justify">
                    Somos <strong>(Nombre de la empresa pendiente)</strong>, una iniciativa nacida de la pasión por la cultura geek, la tecnología y el coleccionismo. Nos dedicamos a conectar a fans con productos únicos y de calidad: desde gadgets innovadores hasta merchandising exclusivo y rarezas geek.
                </p>

                <p className="text-justify">
                    Con sede en el vibrante corazón de <strong>Barcelona</strong>, nos destacamos por ofrecer artículos que rara vez se encuentran en tiendas convencionales. ¿Buscas figuras de colección, videojuegos retro, hardware personalizado o ediciones limitadas? Aquí los encontrarás.
                </p>

                <p className="text-justify">
                    Además, colaboramos con artistas y creadores locales para lanzar productos exclusivos y organizamos eventos temáticos, torneos y sorteos que hacen de nuestra comunidad algo único. Queremos que cada visita sea más que una compra: una experiencia.
                </p>

                <div className="text-center mt-5">
                    <h5 className="fw-bold">¿Dónde encontrarnos?</h5>
                    <p><strong>Dirección:</strong> Calle Geek, 42 · Barcelona, España</p>
                    <p><strong>Email:</strong> falyehor@fpllefia.com</p>
                    <p><strong>Teléfono:</strong> +34 123 456 789</p>
                </div>
            </div>
        </main>
    );
}
