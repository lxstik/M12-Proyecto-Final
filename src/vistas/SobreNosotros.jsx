export default function SobreNosotros() {
    return (
        <>

            <main>
                <div className="container mt-5">
                    <h1 className="text-center font-weight-bold">Sobre Nosotros</h1>
                    <div className="card shadow-lg p-4 mt-4">
                        <div className="text-center">
                            <img src="../public/logo.png" alt="Logo" style={{ width: '300px' }} />
                        </div>
                        
                        <p className="text-justify">
                            Somos <strong>(AUN NO TENGO NOMBRE DE LA EMPRESA)</strong>, una empresa apasionada por la cultura geek y la tecnología. Nos especializamos en la compra y venta de productos frikis, gadgets innovadores, tecnología de última generación y merchandising exclusivo.
                        </p>
                        <p className="text-justify">
                            Ubicados en el corazón de <strong>Barcelona</strong>, nos enorgullecemos de ofrecer a nuestra comunidad productos únicos y difíciles de encontrar en tiendas convencionales. Desde figuras coleccionables y videojuegos hasta hardware especializado, tenemos algo para cada fanático.
                        </p>
                        <p className="text-justify">
                            ¿Sabías que colaboramos con artistas locales para traer productos exclusivos a nuestros clientes? Además, organizamos eventos y sorteos para nuestra comunidad, asegurándonos de que cada visita a nuestra tienda sea una experiencia especial.
                        </p>
                        <div className="text-center mt-4">
                            <h5>Visítanos en:</h5>
                            <p><strong>Dirección:</strong> Calle Geek, 42, Barcelona, España</p>
                            <p><strong>Email:</strong> falyehor@fpllefia.com</p>
                            <p><strong>Teléfono:</strong> +34 123 456 789</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}