export default function PoliticaPrivacidad() {
    return (
        <main className="container my-5">
            <h1 className="text-center fw-bold mb-4">Política de Privacidad</h1>

            <div className="card shadow p-4 bg-light rounded-4">
                <div className="text-center mb-4">
                    <img
                        src="/logo.png"
                        alt="Logo de la empresa"
                        style={{ width: '250px' }}
                        className="img-fluid"
                    />
                </div>

                <section className="mb-4">
                    <h3 className="fw-semibold">Información que Recopilamos</h3>
                    <p>Podemos recopilar la siguiente información personal de nuestros usuarios:</p>
                    <ul>
                        <li><strong>Datos de identificación:</strong> nombre, apellidos, dirección, correo electrónico y teléfono.</li>
                        <li><strong>Información de pago:</strong> datos de tarjetas de crédito/débito o métodos de pago alternativos.</li>
                        <li><strong>Historial de transacciones:</strong> compras, ventas y movimientos realizados en la plataforma.</li>
                        <li><strong>Datos de navegación:</strong> IP, navegador, cookies y tecnologías similares.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Uso de la Información</h3>
                    <p>La información recopilada se utiliza para:</p>
                    <ul>
                        <li>Facilitar operaciones de compra y venta entre usuarios.</li>
                        <li>Mejorar el funcionamiento de nuestros servicios.</li>
                        <li>Procesar pagos y validar transacciones.</li>
                        <li>Cumplir con requisitos legales y fiscales.</li>
                        <li>Enviar promociones, solo si el usuario ha dado su consentimiento.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Compartición de Información</h3>
                    <p>No compartimos tus datos con terceros, salvo en los siguientes casos:</p>
                    <ul>
                        <li>Con proveedores que prestan servicios esenciales (pagos, envíos, soporte técnico).</li>
                        <li>Cuando sea requerido por ley o autoridad competente.</li>
                        <li>En procesos de fusión, adquisición o venta de la empresa.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Seguridad de la Información</h3>
                    <p>Aplicamos medidas de seguridad físicas, electrónicas y administrativas para proteger tus datos frente a accesos no autorizados, alteraciones o pérdidas.</p>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Tus Derechos</h3>
                    <p>Como usuario, tienes derecho a:</p>
                    <ul>
                        <li>Acceder, corregir o eliminar tu información personal.</li>
                        <li>Solicitar la limitación u oposición al tratamiento de tus datos.</li>
                        <li>Retirar tu consentimiento en cualquier momento.</li>
                    </ul>
                    <p>Para ejercer estos derechos, escríbenos a: <strong>[correo electrónico de contacto]</strong>.</p>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Cookies y Tecnologías Similares</h3>
                    <p>Utilizamos cookies para mejorar tu experiencia, personalizar contenido y analizar el tráfico. Puedes modificar tus preferencias desde la configuración de tu navegador.</p>
                </section>

                <section className="mb-4">
                    <h3 className="fw-semibold">Modificaciones a esta Política</h3>
                    <p>Nos reservamos el derecho a actualizar esta política. Te notificaremos cualquier cambio importante a través del sitio web o por correo electrónico.</p>
                    <p className="text-center fw-bold">Última actualización: <strong>[Fecha]</strong></p>
                </section>
            </div>
        </main>
    );
}
