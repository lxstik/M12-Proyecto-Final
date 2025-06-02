export default function TerminosCondiciones() {
    return (
        <main className="container my-5">
            <h1 className="text-center fw-bold mb-4">Términos y Condiciones</h1>

            <div className="card shadow p-4 bg-light rounded-4">
                <div className="text-center mb-4">
                    <img
                        src="/logo.png"
                        alt="Logo de la empresa"
                        className="img-fluid"
                        style={{ width: '250px' }}
                    />
                </div>

                <section className="mb-4">
                    <h3 className="fw-semibold">Uso de la Plataforma</h3>
                    <p>Al acceder y utilizar esta plataforma, el usuario acepta cumplir con los siguientes compromisos:</p>
                    <ul>
                        <li>Ser mayor de edad y proporcionar información verídica y actualizada.</li>
                        <li>No utilizar la plataforma con fines ilícitos, fraudulentos o malintencionados.</li>
                        <li>Respetar los derechos, privacidad e integridad de otros usuarios.</li>
                        <li>Evitar la publicación de contenido ofensivo, ilegal o que infrinja derechos de terceros.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Registro y Cuentas de Usuario</h3>
                    <p>
                        Algunas funcionalidades requieren que el usuario se registre. Este será responsable de mantener sus credenciales seguras y de toda actividad realizada desde su cuenta.
                    </p>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Publicación y Venta de Productos</h3>
                    <p>Los usuarios pueden publicar productos, asegurando que:</p>
                    <ul>
                        <li>Los artículos cumplan con nuestras políticas internas y normativas legales.</li>
                        <li>La información ofrecida (descripción, imágenes, precio) sea clara, precisa y verídica.</li>
                        <li>El producto no infrinja derechos de autor, marcas registradas u otras disposiciones legales.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Pagos y Transacciones</h3>
                    <p>
                        Las transacciones son gestionadas mediante plataformas de pago seguras. La empresa no se responsabiliza por incidencias derivadas de fallos bancarios, fraudes externos o errores de procesamiento.
                    </p>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Responsabilidades del Usuario</h3>
                    <p>El uso de la plataforma es responsabilidad exclusiva del usuario. La empresa no responderá por:</p>
                    <ul>
                        <li>Productos falsificados, defectuosos o mal descritos.</li>
                        <li>Conflictos o disputas entre compradores y vendedores.</li>
                        <li>Interrupciones, pérdidas de datos o accesos no autorizados a la cuenta.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Propiedad Intelectual</h3>
                    <p>
                        Todo el contenido de esta plataforma —incluyendo logotipos, textos, imágenes y diseños— es propiedad exclusiva de la empresa o sus licenciatarios, y está protegido por la legislación vigente en materia de propiedad intelectual.
                    </p>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Modificaciones a los Términos</h3>
                    <p>
                        Nos reservamos el derecho de actualizar estos términos y condiciones en cualquier momento. Los cambios serán efectivos desde su publicación en el sitio web.
                    </p>
                </section>
            </div>
        </main>
    );
}
